import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import test from 'node:test'

function snapshotEnvironment() {
  return new Map(Object.entries(process.env))
}

function restoreEnvironment(snapshot) {
  for (const key of Object.keys(process.env)) {
    if (!snapshot.has(key)) {
      delete process.env[key]
    }
  }

  for (const [key, value] of snapshot.entries()) {
    process.env[key] = value
  }
}

async function readJsonBody(request) {
  const chunks = []
  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }

  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}
}

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload)
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json')
  response.setHeader('Content-Length', Buffer.byteLength(body))
  response.end(body)
}

async function listen(server) {
  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      server.removeListener('error', reject)
      resolve()
    })
  })

  const address = server.address()
  assert.equal(typeof address, 'object')
  return `http://127.0.0.1:${address.port}`
}

async function startMockPolarServer() {
  const requests = []
  let productSequence = 1
  let checkoutSequence = 1

  const server = createServer(async (request, response) => {
    const url = new URL(request.url ?? '/', 'http://127.0.0.1')
    const body = await readJsonBody(request)
    requests.push({
      method: request.method,
      pathname: url.pathname,
      headers: request.headers,
      body,
    })

    if (request.method === 'POST' && url.pathname === '/v1/products') {
      sendJson(response, 200, {
        id: `POLAR-PRODUCT-${productSequence++}`,
      })
      return
    }

    if (request.method === 'POST' && url.pathname === '/v1/checkouts') {
      const id = `POLAR-CHECKOUT-${checkoutSequence++}`
      sendJson(response, 200, {
        id,
        checkout_url: `https://checkout.polar.test/session/${id}`,
      })
      return
    }

    sendJson(response, 404, {
      message: 'Not found',
    })
  })

  const baseUrl = await listen(server)
  return {
    baseUrl,
    requests,
    stop: async () => {
      await new Promise((resolve) => server.close(() => resolve()))
    },
  }
}

async function startServerlessApiServer() {
  const runId = `vercel-api-${Date.now()}-${Math.random().toString(16).slice(2)}`
  const serverModule = await import(`../server.mjs?test=${encodeURIComponent(runId)}`)
  const server = createServer((request, response) => {
    void serverModule.handleMulticaApiRequest(request, response)
  })
  const baseUrl = await listen(server)

  return {
    baseUrl,
    stop: async () => {
      await new Promise((resolve) => server.close(() => resolve()))
      await serverModule.stopMulticaLaunchServer()
    },
  }
}

async function fetchJson(url, init = {}) {
  const response = await fetch(url, init)
  const text = await response.text()
  const payload = text ? JSON.parse(text) : null

  if (!response.ok) {
    throw new Error(payload?.message ?? `Request failed with status ${response.status}.`)
  }

  return payload
}

test('Vercel serverless handler can create a launch order and Polar hosted checkout session', async () => {
  const environmentSnapshot = snapshotEnvironment()
  const polar = await startMockPolarServer()
  const memoryId = `vercel-checkout-${Date.now()}-${Math.random().toString(16).slice(2)}`

  Object.assign(process.env, {
    NODE_ENV: 'production',
    MULTICA_SERVERLESS_API: 'true',
    MULTICA_DISABLE_LOCAL_ENV: 'true',
    MULTICA_POSTGRES_DRIVER: 'memory',
    MULTICA_POSTGRES_MEMORY_ID: memoryId,
    MULTICA_DEPLOYMENT_MODE: 'manual',
    MULTICA_TOKEN_SECRET: 'vercel-checkout-test-secret',
    APP_ORIGIN: 'https://multica.example.test',
    PAYMENT_PROVIDER: 'polar',
    POLAR_ENV: 'test',
    API_TEST_KEY: 'mock-polar-test-key',
    POLAR_BASE_URL: polar.baseUrl,
  })

  const apiServer = await startServerlessApiServer()

  try {
    const launch = await fetchJson(`${apiServer.baseUrl}/api/launch-orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planId: 'starter:monthly',
        modelId: 'gpt-5-4',
        channelId: 'telegram',
        communicationToken: 'telegram-vercel-token',
      }),
    })

    assert.equal(launch.order.paymentStatus, 'pending')
    assert.equal(launch.order.planId, 'starter:monthly')

    const guestToken = new URL(launch.order.consolePath, apiServer.baseUrl).searchParams.get('guest_token')
    assert.ok(guestToken)

    const checkout = await fetchJson(`${apiServer.baseUrl}/api/orders/${launch.order.id}/checkout-session`, {
      method: 'POST',
      headers: {
        'x-multica-guest-token': guestToken,
      },
    })

    assert.equal(checkout.paymentProvider, 'polar')
    assert.equal(checkout.polarCheckoutId, 'POLAR-CHECKOUT-1')
    assert.equal(checkout.checkoutUrl, 'https://checkout.polar.test/session/POLAR-CHECKOUT-1')
    assert.equal(checkout.paypalOrderId, null)
    assert.equal(checkout.paypalClientId, null)
    assert.equal(checkout.order.amountCents, launch.order.amountCents)
    assert.equal(Object.values(checkout).some((value) => String(value).includes('mock-polar-test-key')), false)

    const productRequest = polar.requests.find((request) => request.method === 'POST' && request.pathname === '/v1/products')
    const checkoutRequest = polar.requests.find((request) => request.method === 'POST' && request.pathname === '/v1/checkouts')

    assert.equal(productRequest?.headers['x-api-key'], 'mock-polar-test-key')
    assert.equal(productRequest?.body.price, launch.order.amountCents)
    assert.equal(productRequest?.body.currency, 'USD')
    assert.equal(checkoutRequest?.headers['x-api-key'], 'mock-polar-test-key')
    assert.equal(checkoutRequest?.body.request_id, launch.order.id)
    assert.ok(checkoutRequest?.body.success_url.startsWith(`https://multica.example.test/console?order=${launch.order.id}`))
    assert.equal(checkoutRequest?.body.metadata.orderId, launch.order.id)
  } finally {
    await apiServer.stop()
    await polar.stop()
    restoreEnvironment(environmentSnapshot)
  }
})

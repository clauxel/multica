import assert from 'node:assert/strict'
import test from 'node:test'

import { createSecurityHelpers } from '../server-lib/security-helpers.mjs'

class TestHttpError extends Error {}

function createHelpers(appOriginValue, requestOrigin) {
  return createSecurityHelpers({
    appOriginValue,
    getAbsoluteRequestOrigin: () => requestOrigin,
    HttpError: TestHttpError,
  })
}

test('public app origin falls back to the request origin when APP_ORIGIN points at another domain', () => {
  const { getPublicAppOrigin } = createHelpers('https://www.aigeamy.com', 'https://www.multica.uk')

  assert.equal(getPublicAppOrigin({ headers: { host: 'www.multica.uk' } }), 'https://www.multica.uk')
})

test('public app origin keeps the configured canonical host when the only difference is www', () => {
  const { getPublicAppOrigin } = createHelpers('https://www.multica.uk', 'https://multica.uk')

  assert.equal(getPublicAppOrigin({ headers: { host: 'multica.uk' } }), 'https://www.multica.uk')
})

test('public app origin keeps the configured local origin during localhost development', () => {
  const { getPublicAppOrigin } = createHelpers('http://127.0.0.1:5175', 'http://localhost:5175')

  assert.equal(getPublicAppOrigin({ headers: { host: 'localhost:5175' } }), 'http://127.0.0.1:5175')
})

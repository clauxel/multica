process.env.MULTICA_SERVERLESS_API = 'true'

const routedPathQueryParam = '__multica_api_path'

export const config = {
  maxDuration: 60,
}

export function rewriteVercelRoutedApiPath(request) {
  const requestUrl = new URL(request.url ?? '/', 'http://multica.local')
  const routedPath = requestUrl.searchParams.get(routedPathQueryParam)

  if (!routedPath) {
    return
  }

  requestUrl.searchParams.delete(routedPathQueryParam)
  const normalizedPath = routedPath.replace(/^\/+/, '')
  request.url = `/api/${normalizedPath}${requestUrl.search}`
}

export default async function handler(request, response) {
  rewriteVercelRoutedApiPath(request)
  const { handleMulticaApiRequest } = await import('../server.mjs')
  await handleMulticaApiRequest(request, response)
}

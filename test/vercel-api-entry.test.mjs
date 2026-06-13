import assert from 'node:assert/strict'
import test from 'node:test'
import { rewriteVercelRoutedApiPath } from '../api/index.mjs'

test('Vercel API route restores the original Multica API pathname before dispatch', () => {
  const request = {
    url: '/api/index.mjs?__multica_api_path=orders/0123456789abcdef0123456789abcdef/checkout-session&guest_token=guest-1',
  }

  rewriteVercelRoutedApiPath(request)

  assert.equal(
    request.url,
    '/api/orders/0123456789abcdef0123456789abcdef/checkout-session?guest_token=guest-1',
  )
})

test('Vercel API route leaves direct API requests untouched', () => {
  const request = {
    url: '/api/catalog',
  }

  rewriteVercelRoutedApiPath(request)

  assert.equal(request.url, '/api/catalog')
})

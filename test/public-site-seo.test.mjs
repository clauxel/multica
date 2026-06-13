import assert from 'node:assert/strict'
import test from 'node:test'

import { buildPublicSeoPayload } from '../shared/public-site-seo.mjs'

test('multica-ai guide SEO payload uses the multica.uk canonical URL and route-specific copy', () => {
  const seo = buildPublicSeoPayload({ pathname: '/guides/multica-ai' })

  assert.equal(seo.canonicalUrl, 'https://www.multica.uk/guides/multica-ai')
  assert.equal(seo.title, 'What Is Multica AI? Product, Model, or Agent Layer?')
  assert.match(seo.description, /what people mean by Multica AI/i)
})

test('multica-project guide SEO payload uses the multica.uk canonical URL and route-specific copy', () => {
  const seo = buildPublicSeoPayload({ pathname: '/guides/multica-project' })

  assert.equal(seo.canonicalUrl, 'https://www.multica.uk/guides/multica-project')
  assert.equal(seo.title, 'What Is the Multica Project? Team Agent Workflow Guide')
  assert.match(seo.description, /what the Multica project does/i)
})

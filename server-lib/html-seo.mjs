import { siteIdentity } from '../shared/public-site-seo.mjs'

const structuredDataScriptId = 'multica-structured-data'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function replaceHeadTag(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement)
  }

  return html.replace('</head>', `    ${replacement}\n  </head>`)
}

function renderStructuredData(structuredData) {
  const payload =
    structuredData.length <= 1
      ? structuredData[0] ?? {}
      : {
          '@context': 'https://schema.org',
          '@graph': structuredData.map((item) => {
            const { '@context': _context, ...rest } = item
            return rest
          }),
        }

  const serializedPayload = JSON.stringify(payload)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')

  return `<script id="${structuredDataScriptId}" type="application/ld+json">${serializedPayload}</script>`
}

function renderFallbackMarkup(route) {
  const paragraphs = route.fallback.summary
    .map((paragraph) => `        <p>${escapeHtml(paragraph)}</p>`)
    .join('\n')
  const highlights =
    route.fallback.highlights.length > 0
      ? `\n        <ul>\n${route.fallback.highlights
          .map((item) => `          <li>${escapeHtml(item)}</li>`)
          .join('\n')}\n        </ul>`
      : ''

  return `<section data-static-fallback="multica">
      <div>
        <span>${escapeHtml(route.fallback.eyebrow)}</span>
        <h1>${escapeHtml(route.fallback.title)}</h1>
${paragraphs}${highlights}
      </div>
    </section>`
}

export function renderHtmlWithSeo({ templateHtml, seoPayload }) {
  let html = templateHtml

  html = replaceHeadTag(html, /<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seoPayload.title)}</title>`)
  html = replaceHeadTag(
    html,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(seoPayload.description)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+name="robots"[^>]*>/i,
    `<meta name="robots" content="${escapeHtml(seoPayload.robots)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${escapeHtml(seoPayload.canonicalUrl)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:site_name"[^>]*>/i,
    `<meta property="og:site_name" content="${escapeHtml(siteIdentity.name)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(seoPayload.title)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(seoPayload.description)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${escapeHtml(seoPayload.canonicalUrl)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:image"[^>]*>/i,
    `<meta property="og:image" content="${escapeHtml(seoPayload.ogImageUrl)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+property="og:image:alt"[^>]*>/i,
    `<meta property="og:image:alt" content="${escapeHtml(seoPayload.route.title)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+name="twitter:card"[^>]*>/i,
    '<meta name="twitter:card" content="summary_large_image" />',
  )
  html = replaceHeadTag(
    html,
    /<meta\s+name="twitter:title"[^>]*>/i,
    `<meta name="twitter:title" content="${escapeHtml(seoPayload.title)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+name="twitter:description"[^>]*>/i,
    `<meta name="twitter:description" content="${escapeHtml(seoPayload.description)}" />`,
  )
  html = replaceHeadTag(
    html,
    /<meta\s+name="twitter:image"[^>]*>/i,
    `<meta name="twitter:image" content="${escapeHtml(seoPayload.ogImageUrl)}" />`,
  )
  html = replaceHeadTag(
    html,
    new RegExp(`<script[^>]+id="${structuredDataScriptId}"[^>]*>[\\s\\S]*?<\\/script>`, 'i'),
    renderStructuredData(seoPayload.structuredData),
  )
  html = html.replace(/<div id="root">[\s\S]*?<\/div>/i, `<div id="root">\n${renderFallbackMarkup(seoPayload.route)}\n    </div>`)

  return html
}

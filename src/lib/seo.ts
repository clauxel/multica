import { buildPublicSeoPayload, siteIdentity } from '../../shared/public-site-seo'

const canonicalLinkId = 'multica-canonical-link'
const structuredDataScriptId = 'multica-structured-data'

type StructuredDataRecord = Record<string, unknown>

export type SeoDocument = {
  title: string
  description: string
  canonicalUrl: string
  ogImageUrl: string
  robots: string
  structuredData: StructuredDataRecord[]
}

type BuildSeoDocumentArgs = {
  pathname: string
  publicAppOrigin: string
  supportEmail: string
}

export function buildSeoDocument({
  pathname,
  publicAppOrigin,
  supportEmail,
}: BuildSeoDocumentArgs): SeoDocument {
  const seoPayload = buildPublicSeoPayload({
    origin: publicAppOrigin,
    pathname,
    supportEmail,
  })

  return {
    title: seoPayload.title,
    description: seoPayload.description,
    canonicalUrl: seoPayload.canonicalUrl,
    ogImageUrl: seoPayload.ogImageUrl,
    robots: seoPayload.robots,
    structuredData: seoPayload.structuredData,
  }
}

function upsertMeta(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`)

  if (!(element instanceof HTMLMetaElement)) {
    element = document.createElement('meta')
    element.setAttribute(attributeName, attributeValue)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertCanonicalLink(href: string) {
  let element =
    (document.head.querySelector(`#${canonicalLinkId}`) as HTMLLinkElement | null) ??
    (document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null)

  if (!(element instanceof HTMLLinkElement)) {
    element = document.createElement('link')
    document.head.appendChild(element)
  }

  element.id = canonicalLinkId
  element.rel = 'canonical'
  element.href = href
}

function upsertStructuredData(structuredData: StructuredDataRecord[]) {
  let element = document.head.querySelector(`#${structuredDataScriptId}`) as HTMLScriptElement | null

  if (!(element instanceof HTMLScriptElement)) {
    element = document.createElement('script')
    element.id = structuredDataScriptId
    element.type = 'application/ld+json'
    document.head.appendChild(element)
  }

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

  element.textContent = JSON.stringify(payload)
}

export function syncSeoDocument(seo: SeoDocument) {
  document.title = seo.title

  upsertMeta('name', 'description', seo.description)
  upsertMeta('name', 'robots', seo.robots)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', siteIdentity.name)
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', seo.canonicalUrl)
  upsertMeta('property', 'og:image', seo.ogImageUrl)
  upsertMeta('property', 'og:image:alt', seo.title)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertMeta('name', 'twitter:image', seo.ogImageUrl)
  upsertCanonicalLink(seo.canonicalUrl)
  upsertStructuredData(seo.structuredData)
}

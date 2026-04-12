import type { ComparisonPage, RouteView, SolutionPage } from '../app-types'

const defaultSiteTitle = 'Multica - Next-Gen Agent Workspace'
const defaultSiteDescription =
  'Deploy your autonomous AI agent in seconds. Choose your preferred engine and instantly unlock a powerful, secure cloud workspace.'

const canonicalLinkId = 'multica-canonical-link'
const structuredDataScriptId = 'multica-structured-data'

type StructuredDataRecord = Record<string, unknown>

export type SeoDocument = {
  title: string
  description: string
  canonicalUrl: string
  robots: string
  structuredData: StructuredDataRecord[]
}

type BuildSeoDocumentArgs = {
  pathname: string
  routeView: RouteView
  publicAppOrigin: string
  supportEmail: string
  solutionPage: SolutionPage | null
  comparisonPage: ComparisonPage | null
}

function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/+$/, '')
  return normalized || '/'
}

function normalizeOrigin(origin: string) {
  try {
    return new URL(origin).origin
  } catch {
    return window.location.origin
  }
}

function buildCanonicalUrl(origin: string, pathname: string) {
  return new URL(normalizePathname(pathname), `${normalizeOrigin(origin)}/`).toString()
}

function buildWebPageStructuredData(title: string, description: string, canonicalUrl: string): StructuredDataRecord {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
  }
}

function buildBreadcrumbStructuredData(
  origin: string,
  pathname: string,
  currentPageLabel: string,
): StructuredDataRecord | null {
  const normalizedPath = normalizePathname(pathname)

  if (normalizedPath === '/') {
    return null
  }

  const items: Array<{ name: string; item: string }> = [
    {
      name: 'Home',
      item: buildCanonicalUrl(origin, '/'),
    },
  ]

  if (normalizedPath.startsWith('/solutions/')) {
    items.push({
      name: 'Solutions',
      item: buildCanonicalUrl(origin, '/#solutions'),
    })
  } else if (normalizedPath.startsWith('/compare/')) {
    items.push({
      name: 'Compare',
      item: buildCanonicalUrl(origin, '/#compare'),
    })
  } else if (normalizedPath === '/plans') {
    items.push({
      name: 'Pricing',
      item: buildCanonicalUrl(origin, '/#pricing'),
    })
  }

  items.push({
    name: currentPageLabel,
    item: buildCanonicalUrl(origin, normalizedPath),
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }
}

function buildFaqStructuredData(
  faqs: Array<{
    question: string
    answer: unknown
  }>,
): StructuredDataRecord | null {
  const mainEntity = faqs.flatMap((faq) => {
    if (typeof faq.answer !== 'string') {
      return []
    }

    return [
      {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      },
    ]
  })

  if (mainEntity.length === 0) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

function buildNotFoundSeoDocument(origin: string, pathname: string): SeoDocument {
  const title = 'Page not found | Multica'
  const description =
    'This Multica page could not be matched to a public marketing route. Return to the homepage to continue.'

  return {
    title,
    description,
    canonicalUrl: buildCanonicalUrl(origin, pathname),
    robots: 'noindex,nofollow',
    structuredData: [buildWebPageStructuredData(title, description, buildCanonicalUrl(origin, pathname))],
  }
}

export function buildSeoDocument({
  pathname,
  routeView,
  publicAppOrigin,
  supportEmail,
  solutionPage,
  comparisonPage,
}: BuildSeoDocumentArgs): SeoDocument {
  const normalizedPath = normalizePathname(pathname)
  const canonicalUrl = buildCanonicalUrl(publicAppOrigin, normalizedPath)

  if (routeView === 'home' && normalizedPath !== '/') {
    return buildNotFoundSeoDocument(publicAppOrigin, normalizedPath)
  }

  if (routeView === 'solution' && !solutionPage) {
    return buildNotFoundSeoDocument(publicAppOrigin, normalizedPath)
  }

  if (routeView === 'compare' && !comparisonPage) {
    return buildNotFoundSeoDocument(publicAppOrigin, normalizedPath)
  }

  if (routeView === 'home') {
    return {
      title: defaultSiteTitle,
      description: defaultSiteDescription,
      canonicalUrl,
      robots: 'index,follow',
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Multica',
          url: canonicalUrl,
          email: supportEmail,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Multica',
          url: canonicalUrl,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Multica',
          description: defaultSiteDescription,
          serviceType: 'Managed Multica deployment service',
          provider: {
            '@type': 'Organization',
            name: 'Multica',
          },
          areaServed: 'Worldwide',
          url: canonicalUrl,
        },
      ],
    }
  }

  if (routeView === 'solution' && solutionPage) {
    const title = `${solutionPage.title} | Multica`
    const description = `${solutionPage.summary} Multica supports Telegram, Discord, and WhatsApp deployment paths with one console for follow-up operations.`

    return {
      title,
      description,
      canonicalUrl,
      robots: 'index,follow',
      structuredData: [
        buildWebPageStructuredData(title, description, canonicalUrl),
        buildBreadcrumbStructuredData(publicAppOrigin, normalizedPath, solutionPage.title),
        buildFaqStructuredData(solutionPage.faqs),
      ].filter(Boolean) as StructuredDataRecord[],
    }
  }

  if (routeView === 'compare' && comparisonPage) {
    const title = `${comparisonPage.title} | Multica`
    const description = `${comparisonPage.summary} Compare launch speed, operational overhead, repeat deployment work, and follow-up clarity before choosing your Multica path.`

    return {
      title,
      description,
      canonicalUrl,
      robots: 'index,follow',
      structuredData: [
        buildWebPageStructuredData(title, description, canonicalUrl),
        buildBreadcrumbStructuredData(publicAppOrigin, normalizedPath, comparisonPage.title),
        buildFaqStructuredData(comparisonPage.faqs),
      ].filter(Boolean) as StructuredDataRecord[],
    }
  }

  if (routeView === 'privacy') {
    const title = 'Privacy Policy | Multica'
    const description =
      'Read how Multica processes visitor, account, order, payment, deployment, and support information.'

    return {
      title,
      description,
      canonicalUrl,
      robots: 'index,follow',
      structuredData: [
        buildWebPageStructuredData(title, description, canonicalUrl),
        buildBreadcrumbStructuredData(publicAppOrigin, normalizedPath, 'Privacy Policy'),
      ].filter(Boolean) as StructuredDataRecord[],
    }
  }

  if (routeView === 'terms') {
    const title = 'Terms of Service | Multica'
    const description =
      'Review the Multica Terms of Service for account, order, payment, deployment, console, and support usage.'

    return {
      title,
      description,
      canonicalUrl,
      robots: 'index,follow',
      structuredData: [
        buildWebPageStructuredData(title, description, canonicalUrl),
        buildBreadcrumbStructuredData(publicAppOrigin, normalizedPath, 'Terms of Service'),
      ].filter(Boolean) as StructuredDataRecord[],
    }
  }

  if (routeView === 'plans') {
    const title = 'Pricing Plans | Multica'
    const description =
      'Choose an Multica plan based on deployment volume, then continue into payment and console-based deployment tracking.'

    return {
      title,
      description,
      canonicalUrl,
      robots: 'noindex,nofollow',
      structuredData: [buildWebPageStructuredData(title, description, canonicalUrl)],
    }
  }

  if (routeView === 'console') {
    const title = 'Console | Multica'
    const description =
      'Track Multica orders, deployments, upgrades, and account operations inside the console.'

    return {
      title,
      description,
      canonicalUrl,
      robots: 'noindex,nofollow',
      structuredData: [buildWebPageStructuredData(title, description, canonicalUrl)],
    }
  }

  return buildNotFoundSeoDocument(publicAppOrigin, normalizedPath)
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
  upsertMeta('property', 'og:site_name', 'Multica')
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', seo.canonicalUrl)
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
  upsertCanonicalLink(seo.canonicalUrl)
  upsertStructuredData(seo.structuredData)
}

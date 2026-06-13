export type PublicRouteView =
  | 'home'
  | 'guide'
  | 'compare'
  | 'solution'
  | 'plans'
  | 'console'
  | 'privacy'
  | 'terms'
  | 'notFound'

export type PublicRouteDefinition = {
  pathname: string
  routeView: PublicRouteView
  title: string
  description: string
  robots: string
  sitemapPriority?: string
  sitemapChangefreq?: string
  breadcrumb?: {
    name: string
    href: string
  }
  fallback: {
    eyebrow: string
    title: string
    summary: string[]
    highlights: string[]
  }
}

export type PublicSeoPayload = {
  route: PublicRouteDefinition
  title: string
  description: string
  canonicalUrl: string
  ogImageUrl: string
  robots: string
  structuredData: Array<Record<string, unknown>>
  statusCode: number
}

export const siteIdentity: {
  name: string
  supportEmail: string
  defaultOrigin: string
  defaultTitle: string
  defaultDescription: string
  socialImagePath: string
}

export function normalizePublicPathname(pathname: string): string
export function listPublicRouteDefinitions(): PublicRouteDefinition[]
export function findPublicRouteDefinition(pathname: string): PublicRouteDefinition | null
export function buildCanonicalUrl(origin: string, pathname: string): string
export function buildPublicSeoPayload(args: {
  origin?: string
  pathname: string
  supportEmail?: string
}): PublicSeoPayload
export function buildSitemapXml(origin?: string): string
export function buildRobotsTxt(origin?: string): string

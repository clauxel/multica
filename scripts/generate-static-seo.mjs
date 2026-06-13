import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildPublicSeoPayload,
  buildRobotsTxt,
  buildSitemapXml,
  listPublicRouteDefinitions,
  siteIdentity,
} from '../shared/public-site-seo.mjs'
import { renderHtmlWithSeo } from '../server-lib/html-seo.mjs'

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)))
const distDirectory = join(projectRoot, 'dist')
const templatePath = join(distDirectory, 'index.html')

function normalizeComparableHostname(hostname) {
  return String(hostname ?? '')
    .trim()
    .replace(/^\[|\]$/g, '')
    .replace(/^www\./i, '')
    .toLowerCase()
}

function isLoopbackHostname(hostname) {
  const normalizedHostname = normalizeComparableHostname(hostname)
  return normalizedHostname === 'localhost' || normalizedHostname === '127.0.0.1' || normalizedHostname === '::1'
}

function resolveOrigin() {
  const configuredOrigins = String(process.env.APP_ORIGIN ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean)

  const configuredOrigin = configuredOrigins[0]
  if (!configuredOrigin) {
    return siteIdentity.defaultOrigin
  }

  try {
    const configuredUrl = new URL(configuredOrigin)
    const defaultUrl = new URL(siteIdentity.defaultOrigin)

    if (isLoopbackHostname(configuredUrl.hostname)) {
      return configuredUrl.origin
    }

    if (normalizeComparableHostname(configuredUrl.hostname) === normalizeComparableHostname(defaultUrl.hostname)) {
      return configuredUrl.origin
    }
  } catch {
    return siteIdentity.defaultOrigin
  }

  return siteIdentity.defaultOrigin
}

function toStaticHtmlPath(pathname) {
  if (pathname === '/') {
    return join(distDirectory, 'index.html')
  }

  return join(distDirectory, pathname.replace(/^\/+/, ''), 'index.html')
}

const templateHtml = readFileSync(templatePath, 'utf8')
const origin = resolveOrigin()

for (const route of listPublicRouteDefinitions()) {
  const outputPath = toStaticHtmlPath(route.pathname)
  const seoPayload = buildPublicSeoPayload({
    origin,
    pathname: route.pathname,
    supportEmail: siteIdentity.supportEmail,
  })

  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, renderHtmlWithSeo({ templateHtml, seoPayload }), 'utf8')
}

const notFoundPayload = buildPublicSeoPayload({
  origin,
  pathname: '/404',
  supportEmail: siteIdentity.supportEmail,
})

writeFileSync(join(distDirectory, '404.html'), renderHtmlWithSeo({ templateHtml, seoPayload: notFoundPayload }), 'utf8')
writeFileSync(join(distDirectory, 'robots.txt'), buildRobotsTxt(origin), 'utf8')
writeFileSync(join(distDirectory, 'sitemap.xml'), buildSitemapXml(origin), 'utf8')

const llmsSourcePath = join(projectRoot, 'llms.txt')
if (existsSync(llmsSourcePath)) {
  copyFileSync(llmsSourcePath, join(distDirectory, 'llms.txt'))
}

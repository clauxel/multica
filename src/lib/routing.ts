import type { RouteView } from '../app-types'
import { findPublicRouteDefinition } from '../../shared/public-site-seo'

export const launchDraftStorageKey = 'multica-draft'

export function normalizePathname(pathname: string) {
  const normalized = pathname.replace(/\/+$/, '')
  return normalized || '/'
}

export function scrollToHashTarget(hash: string, behavior: ScrollBehavior = 'smooth') {
  if (!hash) {
    return
  }

  const target = document.querySelector(hash)
  if (!(target instanceof HTMLElement)) {
    return
  }

  target.scrollIntoView({ behavior, block: 'start' })
}

export function deriveRouteView(pathname: string): RouteView {
  return findPublicRouteDefinition(normalizePathname(pathname))?.routeView ?? 'notFound'
}

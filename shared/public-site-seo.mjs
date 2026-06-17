const defaultSiteTitle = 'Multica - Multi-Channel AI Automation Setup'
const defaultSiteDescription =
  'Multica helps teams plan, launch, and track multi-channel AI automation across Telegram, Discord, WhatsApp, and customer workflows.'

export const siteIdentity = {
  name: 'Multica',
  supportEmail: 'support@aigeamy.com',
  defaultOrigin: 'https://multica.uk',
  defaultTitle: defaultSiteTitle,
  defaultDescription: defaultSiteDescription,
  socialImagePath: '/social-card.svg',
}

const publicRouteDefinitions = [
  {
    pathname: '/',
    routeView: 'home',
    title: defaultSiteTitle,
    description: defaultSiteDescription,
    robots: 'index,follow',
    sitemapPriority: '1.0',
    sitemapChangefreq: 'weekly',
    fallback: {
      eyebrow: 'Multica',
      title: defaultSiteTitle,
      summary: [
        defaultSiteDescription,
        'Start with a setup audit, choose the first live channel, and turn multi-agent execution into an automation path the team can repeat.',
      ],
      highlights: [
        'Plan Telegram, Discord, and WhatsApp automation',
        'Track landing, pricing, setup intent, and checkout stages',
        'Keep rollout steps inside a shared workflow',
      ],
    },
  },
  {
    pathname: '/guides/multica-project',
    routeView: 'guide',
    title: 'What Is the Multica Project? Team Agent Workflow Guide',
    description:
      'Understand what the Multica project does, how it fits a team workflow, and what to inspect before adopting it.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Guides', href: '/#guides' },
    fallback: {
      eyebrow: 'Guide',
      title: 'What Is the Multica Project? Team Agent Workflow Guide',
      summary: [
        'Multica is a coordination layer for teams working with more than one coding agent or runtime.',
        'This page gives a clear starting point if you want to understand the product shape before you evaluate setup, hosting, or adoption.',
      ],
      highlights: [
        'Workflow and orchestration, not a standalone model',
        'Built around assignable work, skills, and tracked execution',
        'Relevant when coordination becomes the bottleneck',
      ],
    },
  },
  {
    pathname: '/guides/multica-ai',
    routeView: 'guide',
    title: 'What Is Multica AI? Product, Model, or Agent Layer?',
    description:
      'Understand what people mean by Multica AI, how it differs from a single model or chatbot, and when it fits above coding agents.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Guides', href: '/#guides' },
    fallback: {
      eyebrow: 'Guide',
      title: 'What Is Multica AI? Product, Model, or Agent Layer?',
      summary: [
        'Multica is the operating layer around agents, not the model itself.',
        'Use this page to separate orchestration, execution, and collaboration when you explain the product to a team.',
      ],
      highlights: [
        'Sits above direct coding agents',
        'Routes work through connected runtimes',
        'Useful when teams need coordination instead of one more assistant',
      ],
    },
  },
  {
    pathname: '/guides/multica-github',
    routeView: 'guide',
    title: 'How to evaluate Multica on GitHub',
    description:
      'Use the repository to judge setup, supported runtimes, release pace, and self-hosting maturity before you commit.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Guides', href: '/#guides' },
    fallback: {
      eyebrow: 'Guide',
      title: 'How to evaluate Multica on GitHub',
      summary: [
        'The repository is the clearest place to inspect how Multica is installed, updated, and extended.',
        'This guide helps technical buyers and engineers focus on the signals that matter before a trial deployment.',
      ],
      highlights: [
        'Inspect setup flow and runtime support',
        'Check release cadence and documentation quality',
        'Separate project activity from marketing claims',
      ],
    },
  },
  {
    pathname: '/guides/multica-pricing',
    routeView: 'guide',
    title: 'Understanding Multica pricing',
    description:
      'Separate open-source cost, hosted product access, and this site\'s managed launch plans without mixing them together.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Guides', href: '/#guides' },
    fallback: {
      eyebrow: 'Guide',
      title: 'Understanding Multica pricing',
      summary: [
        'There is a real difference between open-source cost, hosted access, and a managed launch service.',
        'This page keeps those decisions separate so the conversation stays grounded in how you plan to operate the product.',
      ],
      highlights: [
        'License cost is not the whole picture',
        'Runtime and model spend still matter',
        'Managed launch and self-hosting answer different questions',
      ],
    },
  },
  {
    pathname: '/guides/coleam00-github',
    routeView: 'guide',
    title: 'Cole Medin repositories worth knowing',
    description:
      'A short guide to the Coleam00 repositories that come up most often when teams explore agent workflows around Multica.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Guides', href: '/#guides' },
    fallback: {
      eyebrow: 'Guide',
      title: 'Cole Medin repositories worth knowing',
      summary: [
        'Cole Medin\'s work comes up often when teams look at practical agent workflows and coding-system scaffolds.',
        'This guide points to the repositories most worth reading if you want context around the broader ecosystem.',
      ],
      highlights: [
        'Useful ecosystem context for agent builders',
        'Good for studying workflow and harness patterns',
        'Helpful reference, not a substitute for Multica itself',
      ],
    },
  },
  {
    pathname: '/solutions/customer-support',
    routeView: 'solution',
    title: 'Deploy Multica for customer support workflows',
    description:
      'See when Multica is the right fit for support teams that want faster setup, less operational overhead, and one console for follow-up work.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Solutions', href: '/#solutions' },
    fallback: {
      eyebrow: 'Solution',
      title: 'Deploy Multica for customer support workflows',
      summary: [
        'Support teams often need repeatable launches, clear follow-up steps, and fewer manual handoffs.',
        'This page explains where Multica helps when the job is operating agent workflows, not building infrastructure from scratch.',
      ],
      highlights: [
        'Faster first launch',
        'Clearer follow-up operations',
        'Less repeated setup for recurring support flows',
      ],
    },
  },
  {
    pathname: '/solutions/daily-briefings',
    routeView: 'solution',
    title: 'Deploy Multica for daily briefings and internal updates',
    description:
      'See how Multica helps teams deploy AI agents for recurring briefings, internal updates, and reporting workflows with less repeated setup work.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Solutions', href: '/#solutions' },
    fallback: {
      eyebrow: 'Solution',
      title: 'Deploy Multica for daily briefings and internal updates',
      summary: [
        'Recurring briefings reward a launch path that stays stable after the first setup pass.',
        'Use this page to judge whether Multica reduces enough repeat work to justify the operating layer.',
      ],
      highlights: [
        'Recurring workflows benefit from stable launch paths',
        'Better for teams that expect repeat launches',
        'Useful when follow-up work matters as much as initial setup',
      ],
    },
  },
  {
    pathname: '/solutions/ops-automation',
    routeView: 'solution',
    title: 'Deploy Multica for ops automation and routine follow-up',
    description:
      'See when Multica is the better fit for operations teams that want a shorter setup-to-runtime path and less manual deployment work.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Solutions', href: '/#solutions' },
    fallback: {
      eyebrow: 'Solution',
      title: 'Deploy Multica for ops automation and routine follow-up',
      summary: [
        'Operations teams feel the cost of repeated setup, environment drift, and fragmented follow-up first.',
        'This page helps you evaluate Multica from that operating point of view instead of from a generic feature checklist.',
      ],
      highlights: [
        'Shorter path from choice to runtime',
        'Less manual follow-up across repeated launches',
        'Better visibility once the system is running',
      ],
    },
  },
  {
    pathname: '/compare/codex',
    routeView: 'compare',
    title: 'Multica vs Codex',
    description:
      'Choose between a coordination layer for agent teams and a direct coding agent built for execution.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs Codex',
      summary: [
        'Codex is the better fit when direct coding execution is the job.',
        'Multica becomes more useful when the harder problem is coordinating several agents, runtimes, and shared workflow state.',
      ],
      highlights: [
        'Execution tool versus coordination layer',
        'Best choice depends on where the bottleneck sits',
        'The two products can also work together',
      ],
    },
  },
  {
    pathname: '/compare/slock-ai',
    routeView: 'compare',
    title: 'Multica vs Slock AI',
    description:
      'Decide between issue-centric coordination for agent work and chat-native collaboration inside channels and direct messages.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs Slock AI',
      summary: [
        'Slock AI keeps the center of gravity inside conversations.',
        'Multica is the stronger fit when tasks, assignments, and runtime operations need a more explicit operating surface.',
      ],
      highlights: [
        'Chat-native versus issue-centric work',
        'Memory in conversation versus tracked task state',
        'Choose based on how your team already works',
      ],
    },
  },
  {
    pathname: '/compare/openclaw',
    routeView: 'compare',
    title: 'Multica vs OpenClaw',
    description:
      'Compare a shared coordination layer for agent teams with a local-first personal AI assistant.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs OpenClaw',
      summary: [
        'OpenClaw is about one strong assistant that lives close to you and your machines.',
        'Multica is about coordinating agent work across a team once personal-assistant patterns stop being enough.',
      ],
      highlights: [
        'Personal assistant versus team coordination',
        'Local-first control versus shared workflow visibility',
        'Often complementary, not strictly exclusive',
      ],
    },
  },
  {
    pathname: '/compare/opencode',
    routeView: 'compare',
    title: 'Multica vs OpenCode',
    description:
      'Choose between a fast terminal-native coding agent environment and an orchestration layer above coding agents.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs OpenCode',
      summary: [
        'OpenCode is a strong fit when direct coding workflow speed is the priority.',
        'Multica starts to matter when a team needs one place to coordinate several agents and repeatable operating patterns.',
      ],
      highlights: [
        'Terminal-native execution versus orchestration',
        'Solo or small-team coding versus broader coordination',
        'Good pair when both execution and visibility matter',
      ],
    },
  },
  {
    pathname: '/compare/self-hosted-deployment',
    routeView: 'compare',
    title: 'Multica vs self-hosted deployment',
    description:
      'Compare launch speed, operational overhead, repeat deployment work, and infrastructure control before you choose.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs self-hosted deployment',
      summary: [
        'Self-hosting gives you maximum control, but it also keeps more setup and maintenance on your side.',
        'Multica is the better fit when repeated launch and follow-up work have become the bigger cost.',
      ],
      highlights: [
        'Control versus convenience',
        'Infrastructure ownership versus managed flow',
        'Best answered by your team\'s real operating constraints',
      ],
    },
  },
  {
    pathname: '/compare/manual-agent-deployment',
    routeView: 'compare',
    title: 'Multica vs manual agent deployment',
    description:
      'Compare a single managed launch path with a workflow that still depends on separate manual setup, payment, and follow-up steps.',
    robots: 'index,follow',
    sitemapPriority: '0.9',
    sitemapChangefreq: 'weekly',
    breadcrumb: { name: 'Compare', href: '/#compare' },
    fallback: {
      eyebrow: 'Compare',
      title: 'Multica vs manual agent deployment',
      summary: [
        'Manual deployment still works when your team deliberately wants every step separated.',
        'Multica is stronger when repeated handoffs and repeated setup have become the source of friction.',
      ],
      highlights: [
        'One flow versus many manual handoffs',
        'Better repeatability after the first launch',
        'Useful when you expect to launch again',
      ],
    },
  },
  {
    pathname: '/privacy',
    routeView: 'privacy',
    title: 'Privacy Policy | Multica',
    description:
      'Read how Multica processes visitor, account, order, payment, deployment, and support information.',
    robots: 'index,follow',
    sitemapPriority: '0.4',
    sitemapChangefreq: 'yearly',
    fallback: {
      eyebrow: 'Legal',
      title: 'Privacy Policy',
      summary: [
        'Read how Multica handles visitor, account, order, payment, deployment, and support information.',
      ],
      highlights: [],
    },
  },
  {
    pathname: '/terms',
    routeView: 'terms',
    title: 'Terms of Service | Multica',
    description:
      'Review the Multica Terms of Service for account, order, payment, deployment, console, and support usage.',
    robots: 'index,follow',
    sitemapPriority: '0.4',
    sitemapChangefreq: 'yearly',
    fallback: {
      eyebrow: 'Legal',
      title: 'Terms of Service',
      summary: [
        'Review the terms that govern account access, orders, payments, deployments, console usage, and support.',
      ],
      highlights: [],
    },
  },
  {
    pathname: '/plans',
    routeView: 'plans',
    title: 'Pricing Plans | Multica',
    description:
      'Choose a Multica plan based on deployment volume, then continue into payment and console-based deployment tracking.',
    robots: 'noindex,nofollow',
    fallback: {
      eyebrow: 'Plans',
      title: 'Pricing plans',
      summary: [
        'Choose a plan based on launch volume and move into payment and deployment tracking from there.',
      ],
      highlights: [],
    },
  },
  {
    pathname: '/console',
    routeView: 'console',
    title: 'Console | Multica',
    description:
      'Track Multica orders, deployments, upgrades, and account operations inside the console.',
    robots: 'noindex,nofollow',
    fallback: {
      eyebrow: 'Console',
      title: 'Console',
      summary: [
        'Track deployments, upgrades, orders, and account operations from one operational view.',
      ],
      highlights: [],
    },
  },
  {
    pathname: '/checkout',
    routeView: 'console',
    title: 'Checkout | Multica',
    description:
      'Continue through payment and deployment tracking inside the Multica checkout flow.',
    robots: 'noindex,nofollow',
    fallback: {
      eyebrow: 'Checkout',
      title: 'Checkout',
      summary: [
        'Continue through payment and move into deployment tracking from the same product flow.',
      ],
      highlights: [],
    },
  },
]

export function normalizePublicPathname(pathname) {
  const normalized = String(pathname ?? '').replace(/\/+$/, '')
  return normalized || '/'
}

export function listPublicRouteDefinitions() {
  return publicRouteDefinitions.slice()
}

export function findPublicRouteDefinition(pathname) {
  const normalizedPath = normalizePublicPathname(pathname)
  return publicRouteDefinitions.find((route) => route.pathname === normalizedPath) ?? null
}

export function buildCanonicalUrl(origin, pathname) {
  const normalizedOrigin = (() => {
    try {
      return new URL(origin).origin
    } catch {
      return siteIdentity.defaultOrigin
    }
  })()

  return new URL(normalizePublicPathname(pathname), `${normalizedOrigin}/`).toString()
}

function buildOgImageUrl(origin) {
  return new URL(siteIdentity.socialImagePath, `${buildCanonicalUrl(origin, '/')}`).toString()
}

function buildWebPageStructuredData(title, description, canonicalUrl, ogImageUrl) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: canonicalUrl,
    image: ogImageUrl,
  }
}

function buildBreadcrumbStructuredData(origin, route) {
  if (!route.breadcrumb) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: buildCanonicalUrl(origin, '/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: route.breadcrumb.name,
        item: buildCanonicalUrl(origin, route.breadcrumb.href),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: route.title,
        item: buildCanonicalUrl(origin, route.pathname),
      },
    ],
  }
}

function buildHomeStructuredData(origin, canonicalUrl, ogImageUrl, supportEmail) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteIdentity.name,
      url: canonicalUrl,
      email: supportEmail || siteIdentity.supportEmail,
      logo: ogImageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteIdentity.name,
      url: canonicalUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: siteIdentity.name,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: siteIdentity.defaultDescription,
      image: ogImageUrl,
      offers: [
        {
          '@type': 'Offer',
          name: 'Setup Audit',
          price: '9',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: buildCanonicalUrl(origin, '/plans'),
        },
        {
          '@type': 'Offer',
          name: 'Automation Setup',
          price: '29',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: buildCanonicalUrl(origin, '/plans'),
        },
        {
          '@type': 'Offer',
          name: 'Managed Rollout',
          price: '79',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: buildCanonicalUrl(origin, '/plans'),
        },
      ],
      provider: {
        '@type': 'Organization',
        name: siteIdentity.name,
        url: buildCanonicalUrl(origin, '/'),
      },
    },
  ]
}

function buildNotFoundRoute(pathname) {
  return {
    pathname: normalizePublicPathname(pathname),
    routeView: 'notFound',
    title: 'Page not found | Multica',
    description: 'This page could not be matched to a public Multica route.',
    robots: 'noindex,nofollow',
    fallback: {
      eyebrow: 'Not found',
      title: 'Page not found',
      summary: [
        'This page does not exist or is not publicly available.',
        'Return to the homepage to keep exploring Multica.',
      ],
      highlights: [],
    },
  }
}

export function buildPublicSeoPayload({ origin = siteIdentity.defaultOrigin, pathname, supportEmail = '' }) {
  const route = findPublicRouteDefinition(pathname) ?? buildNotFoundRoute(pathname)
  const canonicalUrl = buildCanonicalUrl(origin, route.pathname)
  const ogImageUrl = buildOgImageUrl(origin)
  const structuredData =
    route.pathname === '/'
      ? buildHomeStructuredData(origin, canonicalUrl, ogImageUrl, supportEmail)
      : [
          buildWebPageStructuredData(route.title, route.description, canonicalUrl, ogImageUrl),
          buildBreadcrumbStructuredData(origin, route),
        ].filter(Boolean)

  return {
    route,
    title: route.title,
    description: route.description,
    canonicalUrl,
    ogImageUrl,
    robots: route.robots,
    structuredData,
    statusCode: route.routeView === 'notFound' ? 404 : 200,
  }
}

export function buildSitemapXml(origin = siteIdentity.defaultOrigin) {
  const urls = publicRouteDefinitions
    .filter((route) => route.robots === 'index,follow')
    .map(
      (route) => `  <url>
    <loc>${buildCanonicalUrl(origin, route.pathname)}</loc>
    <changefreq>${route.sitemapChangefreq ?? 'weekly'}</changefreq>
    <priority>${route.sitemapPriority ?? '0.8'}</priority>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function buildRobotsTxt(origin = siteIdentity.defaultOrigin) {
  return `User-agent: *
Allow: /

Sitemap: ${buildCanonicalUrl(origin, '/sitemap.xml')}
`
}

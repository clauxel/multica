import { CircleHelp, Layers3, Rocket, ServerCog } from 'lucide-react'

import {
  ClaudeLogo,
  DiscordLogo,
  GlmLogo,
  GeminiLogo,
  OpenAILogo,
  TelegramLogo,
  WhatsAppLogo,
} from '../components/logos'
import { annualBillingMultiplier, channelCatalog, modelCatalog, planCatalog } from './catalog'
import type {
  AuthFormState,
  ComparisonPage,
  CreateUserFormState,
  FaqItem,
  Feature,
  GuidePage,
  GuideChannel,
  GuideContent,
  LegalSection,
  NavItem,
  Option,
  Plan,
  SolutionPage,
} from '../app-types'

export const supportEmail = 'support@aigeamy.com'
const upstreamMulticaGithubUrl = 'https://github.com/multica-ai/multica'
const multicaGuidanceDocsGithubUrl = 'https://github.com/clauxel/multica'

export const navItems: NavItem[] = [
  { href: '#features', label: 'Features', icon: Layers3 },
  { href: '#solutions', label: 'Solutions', icon: Layers3 },
  { href: '#guides', label: 'Guides', icon: CircleHelp },
  { href: '#compare', label: 'Compare', icon: CircleHelp },
  { href: '#pricing', label: 'Pricing', icon: Rocket },
  { href: '/console', label: 'Console', icon: ServerCog },
  { href: '#faq', label: 'FAQ', icon: CircleHelp },
]

export const privacySections: LegalSection[] = [
  {
    title: 'Scope and overview',
    paragraphs: [
      'This Privacy Policy describes how Multica collects, uses, stores, and discloses information when visitors access our website, create an account, place an order, pay for a plan, open the console, contact support, or otherwise use any related features, pages, APIs, and services we make available.',
      'This Policy is intended to be read together with our Terms of Service. By accessing or using the service, you acknowledge that certain information must be processed in order for the website, payment flow, deployment tracking, console access, account management, and support functions to operate.',
    ],
  },
  {
    title: 'Information we collect',
    paragraphs: [
      'We may collect information you provide directly, information created through your use of the service, and limited technical information collected automatically by the website and backend systems.',
    ],
    bullets: [
      'Account and contact information, such as name, email address, login credentials, and account role information if you register or are created as an operator by an administrator.',
      'Order and plan information, such as selected model, selected channel, billing cycle, plan choice, price, order identifiers, payment status, deployment status, and related timestamps.',
      'Channel connection information, such as a Telegram, Discord, or WhatsApp token or similar communication credential when you choose to provide one.',
      'Guest access and session information, such as guest tokens, session cookies, checkout paths, console paths, and account-binding state needed to let unpaid, paid, guest, and logged-in flows function correctly.',
      'Deployment and runtime information, such as target server labels, Multica version, instance names, workspace paths, deployment logs, upgrade status, console URLs, service names, and similar operational metadata.',
      'Support and communications, including messages you send to us through support channels or by email.',
      'Technical usage data, such as IP-derived request context, browser metadata ordinarily transmitted in HTTP requests, request timestamps, and error or diagnostic records reasonably required for service security and troubleshooting.',
    ],
  },
  {
    title: 'How we use information',
    paragraphs: [
      'We use information only to the extent reasonably necessary to operate, secure, improve, support, and enforce the service and our legitimate business operations.',
    ],
    bullets: [
      'To create, maintain, and administer accounts, guest sessions, and order records.',
      'To create checkout sessions, process plan purchases, reconcile payment events, and maintain billing records.',
      'To provision, track, operate, upgrade, and troubleshoot Multica instances and related console access.',
      'To store channel credentials you submit for later binding or deployment-related use.',
      'To respond to support requests, account issues, payment issues, operational incidents, and abuse reports.',
      'To detect misuse, fraud, unauthorized access, payment abuse, deployment misuse, or other activity that could affect the security or integrity of the service.',
      'To comply with applicable law, regulation, lawful requests, or contractual obligations imposed on us by payment providers, infrastructure providers, or similar vendors.',
    ],
  },
  {
    title: 'How we handle sensitive credentials',
    paragraphs: [
      'The service may receive channel tokens, guest access tokens, session material, deployment-related secrets, and other credentials or quasi-credentials required for the service to function. We seek to limit exposure of such data and use technical measures reasonably designed to reduce unnecessary disclosure.',
      'Where supported by the application, certain credentials are encrypted before persistence or otherwise stored in a form intended to reduce plain-text exposure. Even so, no method of transmission, storage, or processing is guaranteed to be absolutely secure, and we cannot warrant that any system will be immune from compromise, interception, or unauthorized access.',
    ],
  },
  {
    title: 'Payments and third-party providers',
    paragraphs: [
      'Payment processing is handled through third-party payment service providers. We do not represent that full payment card details are stored by our website. Payment pages, card fields, billing verification, live payment enablement, and similar payment functions may be provided or controlled by the third-party processor.',
      'We may share order identifiers, plan details, price information, customer email information, return URLs, and limited transaction metadata with the payment processor to create and manage checkout sessions, confirm payment status, and handle payment-related support or reconciliation.',
    ],
  },
  {
    title: 'When we disclose information',
    paragraphs: [
      'We do not sell personal information in the ordinary course of operating this website. We may disclose information only as reasonably necessary in the following circumstances:',
    ],
    bullets: [
      'To infrastructure, hosting, deployment, payment, or technical service providers that help us operate the service.',
      'To protect the security, rights, property, users, systems, or lawful interests of Multica, our users, or third parties.',
      'To comply with law, regulation, court order, lawful subpoena, governmental request, or similar legal process.',
      'In connection with a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, subject to appropriate confidentiality handling where reasonably practicable.',
    ],
  },
  {
    title: 'Data retention',
    paragraphs: [
      'We retain information for as long as reasonably necessary for the purposes described in this Policy, including account administration, order history, payment reconciliation, deployment operations, fraud prevention, dispute handling, security logging, and compliance obligations.',
      'Retention periods may vary depending on the type of information, the status of the account or order, technical requirements of the service, and legal or operational obligations. We may delete, anonymize, aggregate, or de-identify information when we determine it is no longer reasonably required.',
    ],
  },
  {
    title: 'Your choices and rights',
    paragraphs: [
      'Depending on your location and applicable law, you may have rights to request access to, correction of, or deletion of certain personal information that we hold about you, subject to lawful exceptions and operational limitations.',
      'You may also choose not to provide certain information, but some website features, deployment functions, account features, checkout flows, or console access functions may not operate correctly without the required information.',
    ],
  },
  {
    title: 'Cookies, sessions, and guest access',
    paragraphs: [
      'The website uses cookies, guest tokens, session identifiers, URL parameters, and similar state mechanisms to maintain login state, allow guest checkout and guest console access, preserve account binding state, and support related functionality.',
      'If you disable cookies or similar browser storage behavior, some features may be unavailable or may not work as intended.',
    ],
  },
  {
    title: 'International processing and security',
    paragraphs: [
      'Information may be processed on systems and by providers located in jurisdictions different from your own. By using the service, you understand that information may be transferred to and processed in such locations, subject to the operational choices of the service and its providers.',
      'We implement measures we consider commercially reasonable in light of the nature of the service, but no service can guarantee perfect security, uninterrupted availability, or absolute prevention of accidental loss, misuse, unauthorized disclosure, or unauthorized modification.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may update this Privacy Policy from time to time by posting an updated version on the website. The updated version will apply from the time it is posted unless otherwise stated.',
      `If you have questions about this Privacy Policy, you may contact us at ${supportEmail}.`,
    ],
  },
]

export const termsSections: LegalSection[] = [
  {
    title: 'Acceptance of terms',
    paragraphs: [
      'These Terms of Service govern access to and use of Multica, including our website, order flow, checkout-related features, console access, account features, deployment tracking, upgrade functions, APIs, and related operational services.',
      'By accessing or using the service, you agree to be bound by these Terms. If you do not agree, you must not access or use the service.',
    ],
  },
  {
    title: 'Nature of the service',
    paragraphs: [
      'Multica is a software and operations service that provides a website-based flow for selecting a Multica agent configuration, creating orders, initiating payment, tracking deployment state, opening a control console, and managing related operational functions.',
      'Unless expressly stated otherwise, the service is offered on an as-available and as-provided basis and may evolve over time. Features, flows, payment methods, integrations, deployment methods, and supported channels may change, be suspended, or be removed without creating an obligation to continue any particular function indefinitely.',
    ],
  },
  {
    title: 'Eligibility and account responsibility',
    paragraphs: [
      'You represent that you have legal capacity to enter into these Terms and to use the service in compliance with applicable law. If you use the service on behalf of an entity, you represent that you have authority to bind that entity to these Terms.',
      'You are responsible for maintaining the confidentiality of your account credentials, session state, guest access links, console links, and any third-party channel credentials you choose to submit through the service.',
    ],
  },
  {
    title: 'Orders, checkout, and payment',
    paragraphs: [
      'Submitting a launch flow, selecting a plan, or creating an order does not guarantee successful payment, successful deployment, uninterrupted console access, or future service availability. Payment processing is performed through third-party providers and remains subject to their approval, risk review, technical availability, and operating rules.',
      'Prices, billing cycle labels, deployment entitlements, and package descriptions are displayed on the site, but final checkout availability, payment acceptance, tax treatment, currency handling, and live-payment enablement may depend on the payment provider and associated merchant account status.',
      'You authorize us and our payment service providers to process the applicable transaction information necessary to create and manage your checkout session. We are not responsible for card network decisions, bank declines, fraud screening outcomes, live-payment enablement decisions, or payment-provider account limitations imposed by third parties.',
    ],
  },
  {
    title: 'Deployment and operational limitations',
    paragraphs: [
      'The service may provide deployment tracking, console access, and Multica instance operations, but we do not guarantee that every order will result in successful deployment, successful channel binding, uninterrupted service, or uninterrupted third-party provider availability.',
      'Deployment outcomes may depend on infrastructure state, third-party repositories, network reachability, payment confirmation, server configuration, provider APIs, firewall configuration, operating system behavior, and other factors beyond our direct control.',
      'Estimated deployment times, status messages, version labels, or package descriptions are informational only and do not constitute a strict service commitment unless we expressly agree otherwise in writing.',
    ],
  },
  {
    title: 'Acceptable use',
    paragraphs: [
      'You may not use the service in a manner that is unlawful, fraudulent, abusive, infringing, harmful to systems or networks, or reasonably likely to interfere with our operations or the use of the service by others.',
    ],
    bullets: [
      'Attempting to bypass authentication, access controls, payment controls, or deployment safeguards.',
      'Submitting credentials, channel tokens, payment information, or other information that you are not authorized to use.',
      'Using the service to send unlawful, abusive, deceptive, or malicious content through third-party channels.',
      'Interfering with or overloading the service, payment flow, console flow, API endpoints, or deployment systems.',
      'Reverse engineering, scraping, or automating the service in a way that is abusive or not reasonably permitted by us.',
    ],
  },
  {
    title: 'Third-party services and dependencies',
    paragraphs: [
      'The service depends on third-party services, including payment services, network services, hosting services, software repositories, and channel providers. We do not control those services and are not responsible for their availability, policy changes, outages, errors, delays, risk decisions, suspensions, or content.',
      'Use of any third-party service, including payment pages or chat-channel integrations, may also be subject to that third party’s own terms, policies, and operational restrictions.',
    ],
  },
  {
    title: 'Intellectual property and site content',
    paragraphs: [
      'As between you and Multica, we retain all rights, title, and interest in the website, service design, text, branding, UI, software logic, operational flows, documentation, and related materials, except to the extent rights are expressly granted by law or by written agreement.',
      'Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the service for its intended purpose.',
    ],
  },
  {
    title: 'Disclaimers',
    paragraphs: [
      'To the maximum extent permitted by applicable law, the service is provided on an as is, as available, and with all faults basis. We disclaim warranties of any kind, whether express, implied, statutory, or otherwise, including implied warranties of merchantability, fitness for a particular purpose, title, non-infringement, quiet enjoyment, availability, and accuracy.',
      'We do not warrant that the service will be uninterrupted, error-free, fully secure, always timely, or compatible with every device, browser, network environment, payment-provider state, deployment environment, or third-party integration.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'To the maximum extent permitted by applicable law, Multica and its operators will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of revenue, profit, business, goodwill, use, opportunity, or data, arising out of or related to the service.',
      'To the maximum extent permitted by applicable law, our aggregate liability for claims arising out of or related to the service will not exceed the amount actually paid by you to us for the specific order or service giving rise to the claim during the twelve months preceding the event giving rise to liability, or one hundred U.S. dollars, whichever is greater.',
    ],
  },
  {
    title: 'Suspension and termination',
    paragraphs: [
      'We may suspend, restrict, or terminate access to the service at any time if we reasonably believe it is necessary to protect the service, comply with law, respond to abuse, enforce these Terms, address payment or security issues, or prevent harm to us, our providers, or other users.',
      'Termination or suspension does not waive any accrued rights, obligations, payment responsibilities, or limitations of liability that by their nature should survive.',
    ],
  },
  {
    title: 'Changes and contact',
    paragraphs: [
      'We may revise these Terms from time to time by posting an updated version on the website. Continued use of the service after an updated version becomes effective constitutes acceptance of the revised Terms.',
      `If you have questions about these Terms, you may contact us at ${supportEmail}.`,
    ],
  },
]

export const models: Option[] = modelCatalog.map((model) => ({
  ...model,
  icon:
    model.id.startsWith('glm')
      ? <GlmLogo />
      : model.id.startsWith('claude')
        ? <ClaudeLogo />
        : model.id.startsWith('gpt')
          ? <OpenAILogo />
          : <GeminiLogo />,
}))

export const channels: Option[] = channelCatalog.map((channel) => ({
  ...channel,
  icon:
    channel.id === 'telegram'
      ? <TelegramLogo />
      : channel.id === 'discord'
        ? <DiscordLogo />
        : <WhatsAppLogo />,
}))

export const channelBadges = ['Slack', 'LINE', 'Messenger', 'Web chat', 'Email', 'API']

export const features: Feature[] = [
  {
    title: 'Automation setup before tooling',
    description: 'Turn a channel automation idea into a clear setup path before the team spends time wiring servers, tokens, and follow-up work.',
  },
  {
    title: 'Channel-ready rollout map',
    description: (
      <>
        Map Telegram, Discord, WhatsApp, and later channels into one <strong>multi-channel AI automation setup</strong>
        so every rollout has a first channel, support path, and repeat-launch plan.
      </>
    ),
  },
  {
    title: 'Security-aware deployment notes',
    description: (
      <>
        Capture token handling, channel permissions, and deployment boundaries before launch so automation does not create
        avoidable operational exposure.
      </>
    ),
  },
  {
    title: 'Model and channel pairing',
    description: 'Choose the default intelligence layer and the first live channel together so each setup starts with a realistic operating baseline.',
  },
  {
    title: 'True multi-channel automation',
    description: 'Plan one automation that can expand across Telegram, Discord, WhatsApp, and customer chat without rebuilding the setup from scratch.',
  },
  {
    title: 'Analytics and console follow-up',
    description: 'Track landing, pricing, setup intent, checkout, and console stages so the site can improve based on real buyer behavior.',
  },
]

export const plans: Plan[] = planCatalog

export const faqs: FaqItem[] = [
  {
    question: 'Do I need my own server before I start?',
    answer:
      'Not to begin the setup flow. Multica is designed for teams that want to plan and start multi-channel AI automation without doing the full server setup by hand. If your process requires full infrastructure ownership from day one, the self-hosted path may still be the better fit.',
  },
  {
    question: 'What happens after payment?',
    answer:
      'After successful payment, you go straight to the console to track setup, deployment, and follow-up actions. The flow is designed to move you from plan choice into an operational automation path, not into a vague manual handoff.',
  },
  {
    question: 'Who should use Multica instead of self-hosting?',
    answer:
      'Use Multica when speed to first channel, multi-channel automation setup, and simpler follow-up operations matter more than full infrastructure control. If your team needs to customize every dependency, server policy, and upgrade step, the self-hosted path may still be a better match.',
  },
  {
    question: 'Which channels are supported in the launch flow?',
    answer:
      'You can start the launch flow with Telegram, Discord, or WhatsApp. Choose the channel you plan to use first, then save the required token now or later as you continue through the launch path.',
  },
  {
    question: 'What makes Multica different from a single-channel bot?',
    answer:
      'Multica is built around multi-channel automation setup from the ground up. One agent configuration can expand across Telegram, Discord, and WhatsApp through a single managed setup path, without duplicating planning and deployment work for each channel.',
  },
  {
    question: 'How can I contact support before I buy?',
    answer: (
      <>
        Reach us any time at{' '}
        <a href={`mailto:${supportEmail}`} className="inline-link">
          {supportEmail}
        </a>{' '}
        if you need help comparing plans, channels, or deployment paths.
      </>
    ),
  },
]

export const guidePages: GuidePage[] = [
  {
    href: '/guides/multica-project',
    label: 'Project overview',
    eyebrow: 'Guide',
    title: 'What Is the Multica Project? Team Agent Workflow Guide',
    summary:
      'A grounded answer to what the Multica project does, where it fits, and what to inspect before adopting it for a team workflow.',
    definition:
      'Multica is an open-source, self-hostable platform for human + agent teams. The official site and repository position it as the coordination layer around coding agents: issues, activity timelines, reusable skills, runtimes, and autonomous task execution all live in one system.',
    keyPoints: [
      'Multica is not a single coding model. It is the management layer around agents.',
      'The official repo supports runtimes such as Codex, OpenClaw, OpenCode, Hermes, Gemini, Pi, and Cursor Agent.',
      'The product is built around assignable work, tracked execution, and reusable skills instead of one-off chat prompts.',
      'The project is open source and self-hostable, so data and runtime control can stay on your own infrastructure.',
    ],
    bestFor: [
      'Engineering teams already experimenting with more than one coding agent',
      'Founders who want agents to appear inside a real workflow instead of scattered chat threads',
      'Operators who need assignment, progress visibility, and reusable execution patterns',
    ],
    checklist: [
      'Read the official About page first to understand the “human + agent teammates” framing.',
      'Verify that the runtimes your team already uses are supported in the daemon flow.',
      'Decide whether you need the hosted product path, self-hosting, or a launch service like this site.',
      'Confirm that issue-based coordination fits your team better than chat-only collaboration.',
    ],
    watchFor: [
      'You still need connected runtimes on real machines for agents to execute work.',
      'If you only need a single personal assistant, Multica may be more system than you actually need.',
      'The project moves quickly, so evaluate releases and setup docs before rolling it into production.',
    ],
    resources: [
      {
        label: 'Official homepage',
        href: 'https://multica.ai/',
        description: 'Best first stop for the product promise, supported runtimes, and top-level workflow.',
      },
      {
        label: 'About Multica',
        href: 'https://multica.ai/about',
        description: 'Useful for understanding the philosophy behind “human + agent teams.”',
      },
      {
        label: 'Guidance docs repo',
        href: multicaGuidanceDocsGithubUrl,
        description: 'This repository contains guidance documents and supporting materials for understanding or presenting Multica.',
      },
      {
        label: 'Upstream Multica repo',
        href: upstreamMulticaGithubUrl,
        description: 'Read the README, install steps, self-hosting notes, and active release history.',
      },
      {
        label: 'Multica pricing on this site',
        href: '/guides/multica-pricing',
        description: 'Use our pricing guide to separate open-source, cloud, and managed launch costs.',
      },
    ],
    conclusion:
      'Treat Multica as project infrastructure for agentic work, not as just another coding assistant. If your team needs a coordination layer, this is the angle worth evaluating first.',
    faqs: [
      {
        question: 'Is Multica just another coding agent?',
        answer:
          'No. The official positioning is closer to a platform for managing human + agent teamwork. The agents still do the execution, while Multica adds assignment, lifecycle tracking, runtimes, and shared skills.',
      },
      {
        question: 'What should I inspect before adopting the project?',
        answer:
          'Start with the official About page, then review the GitHub README for supported runtimes, the setup flow, and the self-hosting path. That tells you quickly whether the product matches your team shape.',
      },
      {
        question: 'When is Multica the wrong starting point?',
        answer:
          'If your team only needs one assistant in one terminal, a direct tool like Codex, OpenCode, or OpenClaw may be enough. Multica becomes more valuable when coordination and repeatable workflow management are the real problem.',
      },
    ],
  },
  {
    href: '/guides/multica-ai',
    label: 'AI positioning',
    eyebrow: 'Guide',
    title: 'What Is Multica AI? Product, Model, or Agent Layer?',
    summary:
      'A practical answer to what Multica AI means and how it relates to models, coding agents, chat tools, and runtime orchestration.',
    definition:
      'Multica is best understood as the operating layer around coding agents. It handles assignment, progress tracking, skills, and runtimes, while execution can still be powered by tools like Codex, OpenClaw, OpenCode, and other supported providers.',
    keyPoints: [
      'Multica is a workflow and orchestration product, not a standalone model vendor.',
      'Its core abstraction is the agent as teammate: assign work, track status, and reuse skills.',
      'Execution happens on connected runtimes, which can be local machines or cloud environments you manage.',
      'The product supports open-source and self-hosted usage, not only a hosted SaaS path.',
    ],
    bestFor: [
      'Teams comparing “agent management” platforms against direct coding assistants',
      'Buyers who want to know whether Multica replaces or layers on top of existing AI tools',
      'Founders deciding how to explain Multica in one paragraph without oversimplifying it',
    ],
    checklist: [
      'Decide whether you need a manager layer or just a single coding agent.',
      'Map which runtimes your team already trusts and whether Multica can route to them.',
      'Review where your code executes and where team metadata is stored.',
      'Compare the product against chat-native and terminal-native alternatives before committing.',
    ],
    watchFor: [
      'Calling Multica “an AI model” will confuse buyers because the product is really orchestration plus workflow.',
      'The hosted product promise and the self-hosted path solve different buying questions.',
      'If you need pure chat collaboration, a chat-native product may fit better than an issue-centric one.',
    ],
    resources: [
      {
        label: 'Official homepage',
        href: 'https://multica.ai/',
        description: 'Use this to see how Multica presents its core categories: teammates, skills, and runtimes.',
      },
      {
        label: 'About Multica',
        href: 'https://multica.ai/about',
        description: 'Best source for the “Multiplexed Information and Computing Agent” framing.',
      },
      {
        label: 'Guidance docs repo',
        href: multicaGuidanceDocsGithubUrl,
        description: 'Use this when you want the guidance-document repository around Multica rather than the upstream product source.',
      },
      {
        label: 'Upstream Multica repo',
        href: upstreamMulticaGithubUrl,
        description: 'Shows supported runtimes, setup flow, and how the daemon fits into the system.',
      },
      {
        label: 'Download page',
        href: 'https://multica.ai/download',
        description: 'Helpful for understanding the desktop, CLI, and runtime setup path.',
      },
    ],
    conclusion:
      'The shortest accurate description is this: Multica manages AI teammates and the work around them. The models and agent CLIs still matter, but Multica is the layer that makes them operational for teams.',
    faqs: [
      {
        question: 'Does Multica replace tools like Codex or OpenCode?',
        answer:
          'Not necessarily. Multica can sit above those tools as the coordination layer. In many teams the question is not “which one wins,” but whether you need both an execution tool and a management layer.',
      },
      {
        question: 'Where does the AI work actually run?',
        answer:
          'On connected runtimes. The official repo describes the daemon on your machine as the runtime that executes agent tasks and reports available CLIs back to Multica.',
      },
      {
        question: 'Is Multica cloud-only?',
        answer:
          'No. The official site and repo both emphasize self-hosting and open-source usage alongside the hosted product path.',
      },
    ],
  },
  {
    href: '/guides/multica-github',
    label: 'GitHub guide',
    eyebrow: 'Guide',
    title: 'How to evaluate Multica on GitHub',
    summary:
      'A practical read-through of the repository so you can judge setup, runtime support, release pace, and self-hosting maturity.',
    definition:
      'The official GitHub repo is the clearest public artifact for understanding how Multica really works. It shows install commands, daemon setup, supported runtimes, self-hosting notes, release history, and the project’s contributor surface.',
    keyPoints: [
      'The README doubles as a product overview and a technical quick-start.',
      'The repo documents one-command install flows for macOS, Linux, and Windows.',
      'The daemon auto-detects supported agent CLIs on your PATH, which is central to the product model.',
      'Release and changelog activity are worth inspecting because the project is shipping quickly.',
    ],
    bestFor: [
      'Technical buyers who need more than a marketing homepage',
      'Engineers evaluating whether the setup flow is realistic for their environment',
      'Open-source contributors deciding whether the project is active and legible enough to extend',
    ],
    checklist: [
      'Read the README from top to bottom instead of jumping straight to install.',
      'Inspect the supported runtime list and confirm it matches your team’s tools.',
      'Check releases and changelog cadence before treating the current behavior as stable.',
      'Review self-hosting instructions if infrastructure ownership matters to your team.',
    ],
    watchFor: [
      'GitHub popularity alone is not a production-readiness signal; the setup path matters more.',
      'The project includes both hosted-product language and self-hosting language, so separate those buying motions.',
      'Fast-moving repos can make screenshots, blogs, and tutorials age quickly.',
    ],
    resources: [
      {
        label: 'Guidance docs repo',
        href: multicaGuidanceDocsGithubUrl,
        description: 'Inspect this repo if you want the guidance documents, launch notes, and supporting materials around Multica.',
      },
      {
        label: 'Upstream Multica repo',
        href: upstreamMulticaGithubUrl,
        description: 'Start here for README, install commands, supported runtimes, and releases.',
      },
      {
        label: 'Multica homepage',
        href: 'https://multica.ai/',
        description: 'Use the site to compare the product story with what the repo actually documents.',
      },
      {
        label: 'About Multica',
        href: 'https://multica.ai/about',
        description: 'Helpful if you want the philosophy behind the repo, not just the mechanics.',
      },
      {
        label: 'Download page',
        href: 'https://multica.ai/download',
        description: 'Useful for the desktop and CLI distribution story.',
      },
    ],
    conclusion:
      'If you want to understand Multica seriously, the GitHub repo is not optional reading. It tells you whether the product promise survives contact with installation, runtimes, and self-hosting reality.',
    faqs: [
      {
        question: 'Where should I start in the repo?',
        answer:
          'Start with the README, then jump to the install and getting-started sections. Only after that should you decide whether to inspect self-hosting, releases, or contributor documentation.',
      },
      {
        question: 'Do I need to self-host to learn from the repo?',
        answer:
          'No. You can learn a lot from the README, releases, and daemon flow without running production infrastructure. Self-hosting is only necessary if that ownership model is part of your evaluation.',
      },
      {
        question: 'What is the most important thing to verify in GitHub?',
        answer:
          'Verify the runtime story. Multica makes the most sense when the supported CLIs, machine setup, and execution model match the agents your team actually wants to run.',
      },
    ],
  },
  {
    href: '/guides/multica-pricing',
    label: 'Pricing guide',
    eyebrow: 'Guide',
    title: 'Understanding Multica pricing',
    summary:
      'A plain-language breakdown of open-source cost, hosted access, and this site’s managed launch plans.',
    definition:
      'Pricing around Multica is easy to misunderstand because the official project is open source and self-hostable, the official site promotes a hosted product path and free trial, and this website sells fixed managed-launch packages built around deployment capacity.',
    keyPoints: [
      'Open source does not mean zero operational cost; self-hosting still means infrastructure, setup, and maintenance.',
      'The official site points to a free trial, download flow, and cloud runtime waitlist, which is different from a public flat pricing table.',
      'On this site, Setup Audit is $9/month for one readiness review, Automation Setup is $29/month for a first multi-channel rollout, and Managed Rollout is $79/month for teams scaling channel automation.',
      'A useful pricing conversation should also include runtime, model, token, and maintenance costs instead of only the sticker price.',
    ],
    bestFor: [
      'Buyers deciding whether to start with a managed launch plan or self-host from day one',
      'Teams trying to translate “open source” into an actual budget discussion',
      'Anyone comparing the cost of direct agent tools with the cost of a team workflow layer',
    ],
    checklist: [
      'Decide whether you are pricing software access, deployment help, or long-term infrastructure ownership.',
      'Estimate how many launches or agent instances you actually need in the next 30 to 90 days.',
      'Add the cost of the underlying model providers and runtime machines to the conversation.',
      'Use the plan page only after you know whether you want a managed path or a self-hosted one.',
    ],
    watchFor: [
      'Self-hosting can be cheaper in license terms and more expensive in operator time.',
      'A launch-plan price does not answer every question about downstream token spend or runtime capacity.',
      'Some buyers over-index on monthly price and underweight speed, reliability, and repeatability.',
    ],
    resources: [
      {
        label: 'Plans on this site',
        href: '/plans',
        description: 'Review the fixed managed-launch plans and choose based on deployment volume.',
      },
      {
        label: 'Homepage pricing section',
        href: '/#pricing',
        description: 'Useful if you want to compare cards before entering checkout.',
      },
      {
        label: 'Official Multica homepage',
        href: 'https://multica.ai/',
        description: 'Use this to understand the free-trial and hosted-product positioning.',
      },
      {
        label: 'Official Download page',
        href: 'https://multica.ai/download',
        description: 'Helpful for understanding the desktop, CLI, and cloud-runtime waitlist path.',
      },
    ],
    conclusion:
      'The useful way to read “Multica pricing” is not “what is the cheapest number?” but “which path buys the fastest, safest outcome for our team?” This guide is here to help you answer that honestly.',
    faqs: [
      {
        question: 'Is Multica free?',
        answer:
          'The official project is open source and self-hostable, but that does not erase infrastructure and operating costs. On this site, the managed launch service is paid because it packages deployment capacity and a guided buyer flow.',
      },
      {
        question: 'What do the plan prices on this site represent?',
        answer:
      'They represent managed setup plans tied to automation rollout capacity. They are useful if you want a faster path to getting multi-channel automation live, but they are not the same thing as the total cost of long-term self-hosting or model usage.',
      },
      {
        question: 'What extra costs should I remember?',
        answer:
          'Think about model usage, runtime machines, storage, monitoring, and team time. Those costs often matter more over a quarter than the first month of software pricing alone.',
      },
    ],
  },
  {
    href: '/guides/coleam00-github',
    label: 'Cole Medin',
    eyebrow: 'Guide',
    title: 'Cole Medin repositories worth knowing',
    summary:
      'A short guide to the Coleam00 repositories that matter most if you are mapping the broader agent-workflow ecosystem.',
    definition:
      'Cole Medin’s GitHub profile centers on AI agents, RAG, local AI deployments, and workflow tooling. For teams researching the ecosystem around Multica, his repositories are useful reference points for how builders package harnesses, remote coding systems, and persistent assistant patterns.',
    keyPoints: [
      'The profile itself describes a focus on AI agents, RAG solutions, local AI deployments, and related libraries.',
      'Archon is positioned as an open-source harness builder for AI coding workflows.',
      'remote-agentic-coding-system shows a concrete pattern for connecting coding agents to Slack, Telegram, and GitHub.',
      'second-brain-starter is valuable when you want memory, security boundaries, and proactive assistant patterns rather than team task routing.',
    ],
    bestFor: [
      'Builders who want practical examples of agent workflow design',
      'Content teams mapping the agent-tool ecosystem around Multica',
      'Technical evaluators comparing educational scaffolds with production team platforms',
    ],
    checklist: [
      'Start at the profile and inspect which repos are popular for which reason.',
      'Read repo READMEs to see whether each project is a workflow engine, a teaching repo, or a deployable system.',
      'Check prerequisites before treating a repo as an easy drop-in for your stack.',
      'Translate lessons from these repos into your Multica evaluation instead of assuming they solve the same problem.',
    ],
    watchFor: [
      'Many ecosystem repos are great references but not full replacements for a team coordination platform.',
      'Some projects assume tools like Claude Code, Docker, GitHub CLI, or messaging bots are already in your stack.',
      'Popularity on GitHub is useful signal, but not the same as operational fit for your team.',
    ],
    resources: [
      {
        label: 'Coleam00 profile',
        href: 'https://github.com/coleam00',
        description: 'Start here to see the overall focus areas and top repositories.',
      },
      {
        label: 'Archon',
        href: 'https://github.com/coleam00/Archon',
        description: 'Best if you want to study workflow harnesses for AI coding.',
      },
      {
        label: 'remote-agentic-coding-system',
        href: 'https://github.com/coleam00/remote-agentic-coding-system',
        description: 'Useful for understanding remote coding-agent deployment patterns.',
      },
      {
        label: 'second-brain-starter',
        href: 'https://github.com/coleam00/second-brain-starter',
        description: 'A strong reference for memory, boundaries, and proactive assistant design.',
      },
    ],
    conclusion:
      'Coleam00’s GitHub is worth reading as ecosystem research, not as a one-click answer to every team workflow problem. Use it to sharpen your mental model, then decide whether your need is a harness, a reference architecture, or a coordination platform like Multica.',
    faqs: [
      {
        question: 'Why include Coleam00 on a Multica site?',
        answer:
          'Because buyers and builders often research the surrounding ecosystem before choosing a platform. Cole Medin’s repos are influential examples of how people structure AI-agent workflows in practice.',
      },
      {
        question: 'Which repository should I open first?',
        answer:
          'If you care about coding workflow structure, start with Archon. If you care about remote messaging-based coding flows, open remote-agentic-coding-system. If you care about memory and proactive assistants, open second-brain-starter.',
      },
      {
        question: 'Does this replace Multica?',
        answer:
          'Usually no. These repos are best treated as learning material, workflow tooling, or adjacent building blocks. Multica is closer to a team coordination layer that can sit above or beside that ecosystem.',
      },
    ],
  },
]

export const solutionPages: SolutionPage[] = [
  {
    href: '/solutions/customer-support',
    label: 'Customer Support',
    eyebrow: 'Solutions',
    title: 'Deploy Multica for customer support workflows',
    summary:
      'Give support teams a faster path from selected model and channel setup to a working Multica agent that can answer, route, and escalate customer conversations across Telegram, Discord, and WhatsApp.',
    definition:
      'Multica is a managed deployment service for teams that want to stand up a multi-channel customer support agent faster, with less manual deployment work and less operational overhead after launch.',
    facts: [
      'Multica is a managed deployment service for multi-channel AI agents.',
      'It is designed for teams that want faster setup with less operational overhead.',
      'It supports Telegram, Discord, and WhatsApp launch paths simultaneously.',
      'It keeps deployment tracking and follow-up actions in one console.',
    ],
    bestFor: ['Support teams with repeat inbound questions', 'Operators who need faster rollout', 'Teams that want guided multi-channel setup'],
    notFor: [
      'Teams that need direct control over every server, firewall, and rollback step',
      'Organizations that already run a mature self-hosted support automation stack',
      'Operators who intentionally want to hand-build every deployment stage',
    ],
    outcomes: ['Shorter time from order to live support agent', 'One console for deployment tracking', 'Easier follow-up deployments for new teams'],
    workflow: [
      'Pick the model and channel combination that fits the support workflow',
      'Launch the order and let the first deployment run automatically after payment',
      'Use remaining deployment capacity to trigger additional Multica agents from the same order',
    ],
    conclusion:
      'Use Multica for customer support when the real priority is getting a stable multi-channel agent live quickly and repeating the process without rebuilding the deployment path each time.',
    faqs: [
      {
        question: 'Is Multica a fit for non-infrastructure support teams?',
        answer:
          'Yes. It is designed for teams that care more about getting a working support agent live quickly across multiple channels than about controlling every infrastructure step by hand.',
      },
      {
        question: 'What does this change compared with a manual support rollout?',
        answer:
          'It shortens the path from choosing a model and channel to tracking a real deployment. The main gain is less repeated coordination work before and after launch, especially across multiple channels.',
      },
      {
        question: 'When should a support team stay self-hosted?',
        answer:
          'Stay self-hosted when your support environment depends on custom infrastructure controls, internal platform requirements, or upgrade policies you must manage directly.',
      },
    ],
  },
  {
    href: '/solutions/daily-briefings',
    label: 'Daily Briefings',
    eyebrow: 'Solutions',
    title: 'Deploy Multica for daily briefings and internal updates',
    summary:
      'Deploy a managed Multica agent that collects recurring updates, publishes summaries, and gives teams a stable console for operational follow-up across every channel.',
    definition:
      'Multica helps teams deploy AI agents for recurring briefings without rebuilding the same setup flow each time they need a reporting bot, a new audience, or another internal update channel.',
    facts: [
      'Multica reduces the manual work required to deploy AI agents for recurring updates.',
      'It supports multi-channel launch paths for briefing workflows.',
      'It gives teams one console for deployment tracking and later follow-up.',
      'It is built for teams that want a faster path from configuration to a working multi-channel agent.',
    ],
    bestFor: ['Internal operations teams', 'Leads who want automated reporting', 'Teams coordinating across messaging channels'],
    notFor: [
      'Teams that only need a one-off static report with no follow-up operations',
      'Organizations that require a fully custom internal deployment pipeline from day one',
      'Operators who want to separate provisioning, payment, and deployment into manual handoffs',
    ],
    outcomes: ['Faster rollout for recurring summaries', 'Shared view of deployment state', 'Repeatable multi-instance launches for separate workflows'],
    workflow: [
      'Choose the model and channel that matches the reporting audience',
      'Complete payment and let deployment start automatically',
      'Trigger additional Multica agents later as new reporting workflows are added',
    ],
    conclusion:
      'Multica is the stronger fit for daily briefings when recurring setup work is the real bottleneck and the team wants a repeatable way to launch new reporting assistants.',
    faqs: [
      {
        question: 'Why use Multica for recurring briefings instead of a manual setup?',
        answer:
          'Because recurring briefings usually create repeated setup and follow-up work. Multica turns that into a more repeatable managed workflow with one console for visibility.',
      },
      {
        question: 'Can the same order support later briefing launches?',
        answer:
          'Yes. When a plan still has deployment capacity remaining, you can trigger additional Multica agents from the same order instead of restarting the entire setup path.',
      },
      {
        question: 'Who benefits most from this page?',
        answer:
          'Operations leads, internal reporting teams, and cross-functional groups that want faster rollout for recurring summaries across Telegram, Discord, or WhatsApp.',
      },
    ],
  },
  {
    href: '/solutions/ops-automation',
    label: 'Ops Automation',
    eyebrow: 'Solutions',
    title: 'Deploy Multica for ops automation and routine follow-up',
    summary:
      'Use Multica when the goal is to move from setup decisions to a fully operational AI agent quickly, without rebuilding deployment plumbing each time.',
    definition:
      'Multica is a practical deployment path for operations teams that need AI agents to handle recurring follow-up, routine coordination, and repeated automation work without turning deployment into its own project.',
    facts: [
      'Multica is built to shorten the setup-to-runtime path for multi-channel AI agents.',
      'It keeps upgrades, deployments, and account actions inside one console.',
      'It reduces the burden of repeating manual deployment and maintenance work.',
      'It supports channel-specific launch paths before deployment begins.',
    ],
    bestFor: ['Operations teams with recurring tasks', 'Teams that need faster rollout across channels', 'Operators who want managed upgrades and a control console'],
    notFor: [
      'Teams that need custom infrastructure ownership more than launch speed',
      'Organizations that already automate provisioning and upgrades internally',
      'Use cases where manual setup is rare enough that repeated deployment work is not a meaningful cost',
    ],
    outcomes: ['Shorter setup-to-runtime path', 'Built-in upgrade path for deployed instances', 'Clear order-level capacity for additional deployments'],
    workflow: [
      'Pick the model and channel combination that fits the operating workflow',
      'Launch the order and let the first deployment run automatically after payment',
      'Use remaining deployment capacity to trigger additional Multica agents from the same order',
    ],
    conclusion:
      'Choose Multica for ops automation when the team wants to reduce deployment drag, keep follow-up work in one control surface, and launch additional agents without repeating the same manual process.',
    faqs: [
      {
        question: 'How does Multica help operations teams specifically?',
        answer:
          'It reduces the operational drag between configuration decisions and a working agent, then keeps upgrades and repeat launches in one place for later follow-up.',
      },
      {
        question: 'Does this page apply only to large ops teams?',
        answer:
          'No. Smaller teams benefit too when they want less repeated setup work and do not have spare engineering time for manual deployment and long-term maintenance.',
      },
      {
        question: 'When is manual deployment still acceptable for ops automation?',
        answer:
          'Manual deployment can still be fine when launch volume is low, the team already owns the operational tooling, and repeated setup work is not slowing the business down.',
      },
    ],
  },
]

export const comparisonPages: ComparisonPage[] = [
  {
    href: '/compare/codex',
    label: 'Codex',
    eyebrow: 'Compare',
    title: 'Multica vs Codex',
    summary:
      'Choose Codex when your main need is a powerful coding agent. Choose Multica when the bigger problem is coordinating multiple agents, runtimes, skills, and task ownership across a team.',
    alternativeName: 'Codex',
    chooseLaunch: [
      'You need a shared board, issue flow, and runtime management layer around agent work',
      'You want to use Codex as one runtime among multiple providers instead of making one vendor your whole operating model',
      'You care about reusable skills, assignment visibility, and workflow consistency across more than one agent',
    ],
    chooseAlternative: [
      'You want OpenAI’s coding agent directly, with worktrees, cloud environments, Skills, and Automations built into the product',
      'Your bottleneck is code execution itself, not team-level coordination',
      'You do not yet need a separate orchestration layer above the coding agent',
    ],
    rows: [
      {
        label: 'Primary job',
        launch: 'Coordinates work across agents, humans, runtimes, assignments, and reusable skills',
        alternative: 'Executes coding work directly as an OpenAI coding agent and command center',
      },
      {
        label: 'Execution model',
        launch: 'Routes work to connected runtimes and keeps task state visible to the team',
        alternative: 'Uses built-in worktrees and cloud environments for agentic coding tasks',
      },
      {
        label: 'Provider strategy',
        launch: 'Vendor-neutral management layer that can sit above Codex, OpenClaw, OpenCode, and others',
        alternative: 'OpenAI-native product powered by ChatGPT and OpenAI frontier coding models',
      },
      {
        label: 'Best fit',
        launch: 'Teams that already have agents and now need coordination and governance',
        alternative: 'Builders who primarily need one strong coding agent to do the work',
      },
    ],
    faqs: [
      {
        question: 'Can Multica and Codex work together?',
        answer:
          'Yes. The official Multica repository documents Codex as a supported runtime, so a common pattern is to use Codex for execution and Multica for team coordination.',
      },
      {
        question: 'When should I start with Codex first?',
        answer:
          'Start with Codex if you are still validating whether one strong coding agent changes your workflow. Add Multica later when multiple agents, skills, or team coordination start to create real overhead.',
      },
      {
        question: 'What does Multica add beyond Codex?',
        answer:
          'It adds the management layer: assignable work, runtime visibility, shared skills, and a single operating surface for teams using more than one agent or more than one provider.',
      },
    ],
  },
  {
    href: '/compare/slock-ai',
    label: 'Slock AI',
    eyebrow: 'Compare',
    title: 'Multica vs Slock AI',
    summary:
      'Choose Slock AI when your workflow should live inside channels and DMs. Choose Multica when work should live in issues, assignees, skills, and runtime operations.',
    alternativeName: 'Slock AI',
    chooseLaunch: [
      'You want issue-centric execution, explicit task ownership, and a clearer operational surface',
      'You need vendor-neutral runtime management rather than one chat-first collaboration layer',
      'You want skills, deployment decisions, and repeat launches attached to a project workflow',
    ],
    chooseAlternative: [
      'You want humans and agents collaborating as equals in channels and direct messages',
      'Persistent memory inside chat is more important than project-board structure',
      'Your mental model is “chat workspace for humans + agents,” not “issue system for humans + agents”',
    ],
    rows: [
      {
        label: 'Primary interface',
        launch: 'Board, issues, assignments, status changes, and runtimes',
        alternative: 'Channels and DMs where humans and agents collaborate in real time',
      },
      {
        label: 'Work unit',
        launch: 'Tracked tasks with lifecycle and ownership',
        alternative: 'Ongoing conversations with memory across sessions',
      },
      {
        label: 'Runtime story',
        launch: 'Connected runtimes plus provider flexibility across supported agent CLIs',
        alternative: 'Agents run on your own computers via a lightweight daemon',
      },
      {
        label: 'Best fit',
        launch: 'Teams that want project management for agent work',
        alternative: 'Teams that want chat-native collaboration with agent teammates',
      },
    ],
    faqs: [
      {
        question: 'Is Slock AI a direct replacement for Multica?',
        answer:
          'Usually not. They optimize for different centers of gravity. Slock AI is chat-first, while Multica is issue-and-runtime-first.',
      },
      {
        question: 'When is Slock AI the better choice?',
        answer:
          'It is the better choice when the conversation itself is the product and you want agents living beside humans inside channels and DMs all day.',
      },
      {
        question: 'When does Multica win?',
        answer:
          'Multica wins when your team needs explicit task ownership, reusable skills, and a stronger operational model around how agents execute work.',
      },
    ],
  },
  {
    href: '/compare/openclaw',
    label: 'OpenClaw',
    eyebrow: 'Compare',
    title: 'Multica vs OpenClaw',
    summary:
      'Choose OpenClaw when you want a local-first personal AI assistant. Choose Multica when you need a shared management layer for agent work across a team. In many stacks they are complements, not substitutes.',
    alternativeName: 'OpenClaw',
    chooseLaunch: [
      'You need assignments, runtime visibility, skills, and task tracking across multiple agents or teammates',
      'You want a platform that can manage OpenClaw as one provider among several',
      'You care more about workflow coordination than about one assistant handling everything directly',
    ],
    chooseAlternative: [
      'You want your own personal AI assistant on your own machines',
      'Local-first control and direct assistant behavior matter more than team project structure',
      'You want the assistant product itself, not a higher-level orchestration layer around many assistants',
    ],
    rows: [
      {
        label: 'Primary job',
        launch: 'Manage agent teamwork, issues, skills, and runtimes',
        alternative: 'Act as a personal AI assistant across your devices and platforms',
      },
      {
        label: 'Typical user',
        launch: 'A team coordinating work among humans and multiple agents',
        alternative: 'An individual or operator who wants one powerful assistant',
      },
      {
        label: 'Provider relationship',
        launch: 'Can use OpenClaw as a supported runtime according to the official Multica repo',
        alternative: 'Is itself the assistant/runtime product',
      },
      {
        label: 'Best fit',
        launch: 'Project coordination and repeatable agent operations',
        alternative: 'Local-first assistant use and direct task execution',
      },
    ],
    faqs: [
      {
        question: 'Are OpenClaw and Multica competitors?',
        answer:
          'Partly, but often they are layered. The official Multica repo lists OpenClaw as a supported runtime, so some teams use OpenClaw for execution and Multica for coordination.',
      },
      {
        question: 'When should I start with OpenClaw alone?',
        answer:
          'Start with OpenClaw if your main need is a capable assistant on your own machines. Add Multica later if you outgrow personal assistant workflows and need team coordination.',
      },
      {
        question: 'What is the real difference in one sentence?',
        answer:
          'OpenClaw is the assistant; Multica is the work system around assistants.',
      },
    ],
  },
  {
    href: '/compare/opencode',
    label: 'OpenCode',
    eyebrow: 'Compare',
    title: 'Multica vs OpenCode',
    summary:
      'Choose OpenCode when your team wants a terminal-native coding agent with broad provider choice and strong privacy defaults. Choose Multica when you need an orchestration layer above coding agents.',
    alternativeName: 'OpenCode',
    chooseLaunch: [
      'You need one place to coordinate multiple agents, assignments, and reusable skills',
      'You want OpenCode to be one runtime inside a bigger operating model instead of the whole product surface',
      'You care about project-level visibility more than terminal-level ergonomics alone',
    ],
    chooseAlternative: [
      'You want an open-source coding agent in the terminal, IDE, or desktop',
      'You want broad provider flexibility, privacy-first positioning, and direct coding workflow speed',
      'A solo or small-team coding agent is enough and a management layer would be unnecessary overhead',
    ],
    rows: [
      {
        label: 'Primary job',
        launch: 'Coordinate work across agents and runtimes for a team',
        alternative: 'Help developers write code directly in terminal, IDE, or desktop',
      },
      {
        label: 'Provider model',
        launch: 'Vendor-neutral management layer that can route to supported runtimes including OpenCode',
        alternative: 'Connects to many providers and offers optional OpenCode-managed subscriptions like Go',
      },
      {
        label: 'Privacy story',
        launch: 'Depends on how you deploy Multica and where your runtimes live',
        alternative: 'Official docs emphasize that OpenCode does not store your code or context data by default',
      },
      {
        label: 'Best fit',
        launch: 'Teams coordinating many agents or repeatable multi-step work',
        alternative: 'Developers who want a fast, open-source coding agent environment',
      },
    ],
    faqs: [
      {
        question: 'Can OpenCode be used inside Multica?',
        answer:
          'Yes. The official Multica repo documents OpenCode as a supported runtime, which makes the combination a natural fit for teams that like OpenCode but need more coordination.',
      },
      {
        question: 'When is OpenCode enough on its own?',
        answer:
          'OpenCode is often enough when the main need is code generation, editing, or debugging from a terminal or IDE, especially for solo developers or very small teams.',
      },
      {
        question: 'Why would I add Multica above OpenCode?',
        answer:
          'Because once multiple agents, skills, runtimes, and teammates get involved, the management problem becomes separate from the coding problem. That is where Multica adds value.',
      },
    ],
  },
  {
    href: '/compare/self-hosted-deployment',
    label: 'Self-hosted Deployment',
    eyebrow: 'Compare',
    title: 'Multica vs self-hosted deployment',
    summary:
      'If you already know how to self-host but do not want to repeat the full setup and maintenance path each time, Multica is the better fit. Stay self-hosted when full infrastructure control matters more than launch speed and ongoing convenience.',
    alternativeName: 'Self-hosted deployment',
    chooseLaunch: [
      'You want a faster path from model and channel selection to a real launch',
      'You care more about less repeat setup and follow-up work than total infrastructure control',
      'You want plans, payment, deployment tracking, and later launches tied to one flow',
    ],
    chooseAlternative: [
      'You need to control every server, dependency, hardening step, and rollback decision yourself',
      'Your team already has internal ops processes for upgrades, incident handling, and environment control',
      'You accept extra setup and maintenance work as the cost of having full infrastructure control',
    ],
    rows: [
      {
        label: 'Time to first launch',
        launch: 'Choose the model and channel first, then move into plans, payment, and console-based deployment tracking',
        alternative: 'You prepare the server, runtime, secrets, and deployment path yourself before you reach a stable launch flow',
      },
      {
        label: 'Ongoing maintenance',
        launch: 'Updates, deployment tracking, and follow-up actions stay tied to one managed service path',
        alternative: 'Your team owns patching, upgrade planning, monitoring, and recovery processes directly',
      },
      {
        label: 'Repeat launches',
        launch: 'Use the same order and console flow to trigger additional launches when plan capacity remains',
        alternative: 'Each new instance usually means repeating provisioning, validation, and follow-up work',
      },
      {
        label: 'Control tradeoff',
        launch: 'You give up some infrastructure control in exchange for less repeated ops work and a faster buyer path',
        alternative: 'You keep maximum control, with more engineering and maintenance responsibility on your side',
      },
    ],
    faqs: [
      {
        question: 'Do I need to know how to self-host before choosing Multica?',
        answer:
          'No. This comparison is for teams deciding whether they still want to do that work themselves. If your goal is a shorter path from selection to launch, Multica can be the better fit even if you could self-host.',
      },
      {
        question: 'When is self-hosted still the better choice?',
        answer:
          'Stay self-hosted when you need full control over infrastructure, upgrade timing, hardening choices, and rollback policy. If those decisions are essential to your process, the extra setup work may be worth it.',
      },
      {
        question: 'What do I give up by not self-hosting?',
        answer:
          'You give up some low-level control over how the environment is assembled and maintained. In return, you remove a large share of the repeated deployment and follow-up work from the buyer path.',
      },
    ],
  },
  {
    href: '/compare/manual-agent-deployment',
    label: 'Manual Deployment',
    eyebrow: 'Compare',
    title: 'Multica vs manual agent deployment',
    summary:
      'If your current path means stitching together docs, credentials, payment, and deployment follow-up by hand, Multica is the better fit. Stay manual only when you intentionally want each step separated and do not mind repeating the work.',
    alternativeName: 'Manual agent deployment',
    chooseLaunch: [
      'You want one path from configuration to plans, payment, and deployment tracking',
      'You do not want to turn docs, credentials, and follow-up steps into manual buying work',
      'You expect to launch more than once and want repeat launches handled from the console',
    ],
    chooseAlternative: [
      'You prefer to control each setup step manually and do not mind slower handoffs',
      'You are comfortable coordinating payment, deployment, and support outside one product path',
      'Your launch volume is low enough that repeated setup work is not a real cost for your team',
    ],
    rows: [
      {
        label: 'Buyer path',
        launch: 'Homepage, plans, payment, and console access live in one continuous launch flow',
        alternative: 'The buyer has to translate setup docs and separate tasks into action on their own',
      },
      {
        label: 'Payment to deployment',
        launch: 'After payment, you go straight to the console to track deployment and follow-up steps',
        alternative: 'Payment, provisioning, and status updates usually require extra manual handoff work',
      },
      {
        label: 'Repeat work',
        launch: 'Future launches can come from the same managed flow when plan capacity remains',
        alternative: 'Each new launch restarts the same setup, coordination, and validation work',
      },
      {
        label: 'Operational clarity',
        launch: 'Orders, upgrades, and deployment status stay tied together in one place',
        alternative: 'Status, upgrade work, and launch coordination live across multiple manual steps and tools',
      },
    ],
    faqs: [
      {
        question: 'Is manual deployment ever the right choice?',
        answer:
          'Yes. Manual deployment still makes sense when your team wants each step separated, already has the people to manage those handoffs, and does not mind the extra time that comes with it.',
      },
      {
        question: 'What does Multica remove from the workflow?',
        answer:
          'It reduces the need to stitch together docs, payment, deployment tracking, and follow-up actions by hand. The main benefit is not just speed, but less repeated coordination work every time you launch again.',
      },
      {
        question: 'What happens after I choose a plan?',
        answer:
          'You continue into payment and then move straight into console-based deployment tracking. That is useful for buyers who want the next step to be obvious instead of handled through separate manual follow-up.',
      },
    ],
  },
]

export const guideContent: Record<GuideChannel, GuideContent> = {
  telegram: {
    title: 'Telegram token guide',
    steps: [
      'Open BotFather in Telegram and create or choose your bot.',
      'Copy the HTTP API token BotFather gives you.',
      'Paste that token here so Multica can save it for later binding.',
    ],
    tokenLabel: 'Telegram bot token',
    tokenPlaceholder: '123456:telegram-bot-token',
    phone: {
      avatar: 'TG',
      name: 'BotFather',
      subtitle: 'Telegram setup',
      lead: { text: 'Use BotFather to create a bot and copy its API token.', time: '10:14', tone: 'incoming' },
      quickActions: [
        { title: '/newbot', subtitle: 'Create a new Telegram bot' },
        { title: '/token', subtitle: 'Reveal the bot API token again' },
      ],
      outgoing: { text: 'I need the token for Multica setup.', time: '10:16', tone: 'outgoing' },
      reply: { text: 'Copy the API token, then save it in the launch flow.', time: '10:17', tone: 'incoming' },
      composer: 'Paste Telegram bot token',
    },
  },
  discord: {
    title: 'Discord token guide',
    steps: [
      'Open the Discord Developer Portal and create or choose your application.',
      'Add a bot user, then copy the bot token from the Bot page.',
      'Paste the bot token here so the deployment can keep a saved channel credential.',
    ],
    tokenLabel: 'Discord bot token',
    tokenPlaceholder: 'discord-bot-token',
    phone: {
      avatar: 'DC',
      name: 'Discord Dev Portal',
      subtitle: 'Bot setup',
      lead: { text: 'Create an application, add a bot, and copy the bot token.', time: '09:42', tone: 'incoming' },
      quickActions: [
        { title: 'New Application', subtitle: 'Create the Discord app shell' },
        { title: 'Reset Token', subtitle: 'Generate a fresh bot token' },
      ],
      outgoing: { text: 'I need the saved token before checkout.', time: '09:44', tone: 'outgoing' },
      reply: { text: 'Copy the token from the Bot page, then store it here.', time: '09:45', tone: 'incoming' },
      composer: 'Paste Discord bot token',
    },
  },
  whatsapp: {
    title: 'WhatsApp token guide',
    steps: [
      'Open your WhatsApp provider dashboard and choose the app or sender you want to connect.',
      'Generate or copy the API token that will be used for message delivery.',
      'Paste that token here so Multica can retain it for later channel binding.',
    ],
    tokenLabel: 'WhatsApp API token',
    tokenPlaceholder: 'whatsapp-api-token',
    phone: {
      avatar: 'WA',
      name: 'WhatsApp Provider',
      subtitle: 'Channel setup',
      lead: { text: 'Copy the API token from your WhatsApp provider dashboard.', time: '11:03', tone: 'incoming' },
      quickActions: [
        { title: 'Create Sender', subtitle: 'Prepare a WhatsApp sender' },
        { title: 'Generate Token', subtitle: 'Issue a channel API credential' },
      ],
      outgoing: { text: 'I want the token saved before deployment starts.', time: '11:05', tone: 'outgoing' },
      reply: { text: 'Paste the API token in the launch flow and continue to pricing.', time: '11:06', tone: 'incoming' },
      composer: 'Paste WhatsApp API token',
    },
  },
}

export const initialGuideInputs: Record<GuideChannel, string> = {
  telegram: '',
  discord: '',
  whatsapp: '',
}

export const initialAuthForm: AuthFormState = {
  name: '',
  email: '',
  password: '',
}

export const initialCreateUserForm: CreateUserFormState = {
  name: '',
  email: '',
  password: '',
  role: 'operator',
}

export { annualBillingMultiplier }

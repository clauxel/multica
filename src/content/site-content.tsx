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
  GuideChannel,
  GuideContent,
  LegalSection,
  NavItem,
  Option,
  Plan,
  SolutionPage,
} from '../app-types'

export const supportEmail = 'support@aigeamy.com'

export const navItems: NavItem[] = [
  { href: '#features', label: 'Features', icon: Layers3 },
  { href: '#solutions', label: 'Solutions', icon: Layers3 },
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
    title: 'Launch without server setup',
    description: 'Skip the infrastructure setup pass entirely and go straight into a guided Multica agent deployment flow.',
  },
  {
    title: 'Automatic runtime updates',
    description: (
      <>
        Keep each Multica agent current with <strong>automatic runtime updates</strong> and
        no manual patching so teams stay on the latest release path.
      </>
    ),
  },
  {
    title: 'Security-hardened deployment',
    description: (
      <>
        Launch a <strong>security-hardened Multica agent</strong> with safer defaults and a
        deployment path built to reduce avoidable exposure from the start.
      </>
    ),
  },
  {
    title: 'Model first configuration',
    description: 'Choose the default intelligence layer before launch so each Multica agent starts with the right baseline.',
  },
  {
    title: 'True multi-channel reach',
    description: 'Connect one agent to Telegram, Discord, and WhatsApp simultaneously — reach every audience without rebuilding your setup.',
  },
  {
    title: 'Console-first follow-up',
    description: 'Keep upgrades, extra deployments, and account binding in one operational control surface.',
  },
]

export const plans: Plan[] = planCatalog

export const faqs: FaqItem[] = [
  {
    question: 'Do I need my own server before I start?',
    answer:
      'Not to begin the launch flow. Multica is designed for teams that want a faster first deployment without doing the full server setup by hand. If your process requires full infrastructure ownership from day one, the self-hosted path may still be the better fit.',
  },
  {
    question: 'What happens after payment?',
    answer:
      'After successful payment, you go straight to the console to track deployment and follow-up actions. The flow is designed to move you from plan choice into deployment tracking, not into a separate manual handoff.',
  },
  {
    question: 'Who should use Multica instead of self-hosting?',
    answer:
      'Use Multica when speed to first launch, multi-channel reach, and simpler follow-up operations matter more than full infrastructure control. If your team needs to customize every dependency, server policy, and upgrade step, the self-hosted path may still be a better match.',
  },
  {
    question: 'Which channels are supported in the launch flow?',
    answer:
      'You can start the launch flow with Telegram, Discord, or WhatsApp. Choose the channel you plan to use first, then save the required token now or later as you continue through the launch path.',
  },
  {
    question: 'What makes Multica different from a single-channel bot?',
    answer:
      'Multica is built for multi-channel deployment from the ground up. One agent configuration can serve Telegram, Discord, and WhatsApp simultaneously through a single managed deployment, without duplicating your setup for each channel.',
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

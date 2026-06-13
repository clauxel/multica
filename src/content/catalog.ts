import type { Option, Plan } from '../app-types'

export const annualBillingMultiplier = 0.65
export const modelDiscountMultiplier = 0.5
export const modelDiscountLabel = '50% off'
export const modelDiscountTooltip = 'Choose this model and get 50% off the package price.'

export const planCatalog: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPriceLabel: '$9',
    monthlyAmountCents: 900,
    currency: 'USD',
    subtitle: 'Best for first-time launches',
    etaMinutes: 12,
    includedDeployments: 1,
    bullets: ['1 Multica instance', '1 default model', '1 connected channel'],
    featured: false,
  },
  {
    id: 'growth',
    name: 'Growth',
    monthlyPriceLabel: '$29',
    monthlyAmountCents: 2900,
    currency: 'USD',
    subtitle: 'Best value for repeat launches',
    etaMinutes: 8,
    includedDeployments: 5,
    bullets: ['5 Multica instances', 'Lower cost per launch', 'Made for recurring launches'],
    featured: true,
  },
  {
    id: 'scale',
    name: 'Scale',
    monthlyPriceLabel: '$79',
    monthlyAmountCents: 7900,
    currency: 'USD',
    subtitle: 'Built for high-volume teams',
    etaMinutes: 5,
    includedDeployments: 20,
    bullets: ['20 Multica instances', 'Highest launch capacity', 'Best for large launch batches'],
    featured: false,
  },
]

export type FrontendCatalogOption = Omit<Option, 'icon'>

export const modelCatalog: FrontendCatalogOption[] = [
  {
    id: 'gemini-3-1-pro',
    name: 'Gemini 3.1 Pro',
    status: 'Feb 2026',
    highlights: ['Latest Gemini', 'Multimodal'],
  },
  {
    id: 'gpt-5-4',
    name: 'GPT-5.4',
    status: 'Mar 2026',
    highlights: ['Default', 'Computer use'],
  },
  {
    id: 'claude-sonnet-4-6',
    name: 'Claude Sonnet 4.6',
    status: 'Feb 2026',
    highlights: ['Fast', '1M context'],
  },
  {
    id: 'claude-opus-4-6',
    name: 'Claude Opus 4.6',
    status: 'Feb 2026',
    discountMultiplier: modelDiscountMultiplier,
    discountLabel: modelDiscountLabel,
    discountTooltip: modelDiscountTooltip,
  },
  {
    id: 'glm-4-7',
    name: 'GLM-4.7',
    status: 'Jan 2026',
    discountMultiplier: modelDiscountMultiplier,
    discountLabel: modelDiscountLabel,
    discountTooltip: modelDiscountTooltip,
  },
  {
    id: 'glm-5-1',
    name: 'GLM-5.1',
    status: 'Apr 2026',
    discountMultiplier: modelDiscountMultiplier,
    discountLabel: modelDiscountLabel,
    discountTooltip: modelDiscountTooltip,
  },
  {
    id: 'gemini-3-pro',
    name: 'Gemini 3 Pro',
    status: 'Nov 2025',
    discountMultiplier: modelDiscountMultiplier,
    discountLabel: modelDiscountLabel,
    discountTooltip: modelDiscountTooltip,
  },
  {
    id: 'gpt-4-1',
    name: 'GPT-4.1',
    status: 'Apr 2025',
    discountMultiplier: modelDiscountMultiplier,
    discountLabel: modelDiscountLabel,
    discountTooltip: modelDiscountTooltip,
  },
]

export const channelCatalog: FrontendCatalogOption[] = [
  {
    id: 'telegram',
    name: 'Telegram',
    status: 'Live',
    highlights: ['Bots'],
  },
  {
    id: 'discord',
    name: 'Discord',
    status: 'Live',
    highlights: ['Communities'],
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    status: 'Live',
    highlights: ['Customer chat'],
  },
]

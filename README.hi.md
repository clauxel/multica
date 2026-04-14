# डेवलपर्स के लिए Multica

**भाषाएँ:** [English](README.md) | [简体中文](README.zh-CN.md) | **हिन्दी** | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Multica को जल्दी समझने और सही कमांड के साथ शुरू करने के लिए व्यावहारिक, डेवलपर-फर्स्ट नोट्स।

आधिकारिक Multica रिपॉज़िटरी के आधार पर अंतिम सत्यापन: 14 अप्रैल 2026।

## यह फ़ोल्डर क्या है

यह फ़ोल्डर उन डेवलपर्स के लिए एक curated guide है जो Multica का मूल्यांकन करना चाहते हैं या उसे अपनाना चाहते हैं।

यह मुख्य रूप से इन बातों पर केंद्रित है:

- Multica किस काम में सबसे अच्छा है
- सबसे पहले कौन-सा setup path चुनना चाहिए
- cloud और self-hosted उपयोग के लिए सही CLI syntax
- पहले दिन किसी सामान्य developer को किन कम से कम docs की ज़रूरत होती है

सीमा:

- इस फ़ोल्डर में केवल documentation है
- यहाँ दिए गए commands upstream `multica-ai/multica` repo या installed `multica` CLI को target करते हैं
- इस फ़ोल्डर में server source code, Docker Compose files, या CLI binaries शामिल नहीं हैं

## पहले यह पढ़ें

| फ़ाइल | किसके लिए सबसे उपयोगी |
|------|--------------------------|
| [docs/overview.md](docs/overview.md) | Multica क्या है, कहाँ फिट बैठता है, और cloud बनाम self-host कैसे चुनें |
| [docs/quick-start.md](docs/quick-start.md) | सबसे तेज़ और सुरक्षित रास्ता ताकि runtime चालू हो जाए और पहला issue मिल जाए |
| [docs/cli-reference.md](docs/cli-reference.md) | सही CLI syntax, जिसमें self-hosted setup और issue commands शामिल हैं |
| [docs/self-hosting.md](docs/self-hosting.md) | official-aligned self-hosted paths, defaults और production caveats |
| [docs/troubleshooting.md](docs/troubleshooting.md) | पहले दिन की failures, stale syntax traps, और run-debugging hints |
| [docs/market-reference.md](docs/market-reference.md) | दो आवश्यक comparison tables, केवल reference के रूप में |

## सही शुरुआत कैसे चुनें

| स्थिति | सबसे अच्छा पहला कदम |
|-----------|----------------------|
| आप जल्दी से product fit देखना चाहते हैं | `multica setup` के साथ Multica Cloud से शुरू करें |
| आपको पूरी infrastructure control चाहिए | [docs/self-hosting.md](docs/self-hosting.md) में self-host flow अपनाएँ |
| आप Windows पर हैं और CLI/runtime टेस्ट करना चाहते हैं | PowerShell से CLI इंस्टॉल करें, फिर `multica setup` चलाएँ |
| आपको सबसे छोटा first-day path चाहिए | [docs/quick-start.md](docs/quick-start.md) से शुरू करें |

## सबसे तेज़ शुरुआत

### Multica Cloud

CLI इंस्टॉल करें:

```bash
brew install multica-ai/tap/multica
```

अगर Homebrew उपलब्ध नहीं है:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

Windows PowerShell पर:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

फिर configure, login, और daemon शुरू करें:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

सफलता का मतलब:

- आपकी मशीन web app में **Settings -> Runtimes** के अंतर्गत दिखे
- कम से कम एक workspace दिखाई दे
- कम से कम एक supported agent CLI लोकल मशीन पर detect हो

### Self-Hosted Multica

आधिकारिक quick path:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

जब आपको Docker-based local provisioning और local CLI configuration का सबसे छोटा रास्ता चाहिए, तब यही path चुनें।

अगर आप manual route पसंद करते हैं, तो [docs/self-hosting.md](docs/self-hosting.md) देखें।

## First-Day Checklist

- `multica` CLI इंस्टॉल करें
- cloud के लिए `multica setup` या self-hosted के लिए `multica setup self-host` चलाएँ
- `multica daemon status` कन्फ़र्म करें
- सुनिश्चित करें कि कम से कम एक supported AI CLI `PATH` में उपलब्ध है
- web app खोलें और अपनी मशीन को **Settings -> Runtimes** में देखें
- **Settings -> Agents** में एक agent बनाएँ
- एक issue बनाएँ और assign करें

## Supported Agent CLIs

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## भरोसेमंद Upstream Links

| Resource | Link |
|----------|------|
| आधिकारिक साइट | [multica.ai](https://multica.ai) |
| GitHub repository | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| Official README | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Official CLI and Daemon Guide | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Official Self-Hosting Guide | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Reference Appendix

नीचे दी गई दो tables जानबूझकर रखी गई हैं क्योंकि इस workspace में ये आवश्यक हैं।

महत्वपूर्ण नोट:

- ये reference/marketing material हैं, setup instructions नहीं
- Multica CLI commands या self-host procedures के लिए इन्हें source of truth न मानें
- technical decisions के लिए ऊपर दिए गए official links का उपयोग करें

### Method 4: One-Click Cloud Deploys

| Platform | Link | Notes |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | आधिकारिक, सबसे तेज़ शुरुआत |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Web-based setup wizard |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Security-hardened, pre-configured |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | One-click Docker deploy |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Self-hosted PaaS template |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | 3 मिनट से कम में managed deployment |

### Comparable AI Agent Products

| # | Product | Website | Type | Self-Host | Messaging Platforms |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | self-learning autonomous agent | Yes | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk, and more |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | coding-agent teamwork platform | Yes | workspace और issue-driven workflows |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | autonomous agent + messaging hub | Yes | WhatsApp, Telegram, Slack, Discord, iMessage, and more |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | autonomous task agent | Yes | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM orchestration framework | Yes | custom integrations के ज़रिए कोई भी |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | workflow automation + AI nodes | Yes | Slack, Telegram, Discord, and 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | multi-agent role collaboration | Yes | API / custom integrations |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | autonomous agent infrastructure | Yes | Slack, Email, API |

## Maintenance Rules

- इस फ़ोल्डर को व्यावहारिक और भरोसेमंद रखें
- marketing claims से पहले correct commands को प्राथमिकता दें
- अगर upstream file names या CLI syntax बदलते हैं, तो यह फ़ोल्डर तुरंत अपडेट करें
- अगर कोई link या product detail अनिश्चित है, तो उसे technical fact की तरह नहीं बल्कि reference material की तरह दिखाएँ

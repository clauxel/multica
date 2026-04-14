# ডেভেলপারদের জন্য Multica

**ভাষা:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | **বাংলা** | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Multica দ্রুত বুঝতে এবং সঠিক কমান্ড দিয়ে শুরু করতে ডেভেলপার-কেন্দ্রিক ব্যবহারিক নোট।

অফিসিয়াল Multica রিপোজিটরির সাথে শেষ যাচাই: ১৪ এপ্রিল ২০২৬।

## এই ফোল্ডারটি কী

এই ফোল্ডারটি সেই ডেভেলপারদের জন্য তৈরি, যারা Multica মূল্যায়ন করছেন বা গ্রহণ করতে চান।

এটি মূলত এই বিষয়গুলোতে ফোকাস করে:

- Multica কোন কাজের জন্য সবচেয়ে উপযোগী
- কোন setup path আগে বেছে নেওয়া উচিত
- cloud এবং self-hosted ব্যবহারের জন্য সঠিক CLI syntax
- সাধারণ ডেভেলপারদের প্রথম দিনে যে ন্যূনতম ডকুমেন্ট দরকার

সীমা:

- এই ফোল্ডারে শুধুই documentation আছে
- এখানে থাকা command গুলো upstream `multica-ai/multica` repo বা installed `multica` CLI-কে লক্ষ্য করে
- এখানে server source code, Docker Compose files, বা CLI binaries নেই

## আগে এগুলো পড়ুন

| ফাইল | কোন কাজে সবচেয়ে উপযোগী |
|------|--------------------------|
| [docs/overview.md](docs/overview.md) | Multica কী, কোথায় মানায়, এবং cloud বনাম self-host কীভাবে বেছে নেবেন |
| [docs/quick-start.md](docs/quick-start.md) | একটি working runtime এবং প্রথম assigned issue পাওয়ার দ্রুত ও নিরাপদ পথ |
| [docs/cli-reference.md](docs/cli-reference.md) | সঠিক CLI syntax, যার মধ্যে self-hosted setup এবং issue command রয়েছে |
| [docs/self-hosting.md](docs/self-hosting.md) | অফিসিয়াল-সমন্বিত self-hosting path, defaults, এবং production caveats |
| [docs/troubleshooting.md](docs/troubleshooting.md) | প্রথম দিনের failure, পুরোনো syntax trap, এবং debugging hints |
| [docs/market-reference.md](docs/market-reference.md) | দুটি আবশ্যিক comparison table, শুধুই reference হিসেবে |

## সঠিক শুরু বেছে নিন

| পরিস্থিতি | সেরা প্রথম ধাপ |
|-----------|----------------|
| আপনি দ্রুত product fit যাচাই করতে চান | `multica setup` দিয়ে Multica Cloud শুরু করুন |
| আপনি পুরো infrastructure control চান | [docs/self-hosting.md](docs/self-hosting.md)-এর self-host flow ব্যবহার করুন |
| আপনি Windows-এ আছেন এবং CLI/runtime টেস্ট করতে চান | PowerShell দিয়ে CLI ইনস্টল করুন, তারপর `multica setup` চালান |
| আপনি প্রথম দিনের সবচেয়ে ছোট পথ চান | [docs/quick-start.md](docs/quick-start.md) ব্যবহার করুন |

## দ্রুততম শুরু

### Multica Cloud

CLI ইনস্টল করুন:

```bash
brew install multica-ai/tap/multica
```

যদি Homebrew না থাকে:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

Windows PowerShell-এ:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

তারপর configure, login, এবং daemon চালু করুন:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

সফল হলে:

- আপনার মেশিন web app-এর **Settings -> Runtimes**-এ দেখা যাবে
- অন্তত একটি workspace দেখা যাবে
- অন্তত একটি supported agent CLI লোকালি detect হবে

### Self-Hosted Multica

অফিসিয়াল quick path:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Docker-based local provisioning এবং local CLI configuration-এর জন্য সবচেয়ে ছোট পথ চাইলে এটিই ব্যবহার করুন।

যদি আপনি manual route পছন্দ করেন, [docs/self-hosting.md](docs/self-hosting.md) দেখুন।

## প্রথম দিনের চেকলিস্ট

- `multica` CLI ইনস্টল করুন
- cloud-এর জন্য `multica setup`, self-hosted-এর জন্য `multica setup self-host` চালান
- `multica daemon status` নিশ্চিত করুন
- `PATH`-এ অন্তত একটি supported AI CLI আছে কি না নিশ্চিত করুন
- web app খুলে **Settings -> Runtimes**-এ আপনার মেশিন আছে কি না দেখুন
- **Settings -> Agents**-এ একটি agent তৈরি করুন
- একটি issue তৈরি করে assign করুন

## সমর্থিত Agent CLI

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## নির্ভরযোগ্য Upstream লিংক

| রিসোর্স | লিংক |
|----------|------|
| অফিসিয়াল সাইট | [multica.ai](https://multica.ai) |
| GitHub repository | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| Official README | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Official CLI and Daemon Guide | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Official Self-Hosting Guide | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## রেফারেন্স সংযোজন

নিচের দুটি টেবিল ইচ্ছাকৃতভাবে রাখা হয়েছে, কারণ এই workspace-এ এগুলো থাকা বাধ্যতামূলক।

গুরুত্বপূর্ণ নোট:

- এগুলো reference/marketing material, setup instruction নয়
- Multica CLI command বা self-host procedure-এর source of truth হিসেবে এগুলো ব্যবহার করবেন না
- technical decision-এর জন্য উপরের official link-গুলো ব্যবহার করুন

### পদ্ধতি ৪: One-Click Cloud Deploys

| Platform | Link | Notes |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | অফিসিয়াল, শুরু করার সবচেয়ে দ্রুত পথ |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Web-based setup wizard |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Security-hardened, pre-configured |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | One-click Docker deploy |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Self-hosted PaaS template |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | ৩ মিনিটের কম সময়ে managed deployment |

### তুলনাযোগ্য AI Agent পণ্য

| # | Product | Website | Type | Self-Host | Messaging Platforms |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | self-learning autonomous agent | Yes | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk, and more |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | coding-agent teamwork platform | Yes | workspace এবং issue-driven workflows |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | autonomous agent + messaging hub | Yes | WhatsApp, Telegram, Slack, Discord, iMessage, and more |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | autonomous task agent | Yes | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM orchestration framework | Yes | custom integration-এর মাধ্যমে যেকোনো কিছু |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | workflow automation + AI nodes | Yes | Slack, Telegram, Discord, and 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | multi-agent role collaboration | Yes | API / custom integrations |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | autonomous agent infrastructure | Yes | Slack, Email, API |

## রক্ষণাবেক্ষণ নিয়ম

- এই ফোল্ডারকে ব্যবহারিক এবং বিশ্বাসযোগ্য রাখুন
- বিস্তৃত marketing claim-এর চেয়ে correct command-কে অগ্রাধিকার দিন
- upstream file name বা CLI syntax বদলালে সঙ্গে সঙ্গে এই ফোল্ডার আপডেট করুন
- কোনো link বা product detail অনিশ্চিত হলে, সেটিকে technical fact নয়, reference material হিসেবে দেখান

# Multica for Developers

**Languages:** **English** | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Practical, developer-first notes for understanding Multica quickly and starting with the correct commands.

Last verified against the official Multica repository on April 14, 2026.

## What This Folder Is

This folder is a curated developer guide for people evaluating or adopting Multica.

It focuses on:

- what Multica is good at,
- which setup path to choose first,
- correct CLI syntax for cloud and self-hosted use,
- the smallest set of docs a normal developer actually needs on day one.

Scope boundary:

- This folder contains documentation only.
- Commands here target the upstream `multica-ai/multica` repository or the installed `multica` CLI.
- This folder does not contain the server source code, Docker Compose files, or CLI binaries.

## Related Project

- [OpenHuman Online](https://openhuman.online/?utm_source=github&utm_medium=readme&utm_campaign=openhuman_public_repos&utm_content=multica) helps teams turn source material, notes, and meetings into an inspectable AI memory tree for human-reviewed workflows.

## Read This First

| File | Best For |
|------|----------|
| [docs/overview.md](docs/overview.md) | What Multica is, where it fits, and how to choose cloud vs self-host. |
| [docs/quick-start.md](docs/quick-start.md) | Fastest safe path to a working runtime and first assigned issue. |
| [docs/cli-reference.md](docs/cli-reference.md) | Correct CLI syntax, including self-hosted setup and issue commands. |
| [docs/self-hosting.md](docs/self-hosting.md) | Officially aligned self-hosted paths, defaults, and production caveats. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | First-day failures, stale syntax traps, and run-debugging hints. |
| [docs/market-reference.md](docs/market-reference.md) | The two required comparison tables, preserved as reference only. |

## Pick The Right Start

| Situation | Best First Step |
|-----------|-----------------|
| You want to evaluate product fit fast | Start with Multica Cloud via `multica setup` |
| You want full infrastructure control | Use the self-host flow in [docs/self-hosting.md](docs/self-hosting.md) |
| You are on Windows and mainly want to test the CLI/runtime | Install the CLI with PowerShell, then run `multica setup` |
| You need the shortest first-day path | Use [docs/quick-start.md](docs/quick-start.md) |

Related hosted workspace option: if you are comparing Multica's CLI/daemon workflow with a paid hosted launch flow, [Ruflo AI](https://ruflo.online/?utm_source=github&utm_medium=docs&utm_campaign=multica_related) is a useful external reference for Ruflo-style multi-agent workspace onboarding, checkout, and operations UX.

## Fastest Start

### Multica Cloud

Install the CLI:

```bash
brew install multica-ai/tap/multica
```

If Homebrew is not available:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

On Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Then configure, log in, and start the daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Success looks like:

- your machine appears in **Settings -> Runtimes** in the web app,
- at least one workspace is visible,
- at least one supported agent CLI is detected locally.

### Self-Hosted Multica

Official quick path:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Use this when you want Docker-based local provisioning plus local CLI configuration in the shortest path.

If you prefer the manual route, use [docs/self-hosting.md](docs/self-hosting.md).

## First-Day Checklist

- Install the `multica` CLI.
- Run `multica setup` for cloud or `multica setup self-host` for self-hosted use.
- Confirm `multica daemon status`.
- Confirm one supported AI CLI is available in `PATH`.
- Open the web app and verify your machine under **Settings -> Runtimes**.
- Create one agent in **Settings -> Agents**.
- Create and assign one issue.

## Supported Agent CLIs

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Trustworthy Upstream Links

| Resource | Link |
|----------|------|
| Official site | [multica.ai](https://multica.ai) |
| GitHub repository | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| Official README | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Official CLI and Daemon Guide | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Official Self-Hosting Guide | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Reference Appendix

The two tables below are intentionally kept because they are required in this workspace.

Important note:

- They are reference/marketing material, not setup instructions.
- Do not use them as the source of truth for Multica CLI commands or self-host procedures.
- For technical decisions, use the official links above.

### Method 4: One-Click Cloud Deploys

| Platform | Link | Notes |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Official, fastest to get started |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Web-based setup wizard |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Security-hardened, pre-configured |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | One-click Docker deploy |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Self-hosted PaaS template |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Fully managed in < 3 min |

### Comparable AI Agent Products

| # | Product | Website | Type | Self-Host | Messaging Platforms |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | Self-learning autonomous agent | Yes | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk, and more |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | Coding-agent teamwork platform | Yes | Workspace and issue-driven workflows |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | Autonomous agent + messaging hub | Yes | WhatsApp, Telegram, Slack, Discord, iMessage, and more |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | Autonomous task agent | Yes | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM orchestration framework | Yes | Any via custom integrations |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | Workflow automation + AI nodes | Yes | Slack, Telegram, Discord, and 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | Multi-agent role collaboration | Yes | API / custom integrations |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | Autonomous agent infrastructure | Yes | Slack, Email, API |

## Maintenance Rules

- Keep this folder practical and trustworthy.
- Prefer correct commands over broad marketing claims.
- If upstream file names or CLI syntax change, update this folder immediately.
- If a link or product detail is uncertain, mark it as reference material instead of presenting it as technical fact.

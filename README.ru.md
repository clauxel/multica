# Multica Для Разработчиков

**Языки:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | **Русский** | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Практичные заметки для разработчиков, помогающие быстро понять Multica и начать с правильных команд.

Последняя сверка с официальным репозиторием Multica: 14 апреля 2026 года.

## Что Это За Каталог

Этот каталог — curated guide для разработчиков, которые оценивают или внедряют Multica.

Он сосредоточен на:

- том, в чем Multica действительно полезна
- выборе правильного setup path на старте
- правильном CLI syntax для cloud и self-hosted сценариев
- минимальном наборе docs, который нужен обычному разработчику в первый день

Границы:

- этот каталог содержит только документацию
- команды здесь ориентированы на upstream repo `multica-ai/multica` или установленный CLI `multica`
- здесь нет server source code, Docker Compose files или CLI binaries

## Прочитайте Это Сначала

| Файл | Для Чего Лучше Всего |
|------|----------------------|
| [docs/overview.md](docs/overview.md) | Понять, что такое Multica, где она подходит и как выбрать cloud vs self-host. |
| [docs/quick-start.md](docs/quick-start.md) | Самый быстрый и безопасный путь к работающему runtime и первому назначенному issue. |
| [docs/cli-reference.md](docs/cli-reference.md) | Правильный CLI syntax, включая self-hosted setup и команды issues. |
| [docs/self-hosting.md](docs/self-hosting.md) | Self-hosting пути, согласованные с official, значения по умолчанию и production caveats. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Ошибки первого дня, ловушки устаревшего syntax и подсказки для отладки. |
| [docs/market-reference.md](docs/market-reference.md) | Две обязательные comparison tables, сохраненные только как reference. |

## Выберите Правильную Точку Старта

| Ситуация | Лучший Первый Шаг |
|-----------|-------------------|
| Вы хотите быстро оценить пригодность продукта | Начните с Multica Cloud через `multica setup` |
| Вам нужен полный контроль над инфраструктурой | Используйте self-host flow из [docs/self-hosting.md](docs/self-hosting.md) |
| Вы на Windows и хотите протестировать CLI/runtime | Установите CLI через PowerShell, затем запустите `multica setup` |
| Вам нужен самый короткий путь первого дня | Используйте [docs/quick-start.md](docs/quick-start.md) |

## Самый Быстрый Старт

### Multica Cloud

Установите CLI:

```bash
brew install multica-ai/tap/multica
```

Если Homebrew недоступен:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

В Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Затем настройте, войдите и запустите daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Признаки успеха:

- ваша машина появляется в **Settings -> Runtimes** в веб-приложении,
- виден хотя бы один workspace,
- локально обнаружен хотя бы один поддерживаемый agent CLI.

### Self-Hosted Multica

Официальный быстрый путь:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Используйте этот путь, если вам нужен самый короткий маршрут к Docker-based local provisioning и локальной настройке CLI.

Если вы предпочитаете ручной маршрут, используйте [docs/self-hosting.md](docs/self-hosting.md).

## Чеклист Первого Дня

- Установите CLI `multica`.
- Запустите `multica setup` для cloud или `multica setup self-host` для self-hosted.
- Проверьте `multica daemon status`.
- Убедитесь, что хотя бы один поддерживаемый AI CLI доступен в `PATH`.
- Откройте веб-приложение и проверьте вашу машину в **Settings -> Runtimes**.
- Создайте agent в **Settings -> Agents**.
- Создайте и назначьте issue.

## Поддерживаемые Agent CLI

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Надежные Upstream Ссылки

| Ресурс | Ссылка |
|----------|--------|
| Официальный сайт | [multica.ai](https://multica.ai) |
| GitHub репозиторий | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| Официальный README | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Официальное руководство по CLI и Daemon | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Официальное руководство по Self-Hosting | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Справочное Приложение

Две таблицы ниже сохранены намеренно, потому что они обязательны в этом workspace.

Важное примечание:

- это reference/marketing material, а не setup instructions
- не используйте их как source of truth для команд Multica CLI или self-host procedures
- для технических решений используйте официальные ссылки выше

### Метод 4: One-Click Cloud Deploys

| Платформа | Ссылка | Примечания |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Официально, самый быстрый старт |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Web-based setup wizard |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Security-hardened, pre-configured |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | One-click Docker deploy |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Self-hosted PaaS template |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Fully managed менее чем за 3 мин |

### Сравнимые AI Agent Продукты

| # | Продукт | Сайт | Тип | Self-Host | Платформы сообщений |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | self-learning autonomous agent | Yes | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk, and more |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | coding-agent teamwork platform | Yes | workspace- и issue-driven workflows |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | autonomous agent + messaging hub | Yes | WhatsApp, Telegram, Slack, Discord, iMessage, and more |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | autonomous task agent | Yes | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM orchestration framework | Yes | Любые через custom integrations |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | workflow automation + AI nodes | Yes | Slack, Telegram, Discord, and 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | multi-agent role collaboration | Yes | API / custom integrations |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | autonomous agent infrastructure | Yes | Slack, Email, API |

## Правила Поддержки

- Держите этот каталог практичным и надежным.
- Отдавайте приоритет корректным командам, а не широким marketing claims.
- Если upstream file names или CLI syntax меняются, обновляйте каталог сразу.
- Если ссылка или деталь продукта вызывает сомнение, помечайте это как reference material, а не как технический факт.

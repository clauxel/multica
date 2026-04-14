# Multica 开发者指南

**语言版本：** [English](README.md) | **简体中文** | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> 面向开发者的实用说明，帮助你快速理解 Multica，并用正确的命令开始上手。

最后一次依据官方 Multica 仓库核对时间：2026 年 4 月 14 日。

## 这个目录是什么

这个目录是一份为评估或采用 Multica 的开发者准备的整理版指南。

它主要关注：

- Multica 最擅长什么
- 应该优先选择哪条安装与启动路径
- 云端与自托管场景下正确的 CLI 语法
- 普通开发者第一天真正需要阅读的最小文档集合

范围说明：

- 这个目录只包含文档
- 这里的命令针对上游 `multica-ai/multica` 仓库或已安装的 `multica` CLI
- 这个目录不包含服务端源码、Docker Compose 文件或 CLI 二进制

## 先读这些

| 文件 | 最适合什么场景 |
|------|----------------|
| [docs/overview.md](docs/overview.md) | 了解 Multica 是什么、适合什么场景，以及如何选择云端还是自托管。 |
| [docs/quick-start.md](docs/quick-start.md) | 以最快且更安全的路径跑通环境，并拿到第一个 issue。 |
| [docs/cli-reference.md](docs/cli-reference.md) | 查看正确的 CLI 语法，包括自托管和 issue 相关命令。 |
| [docs/self-hosting.md](docs/self-hosting.md) | 查看与官方一致的自托管路径、默认值和生产注意事项。 |
| [docs/troubleshooting.md](docs/troubleshooting.md) | 处理第一天常见失败、旧语法陷阱和运行调试问题。 |
| [docs/market-reference.md](docs/market-reference.md) | 保留两张必须存在的对比表，仅作参考。 |

## 选择正确的起点

| 场景 | 建议的第一步 |
|-----------|-----------------|
| 你想快速评估产品是否适合 | 先通过 `multica setup` 使用 Multica Cloud |
| 你想完全掌控基础设施 | 使用 [docs/self-hosting.md](docs/self-hosting.md) 中的自托管流程 |
| 你在 Windows 上，主要想测试 CLI / runtime | 先用 PowerShell 安装 CLI，再运行 `multica setup` |
| 你需要第一天最短路径 | 直接看 [docs/quick-start.md](docs/quick-start.md) |

## 最快开始方式

### Multica Cloud

安装 CLI：

```bash
brew install multica-ai/tap/multica
```

如果没有 Homebrew：

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

在 Windows PowerShell 上：

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

然后完成配置、登录并启动守护进程：

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

成功的标志：

- 你的机器出现在 Web 应用的 **Settings -> Runtimes**
- 至少能看到一个 workspace
- 本地至少检测到一个支持的 agent CLI

### Self-Hosted Multica

官方快速路径：

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

如果你想要最短路径地完成 Docker 本地部署和本地 CLI 配置，就用这条路。

如果你更偏好手动安装，请阅读 [docs/self-hosting.md](docs/self-hosting.md)。

## 第一天检查清单

- 安装 `multica` CLI
- 云端使用运行 `multica setup`，自托管使用运行 `multica setup self-host`
- 确认 `multica daemon status`
- 确认 `PATH` 中存在至少一个受支持的 AI CLI
- 打开 Web 应用并确认你的机器出现在 **Settings -> Runtimes**
- 在 **Settings -> Agents** 中创建一个 agent
- 创建并分配一个 issue

## 支持的 Agent CLI

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## 可信的上游链接

| 资源 | 链接 |
|----------|------|
| 官方网站 | [multica.ai](https://multica.ai) |
| GitHub 仓库 | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| 官方 README | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| 官方 CLI 和 Daemon 指南 | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| 官方 Self-Hosting 指南 | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## 参考附录

下面两张表被刻意保留，因为它们在当前工作区里是必须存在的。

重要说明：

- 它们是参考 / 营销材料，不是安装说明
- 不要把它们当作 Multica CLI 命令或自托管步骤的事实来源
- 进行技术决策时，请以上面的官方链接为准

### 方法 4：一键云部署

| 平台 | 链接 | 说明 |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | 官方入口，最快开始方式 |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Web 化设置向导 |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | 预先加固并完成配置 |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | 基础设施即代码 |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | 一键 Docker 部署 |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | 自托管 PaaS 模板 |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | 3 分钟内托管完成 |

### 可比较的 AI Agent 产品

| # | 产品 | 网站 | 类型 | 自托管 | 消息平台 |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | 自学习自治 Agent | 是 | Telegram、Discord、Slack、WhatsApp、Signal、WeCom、Feishu、DingTalk 等 |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | 编码 Agent 协作平台 | 是 | 工作区与 issue 驱动流程 |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | 自主 Agent + 消息中心 | 是 | WhatsApp、Telegram、Slack、Discord、iMessage 等 |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | 自主任务 Agent | 是 | API / Web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM 编排框架 | 是 | 通过自定义集成接入任意平台 |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | 工作流自动化 + AI 节点 | 是 | Slack、Telegram、Discord 和 400+ 应用 |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | 多 Agent 角色协作 | 是 | API / 自定义集成 |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | 自主 Agent 基础设施 | 是 | Slack、Email、API |

## 维护规则

- 保持这个目录实用且可信
- 优先保证命令正确，而不是营销表述更夸张
- 如果上游文件名或 CLI 语法发生变化，要立即更新这个目录
- 如果某个链接或产品信息不确定，请把它标记为参考材料，而不是技术事实

# Multica Para Desenvolvedores

**Idiomas:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | **Português** | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Notas práticas, voltadas para desenvolvedores, para entender a Multica rapidamente e começar com os comandos corretos.

Última verificação em relação ao repositório oficial da Multica: 14 de abril de 2026.

## O Que É Esta Pasta

Esta pasta é um guia curado para desenvolvedores que estão avaliando ou adotando a Multica.

Ela se concentra em:

- no que a Multica é realmente boa
- qual caminho de setup escolher primeiro
- a sintaxe correta do CLI para uso em cloud e self-hosted
- o menor conjunto de docs de que um desenvolvedor comum realmente precisa no primeiro dia

Escopo:

- Esta pasta contém apenas documentação.
- Os comandos aqui visam o repositório upstream `multica-ai/multica` ou o CLI `multica` instalado.
- Esta pasta não contém o código do servidor, arquivos Docker Compose nem binários de CLI.

## Leia Isto Primeiro

| Arquivo | Melhor Para |
|------|--------------|
| [docs/overview.md](docs/overview.md) | Entender o que é a Multica, onde ela se encaixa e como escolher cloud vs self-host. |
| [docs/quick-start.md](docs/quick-start.md) | O caminho mais rápido e seguro para um runtime funcional e o primeiro issue atribuído. |
| [docs/cli-reference.md](docs/cli-reference.md) | A sintaxe correta do CLI, incluindo setup self-hosted e comandos de issues. |
| [docs/self-hosting.md](docs/self-hosting.md) | Caminhos self-hosted alinhados ao oficial, defaults e cuidados de produção. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Falhas do primeiro dia, armadilhas de sintaxe antiga e pistas de depuração. |
| [docs/market-reference.md](docs/market-reference.md) | As duas tabelas comparativas obrigatórias, preservadas apenas como referência. |

## Escolha O Ponto De Partida Certo

| Situação | Melhor Primeiro Passo |
|-----------|-----------------------|
| Você quer avaliar o produto rapidamente | Comece com Multica Cloud via `multica setup` |
| Você quer controle total da infraestrutura | Use o fluxo self-host em [docs/self-hosting.md](docs/self-hosting.md) |
| Você está no Windows e quer testar CLI/runtime | Instale o CLI com PowerShell e depois rode `multica setup` |
| Você quer o menor caminho possível no primeiro dia | Use [docs/quick-start.md](docs/quick-start.md) |

## Início Mais Rápido

### Multica Cloud

Instale o CLI:

```bash
brew install multica-ai/tap/multica
```

Se o Homebrew não estiver disponível:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

No Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Depois configure, faça login e inicie o daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Sinais de sucesso:

- sua máquina aparece em **Settings -> Runtimes** no app web,
- pelo menos um workspace está visível,
- pelo menos um agent CLI suportado foi detectado localmente.

### Multica Self-Hosted

Caminho rápido oficial:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Use este caminho quando quiser a rota mais curta para provisioning local com Docker e configuração local do CLI.

Se preferir o caminho manual, use [docs/self-hosting.md](docs/self-hosting.md).

## Checklist Do Primeiro Dia

- Instale o CLI `multica`.
- Rode `multica setup` para cloud ou `multica setup self-host` para self-hosted.
- Confirme `multica daemon status`.
- Confirme que ao menos um AI CLI suportado está disponível em `PATH`.
- Abra o app web e verifique sua máquina em **Settings -> Runtimes**.
- Crie um agent em **Settings -> Agents**.
- Crie e atribua um issue.

## Agent CLIs Suportados

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Links Upstream Confiáveis

| Recurso | Link |
|----------|------|
| Site oficial | [multica.ai](https://multica.ai) |
| Repositório GitHub | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| README oficial | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Guia oficial de CLI e Daemon | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Guia oficial de Self-Hosting | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Apêndice De Referência

As duas tabelas abaixo são mantidas intencionalmente porque são exigidas neste workspace.

Nota importante:

- Elas são material de referência/marketing, não instruções de setup.
- Não as use como source of truth para comandos do CLI da Multica ou procedimentos self-hosted.
- Para decisões técnicas, use os links oficiais acima.

### Método 4: Deploys Cloud Com Um Clique

| Plataforma | Link | Notas |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Oficial, forma mais rápida de começar |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Assistente de setup via web |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Pré-configurado e endurecido em segurança |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infraestrutura como código |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | Deploy Docker com um clique |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Template PaaS self-hosted |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Totalmente gerenciado em menos de 3 min |

### Produtos AI Agent Comparáveis

| # | Produto | Site | Tipo | Self-Host | Plataformas de Mensagem |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | agente autônomo com autoaprendizado | Sim | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk e mais |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | plataforma de trabalho em equipe para coding agents | Sim | workflows orientados por workspace e issue |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | agente autônomo + hub de mensageria | Sim | WhatsApp, Telegram, Slack, Discord, iMessage e mais |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | agente autônomo de tarefas | Sim | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | framework de orquestração LLM | Sim | Qualquer coisa via integrações personalizadas |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | automação de workflows + AI nodes | Sim | Slack, Telegram, Discord e 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | colaboração multiagente por papéis | Sim | API / integrações personalizadas |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | infraestrutura para agentes autônomos | Sim | Slack, Email, API |

## Regras De Manutenção

- Mantenha esta pasta prática e confiável.
- Priorize comandos corretos acima de claims amplos de marketing.
- Se nomes de arquivos upstream ou sintaxe CLI mudarem, atualize esta pasta imediatamente.
- Se um link ou detalhe de produto for incerto, marque-o como material de referência em vez de fato técnico.

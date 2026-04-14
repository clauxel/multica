# Multica Para Desarrolladores

**Idiomas:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | **Español** | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Notas prácticas, pensadas para desarrolladores, para entender Multica rápido y empezar con los comandos correctos.

Última verificación contra el repositorio oficial de Multica: 14 de abril de 2026.

## Qué Es Esta Carpeta

Esta carpeta es una guía curada para desarrolladores que están evaluando o adoptando Multica.

Se enfoca en:

- para qué es realmente buena Multica
- qué ruta de setup conviene elegir primero
- la sintaxis correcta del CLI para cloud y self-hosted
- el conjunto mínimo de documentos que un desarrollador normal necesita el primer día

Alcance:

- Esta carpeta contiene solo documentación.
- Los comandos aquí apuntan al repositorio upstream `multica-ai/multica` o al CLI `multica` ya instalado.
- Esta carpeta no contiene el código fuente del servidor, archivos Docker Compose ni binarios del CLI.

## Lee Esto Primero

| Archivo | Mejor Para |
|------|-------------|
| [docs/overview.md](docs/overview.md) | Entender qué es Multica, dónde encaja y cómo elegir entre cloud y self-host. |
| [docs/quick-start.md](docs/quick-start.md) | Ruta más rápida y segura hacia un runtime funcional y el primer issue asignado. |
| [docs/cli-reference.md](docs/cli-reference.md) | Sintaxis correcta del CLI, incluyendo setup self-hosted y comandos de issues. |
| [docs/self-hosting.md](docs/self-hosting.md) | Rutas self-hosted alineadas con lo oficial, valores por defecto y advertencias de producción. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Fallos del primer día, trampas de sintaxis antigua y pistas para depuración. |
| [docs/market-reference.md](docs/market-reference.md) | Las dos tablas comparativas obligatorias, conservadas solo como referencia. |

## Elige El Inicio Correcto

| Situación | Mejor Primer Paso |
|-----------|-------------------|
| Quieres evaluar el producto rápido | Empieza con Multica Cloud usando `multica setup` |
| Quieres control total de la infraestructura | Usa el flujo self-hosted en [docs/self-hosting.md](docs/self-hosting.md) |
| Estás en Windows y quieres probar CLI/runtime | Instala el CLI con PowerShell y luego ejecuta `multica setup` |
| Necesitas la ruta más corta del primer día | Usa [docs/quick-start.md](docs/quick-start.md) |

## Inicio Más Rápido

### Multica Cloud

Instala el CLI:

```bash
brew install multica-ai/tap/multica
```

Si Homebrew no está disponible:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

En Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Después configura, inicia sesión y arranca el daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Una instalación exitosa se ve así:

- tu máquina aparece en **Settings -> Runtimes** dentro de la app web,
- al menos un workspace es visible,
- al menos un agent CLI soportado es detectado localmente.

### Multica Self-Hosted

Ruta rápida oficial:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Usa este camino si quieres la ruta más corta hacia provisioning local con Docker y configuración local del CLI.

Si prefieres la ruta manual, usa [docs/self-hosting.md](docs/self-hosting.md).

## Checklist Del Primer Día

- Instala el CLI `multica`.
- Ejecuta `multica setup` para cloud o `multica setup self-host` para self-hosted.
- Confirma `multica daemon status`.
- Confirma que al menos un AI CLI soportado está disponible en `PATH`.
- Abre la app web y verifica tu máquina en **Settings -> Runtimes**.
- Crea un agent en **Settings -> Agents**.
- Crea y asigna un issue.

## Agent CLIs Soportados

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Enlaces Upstream Confiables

| Recurso | Enlace |
|----------|--------|
| Sitio oficial | [multica.ai](https://multica.ai) |
| Repositorio GitHub | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| README oficial | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Guía oficial de CLI y Daemon | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Guía oficial de Self-Hosting | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Apéndice De Referencia

Las dos tablas siguientes se conservan intencionalmente porque son obligatorias en este workspace.

Nota importante:

- Son material de referencia/marketing, no instrucciones de setup.
- No las uses como fuente de verdad para comandos del CLI de Multica o procedimientos self-hosted.
- Para decisiones técnicas, usa los enlaces oficiales de arriba.

### Método 4: Despliegues Cloud De Un Clic

| Plataforma | Enlace | Notas |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Oficial, la forma más rápida de empezar |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Asistente de setup vía web |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Endurecido y preconfigurado |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infraestructura como código |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | Despliegue Docker de un clic |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Plantilla PaaS self-hosted |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Gestionado en menos de 3 min |

### Productos Comparables De AI Agent

| # | Producto | Sitio web | Tipo | Self-Host | Plataformas de mensajería |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | Agente autónomo autoaprendente | Sí | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk y más |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | Plataforma de trabajo en equipo para coding agents | Sí | Flujos basados en workspace e issues |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | Agente autónomo + hub de mensajería | Sí | WhatsApp, Telegram, Slack, Discord, iMessage y más |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | Agente autónomo de tareas | Sí | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | Framework de orquestación LLM | Sí | Cualquiera mediante integraciones personalizadas |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | Automatización de workflows + nodos de IA | Sí | Slack, Telegram, Discord y más de 400 apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | Colaboración multiagente basada en roles | Sí | API / integraciones personalizadas |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | Infraestructura de agentes autónomos | Sí | Slack, Email, API |

## Reglas De Mantenimiento

- Mantén esta carpeta práctica y confiable.
- Prioriza comandos correctos por encima de claims de marketing.
- Si cambian los nombres de archivos upstream o la sintaxis del CLI, actualiza esta carpeta de inmediato.
- Si un enlace o detalle de producto es incierto, márcalo como material de referencia en vez de presentarlo como hecho técnico.

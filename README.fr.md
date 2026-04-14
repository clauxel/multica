# Multica Pour Les Développeurs

**Langues :** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | **Français** | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Notes pratiques orientées développeur pour comprendre Multica rapidement et démarrer avec les bonnes commandes.

Dernière vérification par rapport au dépôt officiel Multica : 14 avril 2026.

## Ce Que Contient Ce Dossier

Ce dossier est un guide organisé pour les développeurs qui évaluent ou adoptent Multica.

Il se concentre sur :

- ce que Multica fait vraiment bien
- quel chemin de setup choisir en premier
- la syntaxe CLI correcte pour les usages cloud et self-hosted
- le plus petit ensemble de docs réellement utile à un développeur normal le premier jour

Limites :

- ce dossier contient uniquement de la documentation
- les commandes ici ciblent le dépôt upstream `multica-ai/multica` ou le CLI `multica` installé
- ce dossier ne contient ni code serveur, ni fichiers Docker Compose, ni binaires CLI

## À Lire En Premier

| Fichier | Idéal Pour |
|------|-------------|
| [docs/overview.md](docs/overview.md) | Comprendre ce qu'est Multica, où il s'intègre et comment choisir cloud vs self-host. |
| [docs/quick-start.md](docs/quick-start.md) | Le chemin le plus rapide et le plus sûr vers un runtime fonctionnel et un premier issue assigné. |
| [docs/cli-reference.md](docs/cli-reference.md) | La syntaxe CLI correcte, y compris le setup self-hosted et les commandes d'issues. |
| [docs/self-hosting.md](docs/self-hosting.md) | Les chemins self-hosted alignés sur l'officiel, les valeurs par défaut et les précautions de production. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Les échecs du premier jour, les pièges de syntaxe obsolète et les pistes de debug. |
| [docs/market-reference.md](docs/market-reference.md) | Les deux tableaux comparatifs obligatoires, conservés comme simple référence. |

## Choisir Le Bon Point De Départ

| Situation | Meilleure Première Étape |
|-----------|--------------------------|
| Vous voulez évaluer vite l'adéquation du produit | Commencez par Multica Cloud avec `multica setup` |
| Vous voulez un contrôle total de l'infrastructure | Utilisez le flux self-host dans [docs/self-hosting.md](docs/self-hosting.md) |
| Vous êtes sur Windows et voulez surtout tester le CLI/runtime | Installez le CLI via PowerShell puis lancez `multica setup` |
| Vous voulez le chemin le plus court le premier jour | Utilisez [docs/quick-start.md](docs/quick-start.md) |

## Le Démarrage Le Plus Rapide

### Multica Cloud

Installez le CLI :

```bash
brew install multica-ai/tap/multica
```

Si Homebrew n'est pas disponible :

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

Sous Windows PowerShell :

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Ensuite configurez, connectez-vous et démarrez le daemon :

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Le succès ressemble à ceci :

- votre machine apparaît dans **Settings -> Runtimes** dans l'app web
- au moins un workspace est visible
- au moins un agent CLI pris en charge est détecté localement

### Multica Self-Hosted

Chemin rapide officiel :

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Utilisez ce chemin si vous voulez la route la plus courte vers un provisioning local basé sur Docker avec configuration locale du CLI.

Si vous préférez la voie manuelle, utilisez [docs/self-hosting.md](docs/self-hosting.md).

## Checklist Du Premier Jour

- Installez le CLI `multica`.
- Lancez `multica setup` pour le cloud ou `multica setup self-host` pour le self-hosted.
- Vérifiez `multica daemon status`.
- Vérifiez qu'au moins un AI CLI pris en charge est disponible dans `PATH`.
- Ouvrez l'app web et vérifiez votre machine dans **Settings -> Runtimes**.
- Créez un agent dans **Settings -> Agents**.
- Créez et assignez un issue.

## Agent CLIs Pris En Charge

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Liens Upstream Fiables

| Ressource | Lien |
|----------|------|
| Site officiel | [multica.ai](https://multica.ai) |
| Dépôt GitHub | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| README officiel | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Guide officiel CLI et Daemon | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Guide officiel Self-Hosting | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Annexe De Référence

Les deux tableaux ci-dessous sont volontairement conservés car ils sont requis dans cet espace de travail.

Note importante :

- ce sont des éléments de référence/marketing, pas des instructions de setup
- ne les utilisez pas comme source de vérité pour les commandes CLI Multica ou les procédures self-hosted
- pour les décisions techniques, utilisez les liens officiels ci-dessus

### Méthode 4 : Déploiements Cloud En Un Clic

| Plateforme | Lien | Notes |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Officiel, le moyen le plus rapide de commencer |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Assistant de setup web |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Préconfiguré et durci côté sécurité |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | Déploiement Docker en un clic |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Template PaaS self-hosted |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Entièrement géré en moins de 3 min |

### Produits AI Agent Comparables

| # | Produit | Site web | Type | Self-Host | Plateformes de messagerie |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | agent autonome auto-apprenant | Oui | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk et plus |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | plateforme de travail d'équipe pour coding agents | Oui | workflows pilotés par workspace et issue |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | agent autonome + hub de messagerie | Oui | WhatsApp, Telegram, Slack, Discord, iMessage et plus |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | agent autonome de tâches | Oui | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | framework d'orchestration LLM | Oui | n'importe quoi via intégrations personnalisées |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | automatisation de workflows + nœuds IA | Oui | Slack, Telegram, Discord et plus de 400 apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | collaboration multi-agent basée sur les rôles | Oui | API / intégrations personnalisées |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | infrastructure d'agents autonomes | Oui | Slack, Email, API |

## Règles De Maintenance

- Gardez ce dossier pratique et fiable.
- Privilégiez les commandes correctes aux affirmations marketing.
- Si les noms de fichiers upstream ou la syntaxe CLI changent, mettez ce dossier à jour immédiatement.
- Si un lien ou un détail produit est incertain, marquez-le comme référence plutôt que comme fait technique.

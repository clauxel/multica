# Multica Untuk Developer

**Bahasa:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | [العربية](README.ar.md) | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | **Bahasa Indonesia**

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> Catatan praktis yang berfokus pada developer untuk memahami Multica dengan cepat dan memulai dengan perintah yang benar.

Terakhir diverifikasi terhadap repositori resmi Multica pada 14 April 2026.

## Apa Isi Folder Ini

Folder ini adalah panduan terkurasi untuk developer yang sedang mengevaluasi atau mengadopsi Multica.

Fokusnya adalah:

- apa yang paling cocok dikerjakan oleh Multica
- jalur setup mana yang sebaiknya dipilih lebih dulu
- sintaks CLI yang benar untuk penggunaan cloud dan self-hosted
- himpunan docs minimum yang benar-benar dibutuhkan developer biasa di hari pertama

Batas ruang lingkup:

- Folder ini hanya berisi dokumentasi.
- Perintah di sini menargetkan repo upstream `multica-ai/multica` atau CLI `multica` yang sudah terpasang.
- Folder ini tidak berisi source code server, file Docker Compose, maupun binary CLI.

## Baca Ini Dulu

| File | Paling Cocok Untuk |
|------|--------------------|
| [docs/overview.md](docs/overview.md) | Memahami apa itu Multica, di mana ia cocok, dan bagaimana memilih cloud vs self-host. |
| [docs/quick-start.md](docs/quick-start.md) | Jalur tercepat dan paling aman menuju runtime yang berfungsi dan issue pertama yang ditugaskan. |
| [docs/cli-reference.md](docs/cli-reference.md) | Sintaks CLI yang benar, termasuk setup self-hosted dan perintah issue. |
| [docs/self-hosting.md](docs/self-hosting.md) | Jalur self-hosting yang selaras dengan official, default, dan catatan produksi. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | Kegagalan hari pertama, jebakan sintaks lama, dan petunjuk debugging. |
| [docs/market-reference.md](docs/market-reference.md) | Dua tabel perbandingan yang wajib dipertahankan, hanya sebagai referensi. |

## Pilih Awal Yang Tepat

| Situasi | Langkah Pertama Terbaik |
|-----------|-------------------------|
| Anda ingin mengevaluasi product fit dengan cepat | Mulai dengan Multica Cloud lewat `multica setup` |
| Anda ingin kontrol penuh atas infrastruktur | Gunakan alur self-host di [docs/self-hosting.md](docs/self-hosting.md) |
| Anda berada di Windows dan ingin menguji CLI/runtime | Instal CLI lewat PowerShell lalu jalankan `multica setup` |
| Anda butuh jalur terpendek pada hari pertama | Gunakan [docs/quick-start.md](docs/quick-start.md) |

## Cara Memulai Paling Cepat

### Multica Cloud

Instal CLI:

```bash
brew install multica-ai/tap/multica
```

Jika Homebrew tidak tersedia:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

Di Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

Lalu lakukan setup, login, dan mulai daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

Tanda sukses:

- mesin Anda muncul di **Settings -> Runtimes** pada aplikasi web,
- setidaknya satu workspace terlihat,
- setidaknya satu agent CLI yang didukung terdeteksi secara lokal.

### Multica Self-Hosted

Jalur cepat resmi:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

Gunakan ini jika Anda ingin jalur terpendek menuju provisioning lokal berbasis Docker plus konfigurasi CLI lokal.

Jika Anda lebih suka rute manual, gunakan [docs/self-hosting.md](docs/self-hosting.md).

## Checklist Hari Pertama

- Instal CLI `multica`.
- Jalankan `multica setup` untuk cloud atau `multica setup self-host` untuk self-hosted.
- Pastikan `multica daemon status`.
- Pastikan minimal satu AI CLI yang didukung tersedia di `PATH`.
- Buka aplikasi web dan verifikasi mesin Anda di **Settings -> Runtimes**.
- Buat satu agent di **Settings -> Agents**.
- Buat dan assign satu issue.

## Agent CLI Yang Didukung

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## Tautan Upstream Yang Tepercaya

| Resource | Link |
|----------|------|
| Situs resmi | [multica.ai](https://multica.ai) |
| Repositori GitHub | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| README resmi | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| Panduan resmi CLI dan Daemon | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| Panduan resmi Self-Hosting | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| Releases | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## Lampiran Referensi

Dua tabel di bawah ini sengaja dipertahankan karena diwajibkan di workspace ini.

Catatan penting:

- Ini adalah materi referensi/marketing, bukan instruksi setup.
- Jangan gunakan ini sebagai source of truth untuk perintah CLI Multica atau prosedur self-hosted.
- Untuk keputusan teknis, gunakan tautan resmi di atas.

### Metode 4: One-Click Cloud Deploys

| Platform | Link | Notes |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | Resmi, cara tercepat untuk memulai |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | Wizard setup berbasis web |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | Sudah diperkeras dan dikonfigurasi |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | Deploy Docker satu klik |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | Template PaaS self-hosted |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | Fully managed dalam kurang dari 3 menit |

### Produk AI Agent Yang Sebanding

| # | Product | Website | Type | Self-Host | Messaging Platforms |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | self-learning autonomous agent | Yes | Telegram, Discord, Slack, WhatsApp, Signal, WeCom, Feishu, DingTalk, and more |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | coding-agent teamwork platform | Yes | workflow berbasis workspace dan issue |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | autonomous agent + messaging hub | Yes | WhatsApp, Telegram, Slack, Discord, iMessage, and more |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | autonomous task agent | Yes | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | LLM orchestration framework | Yes | Apa pun melalui integrasi kustom |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | workflow automation + AI nodes | Yes | Slack, Telegram, Discord, and 400+ apps |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | multi-agent role collaboration | Yes | API / custom integrations |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | autonomous agent infrastructure | Yes | Slack, Email, API |

## Aturan Pemeliharaan

- Jaga folder ini tetap praktis dan dapat dipercaya.
- Dahulukan perintah yang benar daripada klaim marketing yang luas.
- Jika nama file upstream atau sintaks CLI berubah, perbarui folder ini segera.
- Jika sebuah tautan atau detail produk meragukan, tandai sebagai materi referensi, bukan fakta teknis.

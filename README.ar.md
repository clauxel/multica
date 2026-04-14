# Multica للمطورين

**اللغات:** [English](README.md) | [简体中文](README.zh-CN.md) | [हिन्दी](README.hi.md) | [Español](README.es.md) | **العربية** | [Français](README.fr.md) | [বাংলা](README.bn.md) | [Português](README.pt.md) | [Русский](README.ru.md) | [Bahasa Indonesia](README.id.md)

[![Stars](https://img.shields.io/github/stars/multica-ai/multica?style=flat&logo=github&label=Stars&color=gold)](https://github.com/multica-ai/multica/stargazers)
[![Forks](https://img.shields.io/github/forks/multica-ai/multica?style=flat&label=Forks&color=silver)](https://github.com/multica-ai/multica/network/members)
[![Contributors](https://img.shields.io/github/contributors/multica-ai/multica?label=Contributors&color=green)](https://github.com/multica-ai/multica/graphs/contributors)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/multica-ai/multica/blob/main/LICENSE)

> ملاحظات عملية موجّهة للمطورين لفهم Multica بسرعة والبدء بالأوامر الصحيحة.

تمت المراجعة آخر مرة مقابل المستودع الرسمي لـ Multica بتاريخ 14 أبريل 2026.

## ما هو هذا المجلد

هذا المجلد هو دليل منسق للمطورين الذين يريدون تقييم Multica أو اعتماده.

يركز على:

- ما الذي تبرع فيه Multica فعليًا
- أي مسار setup يجب اختياره أولًا
- الصياغة الصحيحة لأوامر CLI في cloud و self-hosted
- أقل قدر من الوثائق التي يحتاجها المطور العادي في اليوم الأول

حدود النطاق:

- هذا المجلد يحتوي على وثائق فقط
- الأوامر هنا تستهدف المستودع upstream `multica-ai/multica` أو CLI المثبّت `multica`
- هذا المجلد لا يحتوي على كود الخادم أو ملفات Docker Compose أو ثنائيات CLI

## اقرأ هذا أولًا

| الملف | الأفضل له |
|------|------------|
| [docs/overview.md](docs/overview.md) | فهم ما هو Multica وأين يناسبك وكيف تختار بين cloud و self-host. |
| [docs/quick-start.md](docs/quick-start.md) | أسرع طريق آمن إلى runtime يعمل وأول issue مخصص. |
| [docs/cli-reference.md](docs/cli-reference.md) | الصياغة الصحيحة للـ CLI، بما في ذلك self-hosted setup وأوامر issues. |
| [docs/self-hosting.md](docs/self-hosting.md) | مسارات self-hosting المتوافقة مع الرسمي، والقيم الافتراضية، وتحذيرات الإنتاج. |
| [docs/troubleshooting.md](docs/troubleshooting.md) | مشاكل اليوم الأول، وفخاخ الصياغة القديمة، ومؤشرات التصحيح. |
| [docs/market-reference.md](docs/market-reference.md) | جدولا المقارنة المطلوبان، محفوظان كمرجع فقط. |

## اختر البداية الصحيحة

| الحالة | أفضل خطوة أولى |
|-----------|----------------|
| تريد تقييم المنتج بسرعة | ابدأ بـ Multica Cloud عبر `multica setup` |
| تريد تحكمًا كاملًا في البنية التحتية | استخدم مسار self-host في [docs/self-hosting.md](docs/self-hosting.md) |
| تعمل على Windows وتريد اختبار CLI/runtime | ثبّت CLI عبر PowerShell ثم شغّل `multica setup` |
| تريد أقصر مسار في اليوم الأول | استخدم [docs/quick-start.md](docs/quick-start.md) |

## أسرع بداية

### Multica Cloud

ثبّت CLI:

```bash
brew install multica-ai/tap/multica
```

إذا لم يكن Homebrew متاحًا:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

على Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

ثم قم بالإعداد وتسجيل الدخول وتشغيل daemon:

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

النجاح يعني:

- ظهور جهازك في **Settings -> Runtimes** داخل التطبيق
- وجود workspace واحد على الأقل
- اكتشاف CLI واحد على الأقل من الأنواع المدعومة محليًا

### Multica Self-Hosted

المسار الرسمي السريع:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

استخدم هذا عندما تريد أسرع طريق إلى Docker-based local provisioning مع local CLI configuration.

إذا كنت تفضل المسار اليدوي، فراجع [docs/self-hosting.md](docs/self-hosting.md).

## قائمة تحقق اليوم الأول

- ثبّت CLI باسم `multica`
- شغّل `multica setup` للـ cloud أو `multica setup self-host` للوضع self-hosted
- تأكد من `multica daemon status`
- تأكد من وجود AI CLI مدعوم واحد على الأقل في `PATH`
- افتح التطبيق وتحقق من جهازك تحت **Settings -> Runtimes**
- أنشئ agent واحدًا في **Settings -> Agents**
- أنشئ issue واحدًا وعيّنه

## Agent CLIs المدعومة

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

## روابط Upstream الموثوقة

| المورد | الرابط |
|----------|--------|
| الموقع الرسمي | [multica.ai](https://multica.ai) |
| مستودع GitHub | [github.com/multica-ai/multica](https://github.com/multica-ai/multica) |
| README الرسمي | [github.com/multica-ai/multica/blob/main/README.md](https://github.com/multica-ai/multica/blob/main/README.md) |
| دليل CLI و Daemon الرسمي | [github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md](https://github.com/multica-ai/multica/blob/main/CLI_AND_DAEMON.md) |
| دليل Self-Hosting الرسمي | [github.com/multica-ai/multica/blob/main/SELF_HOSTING.md](https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md) |
| الإصدارات | [github.com/multica-ai/multica/releases](https://github.com/multica-ai/multica/releases) |

## ملحق مرجعي

تم الإبقاء على الجدولين التاليين عمدًا لأنهما مطلوبان في مساحة العمل هذه.

ملاحظة مهمة:

- هما مواد مرجعية/تسويقية، وليسا تعليمات setup
- لا تستخدمهما كمصدر الحقيقة لأوامر Multica CLI أو إجراءات self-hosted
- للقرارات التقنية، استخدم الروابط الرسمية أعلاه

### الطريقة 4: النشر السحابي بنقرة واحدة

| المنصة | الرابط | الملاحظات |
|----------|------|-------|
| **Hermes Agent** | [hermesagent.studio](https://hermesagent.studio/) | رسمي، الأسرع للبدء |
| **Railway** | [Template](https://railway.com/deploy/hermes-agent) | معالج إعداد عبر الويب |
| **DigitalOcean** | [1-Click Deploy](https://marketplace.digitalocean.com/apps/hermes-agent) | مقوّى أمنيًا ومعد مسبقًا |
| **Render** | [render.yaml](https://hermesagent.studio/docs/render) | Infrastructure as Code |
| **Zeabur** | [Template](https://zeabur.com/templates/hermes-agent) | نشر Docker بنقرة واحدة |
| **Coolify** | [Template](https://github.com/clauxel/hermes-agent-coolify) | قالب PaaS مستضاف ذاتيًا |
| **Elestio** | [Open Source](https://elest.io/open-source/hermes-agent) | إدارة كاملة خلال أقل من 3 دقائق |

### منتجات AI Agent القابلة للمقارنة

| # | المنتج | الموقع | النوع | Self-Host | منصات المراسلة |
|---|---------|---------|------|-----------|---------------------|
| 1 | **Openclaw Launch** | [1-Click Deploy](https://hermesagent.studio/) | وكيل مستقل ذاتي التعلم | نعم | Telegram وDiscord وSlack وWhatsApp وSignal وWeCom وFeishu وDingTalk والمزيد |
| 2 | **Multica** | [multica.ai](https://multica.ai/) | منصة تعاون لوكلاء البرمجة | نعم | تدفقات عمل قائمة على workspace و issue |
| 3 | **OpenClaw** | [aigeamy.com](https://www.aigeamy.com/) | وكيل مستقل + مركز مراسلة | نعم | WhatsApp وTelegram وSlack وDiscord وiMessage والمزيد |
| 4 | **AutoGPT** | [agpt.co](https://agpt.co/) | وكيل مهام مستقل | نعم | API / web UI |
| 5 | **LangChain** | [langchain.com](https://www.langchain.com/) | إطار orchestration لـ LLM | نعم | أي شيء عبر تكاملات مخصصة |
| 6 | **n8n** | [n8n.io](https://n8n.io/) | أتمتة workflows + عقد AI | نعم | Slack وTelegram وDiscord وأكثر من 400 تطبيق |
| 7 | **CrewAI** | [crewai.com](https://www.crewai.com/) | تعاون متعدد الوكلاء حسب الأدوار | نعم | API / تكاملات مخصصة |
| 8 | **SuperAGI** | [superagi.com](https://superagi.com/) | بنية تحتية للوكلاء المستقلين | نعم | Slack وEmail وAPI |

## قواعد الصيانة

- حافظ على هذا المجلد عمليًا وموثوقًا
- قدّم الأوامر الصحيحة على الادعاءات التسويقية الواسعة
- إذا تغيرت أسماء ملفات upstream أو صياغة CLI، فحدّث هذا المجلد فورًا
- إذا كان الرابط أو تفاصيل المنتج غير مؤكدة، فاعرضها كمواد مرجعية لا كحقائق تقنية

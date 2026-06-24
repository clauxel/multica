# Multica Launch 技术架构

> 本文档描述当前实际部署的 Multica Launch 系统，涵盖用户管理、订单管理与 Multica 实例管控的完整对接关系。

---

## 整体架构概述

```
用户浏览器
    │
    ▼
205 服务器（Launch 管理网站）
├── 前端：Vite + React SPA（dist/）
├── 后端：Node.js server.mjs（port 5175）
│   ├── 用户/账号管理（auth-routes）
│   ├── 订单管理（order-routes）
│   ├── 管理员操作（admin-routes）
│   ├── 支付回调（webhook-routes）
│   └── 模型代理（model-proxy-routes）→ 转发至 116
│
├── 数据库：PostgreSQL（205 本机 127.0.0.1:5432）
│   └── 库：multica_launch_prod
│       职责：用户、session、订单、支付、deployment、analytics
│
└── SSH 部署链路 → 116 服务器
    └── 触发实例部署 / 停止 / 卸载

116 服务器（Multica 运行时节点）
├── Multica 实例（每用户独立 systemd service）
│   └── 路径：/data/multica/instances/<instance-name>/
├── Instance Router（multica-instance-router-prod.service）
│   └── 端口：19280（prod） / 19281（dev）
│   └── routes 目录：/data/multica/router/routes-prod
└── 数据库：PostgreSQL（116 本机 127.0.0.1:5432）
    └── 库：multica_prod
        职责：实例本地运行状态
```

---

## 方向一：管理网站 → multica 实例控制

### 1.1 订单创建与支付驱动部署

```
用户 POST /api/launch-orders
  → 创建 orders 记录（status: pending / awaiting_payment）
  → 返回 consolePath（guest_token 凭证路径）

支付完成 → 两条路径：
  ① Polar: POST /api/webhooks/polar → verifyPolarWebhookSignature → queuePaidOrder
  ② PayPal: POST /api/webhooks/paypal → handlePayPalWebhook → queuePaidOrder
  ③ 前端轮询重定向: POST /api/orders/:id/polar-confirm → 验签 → queuePaidOrder

queuePaidOrder
  → 标记 payment_status = 'paid'
  → canTriggerDeployment 检查（remaining_deployments > 0）
  → createDeploymentForOrder（trigger 取决于 `MULTICA_DEPLOYMENT_MODE`，manual/automatic）
  → automatic 模式：runBackgroundTask → pumpDeploymentQueue → processDeployment
  → manual 模式：保留 queued 状态，等待人工触发交付
  → SSH 到 116，解压模板包，写入 .env，启动 systemd service
  → 回写 console_url、public_endpoint 到 deployments 表
```

### 1.2 实例生命周期控制 API

| 端点 | 权限 | 动作 |
|------|------|------|
| `POST /api/orders/:id/deployments` | 已付款用户/admin | 手动触发重部署（最大部署次数内） |
| `POST /api/orders/:id/multica-stop` | 订单持有人/admin | SSH 停止 systemd service |
| `POST /api/orders/:id/multica-uninstall` | 订单持有人/admin | SSH 停止 + 删除实例目录 + 清除 DB 记录 |
| `POST /api/orders/:id/multica-delete` | 订单持有人/admin | 同 uninstall（用户端入口） |
| `POST /api/admin/orders/:id/multica-delete` | **admin 专属** | 可删除任意用户的实例（已修复原有 ownership 限制 bug） |
| `POST /api/orders/:id/multica-upgrade` | 订单持有人/admin | 升级实例到指定 template 版本 |
| `POST /api/orders/:id/multica-console` | 订单持有人/admin | 获取实例 console URL（需实例 running） |

### 1.3 访问控制规则

```
assertOrderAccess(context, order):
  - guest context：要求 order.guest_token === request guest_token
  - user context：
      - admin role → 所有订单均可访问
      - 普通用户 → order.user_id === user.id 或 guest_token 匹配

canAdminDeleteMultica（前端显示控制）:
  - 要求 viewer.role === 'admin' && 实例存在
  - 【已修复】不再要求 order.user_id === admin.user.id
```

---

## 方向二：模型代理（实例 → 管理网站）

实例不直接调用外部 LLM API，而是通过管理网站的代理统一出口：

```
Multica 实例（116）
  → POST /api/internal/model-proxy/<instance-name>/v1/<path>
  → 管理网站（205:5175）验证内部 token (MULTICA_MODEL_PROXY_INTERNAL_SECRET)
  → 转发至上游 LLM API（MULTICA_MODEL_PROXY_BASE_URL）
  → 返回结果给实例
```

**鉴权**：实例部署时，deploy runtime 注入 `MULTICA_MODEL_PROXY_TOKEN`，由 `buildModelProxyInternalToken(instanceName)` 生成（含 instanceName 的 token）。管理网站只接受来自 `MULTICA_MODEL_PROXY_ALLOWED_REMOTE_ADDRESSES` 白名单地址的请求。

---

## 方向三：SSO / console 直通

```
Admin 登录管理网站（session cookie）
  → GET /api/console-data
      返回：orders（所有）+ claws（所有实例）+ users（admin only）
  → POST /api/orders/:id/multica-console
      返回：{ url }（12 小时有效的 console session URL）
  → 前端嵌入 iframe 或跳转至 console URL
```

Console session 鉴权独立（`mca_console_session` cookie），TTL 12 小时，与主账号 session 解耦。

---

## 数据库职责分工

### 205（Launch 真相源）
包含表：`users`、`sessions`、`orders`、`deployments`、`agent_instances`、`analytics_*`、`polar_products`

### 116（实例本地运行时）
包含表：实例自身运行状态（multica 框架自带），不承载 Launch 平台订单/用户逻辑。

### 环境变量约定
- `MULTICA_POSTGRES_*`：Launch 服务连接的自身数据库（205）
- `MULTICA_INSTANCE_POSTGRES_*`：部署实例时下发给实例的数据库配置（116）
- 实例运行时消费 `MULTICA_POSTGRES_*` / `DATABASE_URL`，但部署阶段优先从 `MULTICA_INSTANCE_POSTGRES_*` 生成

---

## 当前已知缺口

| 缺口 | 影响 | 状态 |
|------|------|------|
| 无实例订阅到期回调 | 实例到期后不会自动感知，只能 admin 手动 stop | ❌ 未实现 |
| 无定时自动停止过期实例 | management 侧没有 cron 扫描过期付费周期 | ❌ 未实现 |
| `canAdminDeleteMultica` 曾限制只能删自己的实例 | admin 无法从前端删除他人实例 | ✅ 已修复 |
| `POST /api/admin/orders/:id/multica-delete` 曾同样限制 | admin 调用会返回 403 | ✅ 已修复 |

---

## 关键配置文件

| 文件 | 用途 |
|------|------|
| `multica.config.json` | 部署配置：provider（ssh）、targetServer、archivePath、端口范围 |
| `.env.development` | dev 环境变量（数据库、密钥、router URL） |
| `.env.production` | prod 环境变量（同上，指向 116 prod） |
| `server.mjs` | 单体 Node.js 后端入口，包含所有业务逻辑 |
| `server-lib/deployment-runtime.mjs` | SSH 部署核心：模板解压、.env 生成、systemd 管理 |
| `shared/catalog.mjs` | 套餐/模型/渠道目录，前后端共用 |

---

## 待评估方案

### A. 订阅到期自动停止实例

**背景**：当前订单只有 `payment_status = 'paid'` 状态，无订阅周期字段。到期实例只能 admin 手动 stop/uninstall。

**方案 A1：管理网站侧 cron 轮询**
- 在 `server.mjs` 启动时加一个定时器（类似现有 `pumpDeploymentQueue` 每 30s 触发的模式）
- 定时扫描所有 `payment_status = 'paid'` 且订阅已到期的订单
- 自动调用 `stopMulticaInstance`
- 优点：无需改实例代码，逻辑集中在管理网站
- 缺点：需要在 orders 表补 `subscription_expires_at` 字段；Polar/PayPal 续订 webhook 需更新该字段

**方案 A2：实例 → 管理网站回调验证**
- 部署时在实例 `.env` 注入 `MULTICA_VERIFY_URL`（管理网站内部端点）和验证 token
- 实例启动后定期 GET 该端点查询自身订阅状态
- 管理网站返回 `{ active: true/false, expiresAt: "..." }`
- 实例收到 `active: false` 后主动退出
- 优点：去中心化，实例自我感知
- 缺点：需改实例代码（multica 运行时层）；实例网络断开时无法验证，需设 grace period

**方案 A3：两者结合（推荐）**
- 管理网站：维护 `subscription_expires_at`，定时 cron 扫描，超期 stop
- 实例端：部署时注入 verify URL，作为二次保障（不强依赖）
- 实现顺序：先做 A1（纯服务端，改动小），A2 作为后续增强

---

### B. 订阅续费与 Polar 订阅管理

**背景**：当前 webhook 只处理 `checkout.completed`，未处理订阅续费/取消事件。

**待评估**：
- Polar 是否提供 `subscription.renewed` / `subscription.cancelled` webhook 事件
- 若有：需在 `webhook-routes.mjs` 增加处理逻辑，更新 `orders.subscription_expires_at`
- 若无：需依赖方案 A1（定期拉取 Polar 订阅状态 API）

---

### C. 205 公网入口策略

**背景**：目前 `www.aigeamy.com` 由 OpenClaw Launch 占用（nginx → 5175），Multica Launch 还没有独立公网入口。

**方案 C1：Shadow 部署（当前短期方案）**
- 部署到 205 上的不同端口（如 5176），独立 systemd service
- 仅做本机验证，不动现有 nginx
- 适用于：在不影响 OpenClaw 的前提下完成 Multica prod 部署验证

**方案 C2：独立子域**
- 给 Multica 申请独立域名或子域（如 `multica.aigeamy.com`）
- nginx 新增 server block，指向 Multica Launch 端口
- 适用于：OpenClaw 和 Multica 并行运营

**方案 C3：域名切换**
- 将 `www.aigeamy.com` 从 OpenClaw Launch 切换到 Multica Launch
- 需评估 OpenClaw 是否还有活跃用户/订单

---

### D. 模板包刷新策略

**背景**：所有实例从同一模板 `multica-template.tar.gz` 解压部署，更新模板不影响已运行实例。

**待评估**：
- 是否建立版本化模板（如 `multica-template-v1.0.0.tar.gz`），`multica.config.json` 中通过 `archivePath` 引用
- 是否提供 `npm run multica:package` 自动打包 + 上传到 116 的 CI 流程（现有 `package-remote-multica-instance.mjs` 已有基础能力）
- 多版本并存时，`POST /api/orders/:id/multica-upgrade` 按版本升级流程是否需要对应的多份模板
| `internal/events/` | 内部事件总线，handler 与 service 解耦通信 |
| `internal/logger/` | 结构化日志 via slog，`LOG_LEVEL` 控制级别 |
| `pkg/db/queries/` | SQL 查询（sqlc 生成 Go 代码到 `pkg/db/generated/`） |
| `migrations/` | 数据库迁移文件 |

---

## 数据流

```
Browser → ApiClient(shared/api) → REST API → sqlc queries → PostgreSQL
Browser ← WSClient(shared/api) ← WebSocket ← Hub.Broadcast() ← Handlers/TaskService
```

---

## 包边界规则（硬性约束）

| 包 | 限制 |
|----|------|
| `packages/core/` | 零 react-dom、零 localStorage（用 StorageAdapter）、零 process.env、零 UI 库 |
| `packages/ui/` | 零 `@multica/core` 导入（纯 UI，无业务逻辑） |
| `packages/views/` | 零 `next/*`、零 `react-router-dom`、零 store |
| `apps/web/platform/` | 唯一允许使用 Next.js API 的地方 |

---

## 开发命令

```bash
make dev              # 一键启动（自动创建 env、安装依赖、初始化 DB、启动全部服务）
make setup            # 首次：创建 DB、迁移
make start            # 启动后端 + 前端
make stop             # 停止当前 checkout 的进程
make db-down          # 停止共享 PostgreSQL 容器

pnpm dev:web          # Next.js 开发服务器（端口 3000）
pnpm dev:desktop      # Electron 开发（HMR）
pnpm build            # 构建所有前端
pnpm typecheck        # TypeScript 检查
pnpm lint             # ESLint
pnpm test             # TS 单元测试（Vitest）

make server           # 仅运行 Go server（端口 8080）
make daemon           # 运行本地 daemon
make build            # 构建 server + CLI 二进制到 server/bin/
make test             # Go 测试
make sqlc             # 编辑 SQL 后重新生成 sqlc 代码
make migrate-up       # 运行数据库迁移
make migrate-down     # 回滚迁移

make check            # 全量检查：typecheck + TS 测试 + Go 测试 + E2E
```

---

## Commit 规范

```
feat(web): ...
fix(cli): ...
refactor(daemon): ...
test(cli): ...
docs: ...
chore(scope): ...
```

使用按逻辑意图分组的原子 commit。PR 应包含简短描述、关联 Issue/PR 编号、UI 截图，以及迁移/环境变量/CLI 变更说明。

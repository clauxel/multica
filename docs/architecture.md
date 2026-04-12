# 技术架构（贡献者参考）

> 来源：CLAUDE.md / AGENTS.md

---

## 项目结构（Monorepo）

```
server/          Go 后端（Chi router, sqlc, gorilla/websocket）
apps/web/        Next.js 16 前端（App Router）
apps/desktop/    Electron 桌面应用（electron-vite）
packages/core/   无头业务逻辑（零 react-dom，全平台复用）
packages/ui/     原子 UI 组件（零业务逻辑）
packages/views/  共享业务页面/组件（零 next/* 和 react-router 导入）
packages/tsconfig/ 共享 TypeScript 配置
e2e/             Playwright 端到端测试
```

---

## 前端架构（apps/web/）

功能模块化架构，四层结构：

```
apps/web/
├── app/          路由层（薄 shell，从 features/ 导入）
├── features/     业务逻辑，按域组织
├── shared/       跨 feature 工具（api client, types, logger）
└── test/         共享测试工具
```

### Features 模块

| Feature | 用途 | 主要导出 |
|---------|------|----------|
| `features/auth/` | 认证状态 | `useAuthStore`, `AuthInitializer` |
| `features/workspace/` | 工作区、成员、Agent | `useWorkspaceStore`, `useActorName` |
| `features/issues/` | Issue 状态、组件、配置 | `useIssueStore`, icons, pickers |
| `features/inbox/` | 收件箱通知 | `useInboxStore` |
| `features/realtime/` | WebSocket 连接 + 同步 | `WSProvider`, `useWSEvent` |
| `features/modals/` | 弹窗注册与状态 | Modal store and components |
| `features/skills/` | 技能管理 | Skill components |

### 状态管理规则

- **TanStack Query** — 所有服务器状态（Issue、用户、工作区、收件箱）。WS 事件通过 invalidation 保持新鲜。
- **Zustand** — 所有客户端状态（UI 选择、过滤、草稿、弹窗状态）。Store 在 `packages/core/`。
- **React Context** — 仅用于跨平台基础设施（`WorkspaceIdProvider`, `NavigationProvider`）。

**硬性规则：**
- 永不把服务器数据复制到 Zustand（两个真相来源必然漂移）
- 工作区范围查询必须以 `wsId` 为键
- Mutation 默认乐观更新
- WS 事件通过 invalidate 查询更新——永不直接写入 store

---

## 后端结构（server/）

| 目录 | 说明 |
|------|------|
| `cmd/` | 入口：`server`（HTTP API）、`multica`（CLI）、`migrate` |
| `internal/handler/` | 每个域一个文件（issue, comment, agent, auth, daemon 等） |
| `internal/realtime/` | Hub 管理 WebSocket 客户端，广播事件 |
| `internal/auth/` | JWT (HS256)，中间件设置 `X-User-ID` 和 `X-User-Email` 头 |
| `internal/service/task.go` | 任务生命周期：排队 → 认领 → 执行 → 完成/失败 |
| `pkg/agent/` | 统一 `Backend` 接口，执行 Claude Code 或 Codex |
| `internal/daemon/` | 本地 Agent 运行时，自动检测 CLI，轮询任务，按 provider 路由 |
| `internal/cli/` | CLI 共享工具：API client、配置管理、输出格式化 |
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

# 自部署指南

## 系统架构

| 组件 | 说明 | 技术 |
|------|------|------|
| 后端 | REST API + WebSocket | Go（单二进制） |
| 前端 | Web 应用 | Next.js 16 |
| 数据库 | 主数据存储 | PostgreSQL 17 with pgvector |

运行 AI Agent 的每位团队成员还需在本机安装 `multica` CLI 并启动 Agent Daemon。

---

## 一键安装（推荐）

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --local
```

自动完成：克隆仓库 → Docker Compose 启动所有服务 → 安装 `multica` CLI。

完成后打开 http://localhost:3000，用任意邮箱 + 验证码 **`888888`** 登录，然后：

```bash
multica login          # 认证
multica daemon start   # 启动 Agent Daemon
```

> **前提：** 已安装 Docker 和 Docker Compose。

---

## 分步安装

### Step 1 — 启动服务

```bash
git clone https://github.com/multica-ai/multica.git
cd multica
make selfhost
```

`make selfhost` 自动从 `.env.example` 创建 `.env`、生成随机 `JWT_SECRET`、启动 Docker Compose。

- 前端：http://localhost:3000
- 后端 API：http://localhost:8080

### Step 2 — 登录

打开 http://localhost:3000，任意邮箱 + 验证码 **`888888`**。

> 非生产环境（`APP_ENV` 非 `production`）均可用此万能验证码。生产环境需配置邮件服务。

### Step 3 — 安装 CLI 并启动 Daemon

每位需要在本机运行 Agent 的团队成员执行：

**a) 安装 CLI 和 AI Agent**

```bash
brew install multica-ai/tap/multica
```

至少需要安装一个 AI Agent CLI：
- Claude Code：`claude`
- Codex：`codex`
- OpenClaw：`openclaw`
- OpenCode：`opencode`

**b) 一键 Setup**

```bash
multica setup --local
```

自动完成：
1. 配置 CLI 连接 `localhost`（端口 8080/3000）
2. 浏览器认证
3. 发现工作区
4. 后台启动 Daemon

验证 Daemon 是否运行：

```bash
multica daemon status
```

### Step 4 — 验证并开始使用

1. 打开 http://localhost:3000
2. **设置 → 运行时（Runtimes）**，确认你的机器已出现
3. **设置 → Agents**，创建 Agent
4. 创建 Issue 并分配给 Agent

---

## 停止服务

```bash
# 通过安装脚本方式
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --stop

# 手动克隆方式
make selfhost-stop     # 停止 Docker Compose
multica daemon stop    # 停止本地 Daemon
```

---

## 更新

```bash
git pull
make selfhost
```

迁移在后端启动时自动运行。

---

## 手动 Docker Compose

```bash
git clone https://github.com/multica-ai/multica.git
cd multica
cp .env.example .env
# 编辑 .env，至少修改 JWT_SECRET：
# JWT_SECRET=$(openssl rand -hex 32)
docker compose -f docker-compose.selfhost.yml up -d
```

---

## 手动 CLI 配置

```bash
multica config local          # 指向本地服务（默认端口）
# 或手动设置：
# multica config set app_url http://localhost:3000
# multica config set server_url http://localhost:8080

multica login
multica daemon start
```

生产环境（TLS）：

```bash
multica config set app_url https://app.example.com
multica config set server_url https://api.example.com
multica login
multica daemon start
```

---

## 切换回 Multica 云服务

```bash
multica config set server_url https://api.multica.ai
multica config set app_url https://multica.ai
multica login
```

或直接重新运行安装脚本（不加 `--local`）：

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

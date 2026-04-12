# CLI 完整参考

> `multica` CLI 连接本地机器与 Multica——认证、管理工作区、运行 Agent Daemon。

---

## 认证

```bash
multica login                  # 浏览器 OAuth 认证（90 天 token）
multica login --token          # 粘贴 personal access token（适合无头环境）
multica auth status            # 查看当前服务器、用户、token 有效期
multica auth logout            # 移除已存储的 token
```

---

## Daemon（本地 Agent 运行时）

```bash
multica daemon start              # 后台启动
multica daemon start --foreground # 前台运行（调试用）
multica daemon stop               # 停止
multica daemon status             # 查看状态（PID、运行时间、检测到的 Agent、工作区）
multica daemon status --output json

multica daemon logs               # 最后 50 行日志
multica daemon logs -f            # 实时跟踪日志
multica daemon logs -n 100        # 最后 100 行
```

### Daemon 工作原理

1. 启动时检测已安装的 Agent CLI，为每个工作区注册运行时
2. 默认每 3s 轮询服务器获取任务
3. 任务到来时创建隔离工作目录、启动 Agent CLI、流式返回结果
4. 每 15s 发送心跳，服务器据此判断 Daemon 是否存活
5. 关闭时注销所有运行时

### 支持的 Agent CLI

| CLI | 命令 | 说明 |
|-----|------|------|
| Claude Code | `claude` | Anthropic |
| Codex | `codex` | OpenAI |
| OpenClaw | `openclaw` | — |
| OpenCode | `opencode` | — |

### Daemon 配置参数

| 设置 | Flag | 环境变量 | 默认值 |
|------|------|----------|--------|
| 轮询间隔 | `--poll-interval` | `MULTICA_DAEMON_POLL_INTERVAL` | `3s` |
| 心跳间隔 | `--heartbeat-interval` | `MULTICA_DAEMON_HEARTBEAT_INTERVAL` | `15s` |
| Agent 超时 | `--agent-timeout` | `MULTICA_AGENT_TIMEOUT` | `2h` |
| 最大并发任务 | `--max-concurrent-tasks` | `MULTICA_DAEMON_MAX_CONCURRENT_TASKS` | `20` |
| 工作区根目录 | — | `MULTICA_WORKSPACES_ROOT` | `~/multica_workspaces` |

**Agent 专项覆盖：**

| 变量 | 说明 |
|------|------|
| `MULTICA_CLAUDE_PATH` | 自定义 `claude` 二进制路径 |
| `MULTICA_CLAUDE_MODEL` | 覆盖 Claude 模型 |
| `MULTICA_CODEX_PATH` | 自定义 `codex` 二进制路径 |
| `MULTICA_CODEX_MODEL` | 覆盖 Codex 模型 |

### 多 Profile（同机多 Daemon）

```bash
multica --profile staging login
multica --profile staging daemon start
multica daemon start   # 默认 profile 独立运行
```

每个 profile 有独立配置目录 `~/.multica/profiles/<name>/`。

---

## 工作区

```bash
multica workspace list                        # 列出工作区（* 表示正在监听）
multica workspace watch <workspace-id>        # 监听工作区
multica workspace unwatch <workspace-id>      # 取消监听
multica workspace get <workspace-id>          # 查看详情
multica workspace get <workspace-id> --output json
multica workspace members <workspace-id>      # 列出成员
```

---

## Issue 管理

### 列表与查看

```bash
multica issue list
multica issue list --status in_progress
multica issue list --priority urgent --assignee "Agent Name"
multica issue list --limit 20 --output json

multica issue get <id>
multica issue get <id> --output json
```

可用过滤参数：`--status`、`--priority`、`--assignee`、`--limit`

### 创建与更新

```bash
multica issue create --title "Fix login bug" --description "..." --priority high --assignee "Lambda"
# Flags: --title（必填）、--description、--status、--priority、--assignee、--parent、--due-date

multica issue update <id> --title "New title" --priority urgent
```

### 分配与状态

```bash
multica issue assign <id> --to "Lambda"
multica issue assign <id> --unassign

multica issue status <id> in_progress
# 有效状态：backlog | todo | in_progress | in_review | done | blocked | cancelled
```

### 评论

```bash
multica issue comment list <issue-id>
multica issue comment add <issue-id> --content "Looks good"
multica issue comment add <issue-id> --parent <comment-id> --content "Thanks!"
multica issue comment delete <comment-id>
```

### 执行历史

```bash
multica issue runs <issue-id>                          # 该 Issue 所有执行记录
multica issue runs <issue-id> --output json

multica issue run-messages <task-id>                   # 单次执行的详细消息日志
multica issue run-messages <task-id> --output json
multica issue run-messages <task-id> --since 42 --output json  # 增量拉取（高效轮询进行中任务）
```

---

## 配置

```bash
multica config show                                    # 查看当前配置

multica config local                                   # 配置为本地自部署（默认端口 8080/3000）
multica config local --port 9090 --frontend-port 4000  # 自定义端口

multica config set server_url https://api.example.com
multica config set app_url https://app.example.com
multica config set workspace_id <workspace-id>
```

---

## 其他命令

```bash
multica version              # 查看版本和 commit hash
multica update               # 更新到最新版本
multica agent list           # 列出当前工作区的 Agent
```

---

## 输出格式

大多数命令支持 `--output`：

- `table` — 人类可读表格（默认）
- `json` — 结构化 JSON（适合脚本和自动化）

```bash
multica issue list --output json
multica daemon status --output json
```

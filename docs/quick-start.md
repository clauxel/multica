# 快速上手

## 一键安装（推荐）

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

安装 Multica CLI，支持 macOS 和 Linux（Homebrew 或直接下载二进制）。

**自部署？** 加 `--local` 在本机部署完整服务：

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --local
```

需要 Docker。详见[自部署指南](./self-hosting.md)。

---

## 4 步开始使用

### 1. 登录并启动 Daemon

```bash
multica login           # 浏览器认证
multica daemon start    # 启动本地 Agent 运行时
```

Daemon 在后台运行，自动检测 PATH 中可用的 Agent CLI（`claude`、`codex`、`openclaw`、`opencode`）。

### 2. 确认运行时已连接

打开 Multica Web 端，进入 **设置 → 运行时（Runtimes）**，你的机器应出现在列表中。

> **什么是 Runtime？** 可执行 Agent 任务的计算环境——本地机器（通过 daemon）或云端实例。

### 3. 创建 Agent

进入 **设置 → Agents**，点击 **新建 Agent**：
- 选择刚连接的 Runtime
- 选择 Provider（Claude Code、Codex、OpenClaw 或 OpenCode）
- 为 Agent 起个名字

### 4. 分配第一个任务

在看板创建 Issue（或 `multica issue create`），分配给新 Agent。Agent 自动接手、执行、实时汇报进度。

---

## 一键 Setup（推荐用于新机器）

```bash
multica setup           # 云服务
multica setup --local   # 自部署
```

`multica setup` 自动完成：配置 CLI → 浏览器认证 → 发现工作区 → 启动 Daemon。

---

## Homebrew 安装（macOS/Linux）

```bash
brew tap multica-ai/tap
brew install multica
```

```bash
multica update   # 更新到最新版本
```

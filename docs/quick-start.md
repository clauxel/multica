# Multica Quick Start

This is the shortest practical path from zero to one working Multica runtime.

## Before You Start

You will need:

- browser access for login,
- at least one supported AI CLI on `PATH`: `claude`, `codex`, `openclaw`, `opencode`, or `hermes`,
- Docker only if you want self-hosting.

Platform notes:

- Multica Cloud CLI install is documented for macOS, Linux, and Windows PowerShell.
- The official quick self-host script shown here uses Bash plus Docker.

## Path A: Multica Cloud

### Install the CLI

macOS or Linux with Homebrew:

```bash
brew install multica-ai/tap/multica
```

macOS or Linux without Homebrew:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash
```

Windows PowerShell:

```powershell
irm https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.ps1 | iex
```

### Configure and Start

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

What `multica setup` does:

1. Configures the CLI for Multica Cloud
2. Opens browser authentication
3. Discovers available workspaces
4. Starts the local daemon in the background

### Verify in the UI

Open your workspace in the Multica web app and confirm:

- your machine appears under **Settings -> Runtimes**,
- you can create an agent under **Settings -> Agents**,
- the runtime shows the AI CLIs available on your machine.

If your intended workspace is not being processed by the daemon:

```bash
multica workspace list
multica workspace watch <workspace-id>
```

## Path B: Self-Hosted Multica

Use this if you want the full platform on your own infrastructure.

Official quick path:

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
multica daemon status
```

This path provisions the local server stack with Docker, installs the CLI, points it at localhost, opens login, and starts the daemon.

If you want the manual route instead, use [self-hosting.md](self-hosting.md).

## First Useful Workflow

Once the daemon is connected and an agent exists:

```bash
multica issue create --title "Fix login bug" --description "Investigate the failure path" --priority high --assignee "Lambda"
multica issue list
multica issue get <issue-id>
```

If you need to assign or reassign manually:

```bash
multica issue assign <issue-id> --to "Lambda"
```

To inspect execution:

```bash
multica issue runs <issue-id>
multica issue run-messages <run-id>
```

## 10-Minute Checklist

- Install the `multica` CLI.
- Run `multica setup` or `multica setup self-host`.
- Confirm `multica daemon status`.
- Confirm one supported AI CLI is detected on your machine.
- Open the web app and confirm your runtime is visible.
- Create one agent.
- Create and assign one issue.
- Verify that execution history appears for that issue.

## If Something Fails Immediately

- `multica setup` completed but nothing appears in the UI: check `multica auth status` and `multica daemon status`.
- A workspace exists but work never starts: make sure it is watched with `multica workspace watch <workspace-id>`.
- The daemon runs but no agent backend is usable: confirm one of `claude`, `codex`, `openclaw`, `opencode`, or `hermes` exists in `PATH`.
- Self-host login confusion: `888888` is only for non-production self-hosted development environments.
- Self-host syntax from older drafts: use `multica setup self-host`, not `multica setup --local`.

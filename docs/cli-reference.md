# Multica CLI Reference

This is a practical command guide for everyday developer use, not an exhaustive upstream manual.

## Setup

```bash
multica setup
multica setup self-host
multica setup self-host --server-url https://api.example.com --app-url https://app.example.com
multica setup self-host --profile staging --server-url https://api-staging.example.com --app-url https://staging.example.com
```

Use:

- `multica setup` for Multica Cloud,
- `multica setup self-host` for localhost or other self-hosted deployments,
- `--profile` when you need separate configs for different environments.

Do not use stale variants such as `multica setup --local`.

## Authentication

```bash
multica login
multica login --token
multica auth status
multica auth logout
```

When to use:

- `multica login`: normal interactive browser login,
- `multica login --token`: headless or remote environments,
- `multica auth status`: verify current user, server, and token state.

## Daemon

```bash
multica daemon start
multica daemon start --foreground
multica daemon stop
multica daemon status
multica daemon status --output json
multica daemon logs
multica daemon logs -f
multica daemon logs -n 100
```

Use `--foreground` when debugging startup problems.

## Supported Agent CLIs

| Provider | CLI |
|----------|-----|
| Claude Code | `claude` |
| Codex | `codex` |
| OpenClaw | `openclaw` |
| OpenCode | `opencode` |
| Hermes | `hermes` |

You need at least one of these installed for the daemon to be useful.

## Workspaces

```bash
multica workspace list
multica workspace watch <workspace-id>
multica workspace unwatch <workspace-id>
multica workspace get <workspace-id>
multica workspace get <workspace-id> --output json
multica workspace members <workspace-id>
```

Important note:

- watched workspaces are the ones the daemon processes,
- if issues never start, check whether the workspace is watched.

## Issues

### List and Inspect

```bash
multica issue list
multica issue list --status in_progress
multica issue list --priority urgent --assignee "Lambda"
multica issue list --limit 20 --output json
multica issue get <issue-id>
multica issue get <issue-id> --output json
```

### Create and Update

```bash
multica issue create --title "Fix login bug" --description "..." --priority high --assignee "Lambda"
multica issue update <issue-id> --title "New title" --priority urgent
```

### Assign and Change Status

```bash
multica issue assign <issue-id> --to "Lambda"
multica issue assign <issue-id> --unassign
multica issue status <issue-id> in_progress
```

Valid statuses:

`backlog`, `todo`, `in_progress`, `in_review`, `done`, `blocked`, `cancelled`

### Comments

```bash
multica issue comment list <issue-id>
multica issue comment add <issue-id> --content "Looks good"
multica issue comment add <issue-id> --parent <comment-id> --content "Thanks"
multica issue comment delete <comment-id>
```

### Execution History

```bash
multica issue runs <issue-id>
multica issue runs <issue-id> --output json
multica issue run-messages <run-id>
multica issue run-messages <run-id> --since 42 --output json
```

Use these when the agent is running but you need more detail than the UI shows.

## Configuration

```bash
multica config show
multica config set server_url http://localhost:8080
multica config set app_url http://localhost:3000
multica config set workspace_id <workspace-id>
```

For self-hosted deployments, configure `server_url` and `app_url` directly if you are not using `multica setup self-host`.

Do not rely on stale shortcuts such as `multica config local`.

## Other Useful Commands

```bash
multica version
multica update
multica agent list
```

## Recommended First Command Sequences

### Cloud

```bash
multica setup
multica daemon status
multica workspace list
multica agent list
```

### Self-Hosted

```bash
multica setup self-host
multica daemon status
multica workspace list
multica agent list
```

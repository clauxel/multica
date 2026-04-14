# Multica Troubleshooting

This file exists to solve the most common first-day developer problems.

## Problem: `multica setup` finished, but nothing seems connected

Check these first:

```bash
multica auth status
multica daemon status
multica workspace list
multica agent list
```

If the daemon is not running:

```bash
multica daemon start --foreground
```

That gives you direct startup logs.

## Problem: The runtime is missing in the UI

Check:

- whether your machine appears in **Settings -> Runtimes**,
- whether the daemon is actually running,
- whether at least one supported AI CLI is available on `PATH`.

If needed, inspect logs:

```bash
multica daemon logs -f
```

## Problem: The daemon is running, but issues never start

This is often a workspace watch problem.

Use:

```bash
multica workspace list
multica workspace watch <workspace-id>
```

Also verify:

- the issue is assigned to an existing agent,
- that agent is attached to a runtime/provider your machine supports,
- the runtime has at least one detected AI CLI.

## Problem: No Agent backend is detected

Multica needs at least one supported AI CLI installed and visible in `PATH`:

- `claude`
- `codex`
- `openclaw`
- `opencode`
- `hermes`

If none of those are installed, the daemon can run but it will not execute useful work.

## Problem: Self-hosted login is confusing

The official self-host docs describe `888888` only for non-production environments.

If you are in production mode, expect proper email-based verification instead.

## Problem: Self-host syntax from older drafts does not work

Use current syntax:

```bash
multica setup self-host
multica config set server_url http://localhost:8080
multica config set app_url http://localhost:3000
```

Do not use stale variants such as:

- `multica setup --local`
- `multica config local`

## Problem: I need to inspect what an agent actually did

Use execution-history commands:

```bash
multica issue runs <issue-id>
multica issue run-messages <run-id>
```

This is the quickest CLI path to understand whether the run is waiting, failing, or progressing.

## Problem: Upstream docs do not match old file names

The official files to trust are:

- `README.md`
- `CLI_AND_DAEMON.md`
- `SELF_HOSTING.md`

If a local note points to `docs/quick-start.md` or similar upstream file names, treat that as stale documentation and update it.

## Escalation Path

If the local guide here is still not enough, use the official links collected in [../README.md](../README.md).

# Multica Self-Hosting Guide

This guide is for developers who want to run Multica on their own infrastructure.

## Important Boundary

- The commands below target the upstream repository `multica-ai/multica`.
- This promotion folder does not include the actual Docker Compose files, server source code, or CLI binaries.
- The official quick path uses Docker plus a Bash install script.

## What The Official Docs Promise

The public Multica materials position self-hosting around:

- Docker Compose,
- a local CLI and daemon on each developer machine that runs agents,
- a hosted-or-self-hosted choice from the same product model.

The most concrete published setup path is Docker-based self-hosting.

## Quick Install: Recommended

```bash
curl -fsSL https://raw.githubusercontent.com/multica-ai/multica/main/scripts/install.sh | bash -s -- --with-server
multica setup self-host
```

What this path does:

1. Provisions the self-hosted server stack with Docker
2. Installs the `multica` CLI
3. Configures the CLI for localhost
4. Opens login
5. Starts the local daemon

Documented local defaults:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080`

## Manual Docker Compose Flow

```bash
git clone https://github.com/multica-ai/multica.git
cd multica
make selfhost
```

According to the official docs, `make selfhost` will:

1. create `.env` from the example file,
2. generate a random `JWT_SECRET`,
3. start the full service stack.

After the server stack is up, the easiest next step is still:

```bash
multica setup self-host
multica daemon status
```

That configures the CLI for localhost, opens login, and starts the daemon.

## Install The CLI If Needed

If you used the manual server path and do not have the CLI yet:

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

## Login Notes

For local non-production self-hosting, the official docs describe:

- any email address for login,
- verification code `888888`.

Important caveat:

- this is for non-production environments only,
- production setups should use real email-based authentication.

## CLI and Daemon on Developer Machines

Each developer who wants to run AI agents locally still needs:

- the `multica` CLI,
- at least one supported AI CLI on `PATH`,
- the daemon running on their own machine.

Supported AI CLIs:

- `claude`
- `codex`
- `openclaw`
- `opencode`
- `hermes`

## Manual CLI Configuration

If the server is already running and you want to point the CLI at it manually:

```bash
multica config set server_url http://localhost:8080
multica config set app_url http://localhost:3000
multica login
multica daemon start
```

For custom domains:

```bash
multica setup self-host --server-url https://api.example.com --app-url https://app.example.com
```

## Verification Checklist

After self-hosting, verify all of the following:

- the frontend loads in a browser,
- the API is reachable,
- `multica login` succeeds,
- `multica daemon status` shows a running daemon,
- at least one supported AI CLI is detected,
- your machine appears in **Settings -> Runtimes**,
- you can create an agent and assign an issue.

## Stop and Rebuild

Stop services:

```bash
make selfhost-stop
multica daemon stop
```

Rebuild after updates:

```bash
git pull
make selfhost
```

## When Self-Hosting Is The Right Choice

- You want full infrastructure control.
- You want a Docker-based deployment on your own machines or servers.
- You are comfortable owning networking, credentials, upgrades, and operations.

## When Multica Cloud Is Better First

- You mainly want to evaluate product fit quickly.
- You do not want to maintain the stack on day one.
- You want the shortest path to a connected runtime and first assigned issue.

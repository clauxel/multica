# Multica Overview

This folder is a developer-focused documentation set for Multica.

It is built to answer four practical questions fast:

1. What problem does Multica solve?
2. Should I start with cloud or self-hosting?
3. What does day-one success look like?
4. Where are the official docs if I need more detail?

## Scope Boundary

- This folder is documentation only.
- Commands such as `git clone https://github.com/multica-ai/multica.git` target the upstream Multica repository.
- This folder does not include the actual server stack, Docker Compose files, or the `multica` binary.

## What Multica Is

Multica is an open-source platform for treating coding agents like real teammates.

The practical mental model is:

- people and agents work from the same project context,
- work is tracked as issues rather than hidden inside ad hoc chats,
- agent execution happens on visible runtimes,
- teams can reuse successful workflows as skills,
- you can start with Multica Cloud or self-host the platform.

## Where Multica Is Strong

| Capability | Practical Meaning |
|------------|-------------------|
| Issue-centered workflow | Agents can be assigned work like teammates instead of living in separate chat tabs. |
| Visible runtimes | You can see which machine is connected and which CLIs are available there. |
| Reusable skills | Teams can turn repeated solutions into shared, reusable operating knowledge. |
| Multi-workspace model | Workspaces, agents, and settings stay scoped to the right team. |
| Self-host option | You can evaluate in cloud first and move to self-hosting later if needed. |

## Good Fit

- Teams already using coding agents who now want coordination and visibility.
- Developers who want agents to execute against local or self-managed runtimes.
- Teams that prefer issues, review flows, and tracked execution over chat-only usage.

## Poor Fit

- People looking only for a single chat-style assistant.
- Teams that do not want to install or run any local agent CLI.
- Readers expecting this folder to replace the full official product documentation.

## Cloud vs Self-Host

| If you mainly want... | Choose |
|-----------------------|--------|
| Fastest evaluation and the least setup | Multica Cloud |
| Full infrastructure control | Self-hosted Multica |
| Quick CLI/runtime testing on Windows | Multica Cloud first |
| Docker-based local platform deployment | Self-hosted Multica |

## What First Success Looks Like

You are in a good state when all of the following are true:

- `multica daemon status` reports a running daemon,
- the web app shows your machine in **Settings -> Runtimes**,
- at least one supported agent CLI is detected,
- you can create an agent,
- you can assign one issue and observe execution progress.

## Read Next

- Fastest path to a working setup: [quick-start.md](quick-start.md)
- Correct CLI syntax and daily commands: [cli-reference.md](cli-reference.md)
- Self-host details and caveats: [self-hosting.md](self-hosting.md)
- Failure handling and stale-doc traps: [troubleshooting.md](troubleshooting.md)
- Required comparison tables: [market-reference.md](market-reference.md)

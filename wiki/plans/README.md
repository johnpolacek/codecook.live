# Plans

This directory holds durable implementation plans for `CodeCook.live`.

## Planning Rule

Create or update a markdown plan before meaningful code, config, schema, dependency, architecture, test, build, or app behavior changes.

Fast-path exception: for small, local, reversible fixes that do not change product behavior, architecture, schema, dependencies, build configuration, public APIs, security posture, or durable project direction, do not create a plan. Make the change, validate it, and avoid wiki/log updates unless the fix reveals durable project knowledge.

## Structure

- Use `features/` for focused feature plans that do not need a full numbered roadmap.
- Use `maintenance/` for refactors, upgrades, cleanup, infrastructure, migrations, reliability, or tech debt.
- Use `releases/` only if release planning becomes a maintained workflow.
- Use `mvp/` only if the user explicitly reframes this existing app as an MVP track with ordered implementation sessions.
- Keep bugfix or cleanup planning in the closest relevant existing plan.
- Record completed work, decisions discovered during implementation, and verification in `../log.md` only when they affect durable project context.

## Current Planning State

No active implementation plan exists yet. Next planning target should be chosen from the current product priority, such as launch hardening, session publishing workflow, chat/realtime behavior, Bluesky distribution, or project import reliability.

Useful orientation commands:

```bash
sed -n '1,220p' wiki/index.md
sed -n '1,220p' wiki/roadmap.md
sed -n '1,220p' wiki/Sources.md
```

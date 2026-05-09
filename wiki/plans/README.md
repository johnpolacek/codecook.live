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

- Active plan: `features/live-product-loop.md`
- Planning shape: one active maintenance plan followed by focused feature plans
- Current unit: Live Product Loop, Unit 01 - Live State Contract
- Next action: define the authoritative session states, timestamps, and user-facing labels for active, paused, shipped, and archived sessions
- Blockers: none

## Plan Sequence

1. `features/live-product-loop.md` - make `.live` mean active, observable, public shipping sessions.
2. `features/commit-to-content-engine.md` - turn selected commits, diffs, and session context into editable content.
3. `features/distribution-audience-loop.md` - help creators export, publish, and track generated content.

Useful orientation commands:

```bash
sed -n '1,220p' wiki/index.md
sed -n '1,220p' wiki/roadmap.md
sed -n '1,220p' wiki/Sources.md
sed -n '1,180p' wiki/plans/maintenance/next-and-dependency-upgrade.md
sed -n '1,140p' wiki/plans/maintenance/product-base-reset.md
sed -n '1,160p' wiki/plans/maintenance/product-base-inventory.md
sed -n '1,160p' wiki/plans/features/live-product-loop.md
```

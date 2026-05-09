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

- Active plan: none
- Planning shape: one active maintenance plan followed by focused feature plans
- Current unit: none
- Next action: create the Clerk auth and Convex data foundation plan
- Blockers: none

## Plan Sequence

1. Next planning target: Clerk auth and Convex data foundation.
2. `features/live-product-loop.md` - make `.live` mean active, observable, public shipping sessions.
3. `features/commit-to-content-engine.md` - turn selected commits, diffs, and session context into editable content.
4. `features/distribution-audience-loop.md` - help creators export, publish, and track generated content.

Useful orientation commands:

```bash
sed -n '1,220p' wiki/index.md
sed -n '1,220p' wiki/roadmap.md
sed -n '1,220p' wiki/Sources.md
sed -n '1,180p' wiki/plans/maintenance/next-and-dependency-upgrade.md
sed -n '1,160p' wiki/plans/maintenance/remove-supabase-fresh-base.md
sed -n '1,140p' wiki/plans/maintenance/product-base-reset.md
sed -n '1,160p' wiki/plans/maintenance/product-base-inventory.md
sed -n '1,160p' wiki/plans/features/live-product-loop.md
```

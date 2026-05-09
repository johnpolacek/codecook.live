# Plans

This directory holds durable implementation plans for `CodeCook.live`.

## Planning Rule

Create or update a markdown plan before meaningful code, config, schema, dependency, architecture, test, build, or app behavior changes.

Fast-path exception: for small, local, reversible fixes that do not change product behavior, architecture, schema, dependencies, build configuration, public APIs, security posture, or durable project direction, do not create a plan. Make the change, validate it, and avoid wiki/log updates unless the fix reveals durable project knowledge.

## Structure

- Use `features/` for focused feature plans that do not need a full numbered roadmap.
- Use `maintenance/` for refactors, upgrades, cleanup, infrastructure, migrations, reliability, or tech debt.
- Use `releases/` only if release planning becomes a maintained workflow.
- Use `mvp/` for the current ordered MVP rebuild track.
- Keep bugfix or cleanup planning in the closest relevant existing plan.
- Record completed work, decisions discovered during implementation, and verification in `../log.md` only when they affect durable project context.

## Current Planning State

- Active plan: `mvp/README.md`
- Planning shape: multi-stage MVP
- Current stage: Stage 01 - Identity And Data Foundation
- Current unit: Stage 01 Unit 01 - Clerk And Convex App Foundation
- Next action: implement `mvp/units/stage-01/01-clerk-convex-foundation.md`
- Blockers: Clerk application keys, Convex project setup, GitHub OAuth app credentials

## Plan Sequence

1. `mvp/stage-01-foundation.md` - identity, Convex schema, GitHub OAuth, and app shell.
2. `mvp/stage-02-projects-and-live-sessions.md` - profiles, projects, live sessions, commit selection, realtime timeline.
3. `mvp/stage-03-ai-recap-and-public-publishing.md` - AI generation, editable recap, public page, copy/export.
4. `mvp/stage-04-mvp-hardening.md` - UX polish, validation, privacy, launch readiness.

The older feature plans remain as source context, but MVP execution should follow `mvp/` until the first release journey is complete.

Useful orientation commands:

```bash
sed -n '1,220p' wiki/index.md
sed -n '1,220p' wiki/roadmap.md
sed -n '1,220p' wiki/Sources.md
sed -n '1,120p' wiki/plans/mvp/README.md
sed -n '1,180p' wiki/plans/mvp/stage-01-foundation.md
sed -n '1,180p' wiki/plans/mvp/units/stage-01/01-clerk-convex-foundation.md
```

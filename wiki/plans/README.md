# Plans

This directory holds durable implementation plans for `CodeCook.live`.

## Planning Rule

Create or update a markdown plan before meaningful code, config, schema, dependency, architecture, test, build, or app behavior changes.

Fast-path exception: for small, local, reversible fixes that do not change product behavior, architecture, schema, dependencies, build configuration, public APIs, security posture, or durable project direction, do not create a plan. Make the change, validate it, and avoid wiki/log updates unless the fix reveals durable project knowledge.

## Structure

- Use `maintenance/` for refactors, upgrades, cleanup, infrastructure, migrations, reliability, or tech debt.
- Use `releases/` only if release planning becomes a maintained workflow.
- Use `mvp/` for the current ordered MVP rebuild track.
- Use `post-mvp/` for standalone future feature plans with their own stage(s) and units.
- Use `zzz_completed/` for completed plans that should remain available as history without crowding active work.
- Keep bugfix or cleanup planning in the closest relevant existing plan.
- Record completed work, decisions discovered during implementation, and verification in `../log.md` only when they affect durable project context.

## Current Planning State

- Active plan: `mvp/README.md`
- Planning shape: multi-stage MVP
- Current stage: Stage 01 - Identity And Data Foundation
- Current unit: Stage 01 Unit 05 - Authenticated App Shell
- Next action: implement `mvp/units/stage-01/05-authenticated-app-shell.md`
- Blockers: interactive Clerk sign-in for full browser verification

## Plan Sequence

1. `mvp/stage-01-foundation.md` - identity, flat-file data, S3 artifact storage, GitHub OAuth login, GitHub App repository access, and app shell.
2. `mvp/stage-02-projects-and-live-sessions.md` - profiles, projects, live sessions, commit selection, realtime timeline.
3. `mvp/stage-03-ai-recap-and-public-publishing.md` - AI generation, editable recap, public page, copy/export.
4. `mvp/stage-04-mvp-hardening.md` - UX polish, validation, privacy, launch readiness.

The old feature plan directory was removed. Work that belongs in the MVP now lives under `mvp/`; superseded historical plans live under `zzz_completed/features/`.

Post-MVP feature plans:

- `post-mvp/ai-writing-style-controls/README.md` - account-level AI writing style settings, presets, preview, and format/platform overrides.
- `post-mvp/automatic-developer-shorts/README.md` - source-grounded developer shorts for YouTube Shorts, TikTok, and X.

Completed plans live under `zzz_completed/`.

Useful orientation commands:

```bash
sed -n '1,220p' wiki/index.md
sed -n '1,220p' wiki/roadmap.md
sed -n '1,220p' wiki/Sources.md
sed -n '1,120p' wiki/plans/mvp/README.md
sed -n '1,180p' wiki/plans/mvp/stage-01-foundation.md
sed -n '1,180p' wiki/plans/mvp/units/stage-01/05-authenticated-app-shell.md
sed -n '1,180p' wiki/plans/post-mvp/ai-writing-style-controls/README.md
sed -n '1,180p' wiki/plans/post-mvp/automatic-developer-shorts/README.md
```

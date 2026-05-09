# Roadmap

## Current Goal

Build the CodeCook.live MVP for solo developers building in public.

## Next Decision

Confirm provider credentials and local setup for Clerk, Convex, and GitHub OAuth.

## Next Steps

1. Execute `wiki/plans/mvp/units/stage-01/01-clerk-convex-foundation.md`.
2. Complete Stage 01 identity, data, GitHub OAuth, and app shell foundation.
3. Build Stage 02 projects, live sessions, commit selection, realtime timeline, and automatic commit polling.
4. Build Stage 03 AI recap generation, public session page, and copy/export.
5. Complete Stage 04 MVP hardening and acceptance pass.

## Deferred

- Post-MVP AI writing style controls: account-level primary style, presets, custom guidance, preview, and format/platform overrides.
- Release planning until there is a concrete release workflow.
- Repo-local `.agents/skills/project-wiki-maintainer/SKILL.md` until repo-local skills are explicitly requested or `.agents/skills/` is adopted in this repository.
- Tauri or desktop companion work until the web product proves the core commit-to-content loop.
- Product Base Reset is complete; Supabase schema, generated types, clients, package dependencies, migrations, legacy app routes, disabled placeholders, chat, Bluesky, GitHub proxy APIs, upload APIs, AI route helpers, and S3 screenshot utilities are intentionally removed with no old data migration.

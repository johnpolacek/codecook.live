# Roadmap

## Current Goal

Build the CodeCook.live MVP for solo developers building in public.

## Next Decision

Confirm provider credentials and local setup for Clerk, S3-compatible artifact storage, GitHub OAuth sign-in, and GitHub App repository access.

## Next Steps

1. Complete manual GitHub App setup and verify a live repository installation locally.
2. Execute `wiki/plans/mvp/units/stage-02/01-project-create-from-repository.md`.
3. Build Stage 02 projects, live sessions, commit selection, realtime timeline, and automatic commit polling.
4. Build Stage 03 AI recap generation, public session page, and copy/export.
5. Complete Stage 04 MVP hardening and acceptance pass.

## Deferred

- Post-MVP AI writing style controls: account-level primary style, presets, custom guidance, preview, and format/platform overrides.
- Post-MVP automatic developer shorts: source-grounded downloadable MP4s for YouTube Shorts, TikTok, and X after style controls.
- Direct upload and automatic posting for generated shorts after downloadable video exports work.
- Release planning until there is a concrete release workflow.
- Repo-local `.agents/skills/project-wiki-maintainer/SKILL.md` until repo-local skills are explicitly requested or `.agents/skills/` is adopted in this repository.
- Tauri or desktop companion work until the web product proves the core commit-to-content loop.
- Product Base Reset is complete; Supabase schema, generated types, clients, package dependencies, migrations, legacy app routes, disabled placeholders, chat, Bluesky, GitHub proxy APIs, upload APIs, AI route helpers, and S3 screenshot utilities are intentionally removed with no old data migration.

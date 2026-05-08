# Roadmap

## Current Goal

Stabilize the existing CodeCook.live product context and choose the next focused implementation track before making meaningful app changes.

## Next Decision

Choose the next maintained plan target: launch readiness, project import reliability, session editor experience, public live-session viewing, chat/realtime quality, Bluesky sharing, AI-assisted writing, or database/security hardening.

## Next Steps

1. Confirm the current deployment, environment variables, and Supabase remote/local migration posture.
2. Pick one priority workstream and create a focused plan under `wiki/plans/features/` or `wiki/plans/maintenance/`.
3. Run baseline validation for the current app before larger changes: lint/build, key auth flows, project import, session creation, public session view, and share/chat paths.

## Deferred

- `wiki/plans/mvp/` scaffolding, because this import found an existing post-MVP app rather than a greenfield project.
- Release planning until there is a concrete release workflow.
- Repo-local `.agents/skills/project-wiki-maintainer/SKILL.md` until repo-local skills are explicitly requested or `.agents/skills/` is adopted in this repository.

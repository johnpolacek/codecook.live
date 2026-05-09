# Roadmap

## Current Goal

Build the live product loop on top of the reset CodeCook.live base: turn active shipping sessions into observable public stories.

## Next Decision

Define the authoritative live session state contract before changing public live-session behavior.

## Next Steps

1. Execute Live Product Loop Unit 01: define session states, timestamps, and user-facing labels.
2. Build the public live timeline once live state is coherent.
3. Build commit-to-content generation and distribution/audience loops after the live/session base is stable.

## Deferred

- `wiki/plans/mvp/` scaffolding, because this is an existing app with focused maintenance and feature tracks.
- Release planning until there is a concrete release workflow.
- Repo-local `.agents/skills/project-wiki-maintainer/SKILL.md` until repo-local skills are explicitly requested or `.agents/skills/` is adopted in this repository.
- Tauri or desktop companion work until the web product proves the core commit-to-content loop.
- Product Base Reset is complete; waitlist UI/action/schema cleanup is represented by a drop migration, with remote Supabase application still requiring normal migration deployment.

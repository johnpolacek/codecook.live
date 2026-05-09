# CodeCook.live Wiki Agent Guide

<!-- PROJECT-WIKI-BOOTSTRAPPER:START v1 -->
This `wiki/` directory is the maintained knowledge and planning layer for `CodeCook.live`.

## Source Of Truth

- `index.md` is the wiki front door.
- `log.md` is the project-context changelog. Git owns routine implementation history.
- `Sources.md` catalogs source material, repository evidence, and unknowns.
- `plans/README.md` defines the planning contract.
- `roadmap.md` tracks the next useful project direction.

## Rules

- Read `index.md` before structural wiki changes.
- Keep durable project knowledge, planning, decisions, and validation notes under `wiki/`.
- Preserve exact source material under `wiki/sources/` only when provenance matters.
- Update `index.md` when adding or materially changing durable pages.
- Update `log.md` after bootstrapping, planning, validation, or material project changes that affect durable project context.
- Use plain markdown and relative links.

## Boundaries

Do not create root-level `docs/` or `tasks/` for maintained project knowledge.

## Automation Policy

The root `AGENTS.md` asks agents to commit and pull whenever confident. For this repo, apply that as:

- Commit docs-only wiki changes: auto
- Commit code changes: auto-after-verification
- Push changes: ask
- Install dependencies: auto
- Run long commands: ask
- Create plans before code: meaningful-only
<!-- PROJECT-WIKI-BOOTSTRAPPER:END -->

# AGENTS.md instructions for /Users/johnpolacek/Projects/codecook.live

Prefer to commit and pull whenever confident that the code is good and there are no questions about implementation.

<!-- PROJECT-WIKI-BOOTSTRAPPER:START v1 -->
## CodeCook.live Agent Guide

### Project Wiki

- Read `wiki/index.md` before answering project-specific questions or making structural changes.
- Keep durable project knowledge, plans, decisions, and project-context history under `wiki/`.
- Use `wiki/Sources.md` as the source index.
- Create or update `wiki/plans/` before meaningful code, config, schema, dependency, architecture, test, build, or app behavior changes.
- Do not create plans for small, local, reversible fixes that do not change product behavior, architecture, schema, dependencies, build configuration, public APIs, security posture, or durable project direction.
- Sync recent codebase changes back into `wiki/log.md`, relevant plans, roadmap, and source docs when work happened before planning or made the wiki stale.
- Update `wiki/index.md` when adding or materially changing durable wiki pages.
- Update `wiki/log.md` after bootstrapping, planning, validation, or material project changes that affect durable project context.

### Working Rules

- Inspect existing files and Git state before writing.
- Preserve user-authored files and existing Git history.
- Do not create root-level `docs/` or `tasks/` for durable planning.
- Name unknowns and contradictions instead of inventing certainty.

### Automation Policy

- Commit docs-only wiki changes: auto
- Commit code changes: auto-after-verification
- Push changes: ask
- Install dependencies: ask
- Run long commands: ask
- Create plans before code: meaningful-only
<!-- PROJECT-WIKI-BOOTSTRAPPER:END -->

# Sources

This page catalogs source material, repository evidence, and unresolved unknowns for `CodeCook.live`.

## Source Material

- User request on 2026-05-08: initialize this project with `project-wiki`.
- Root `README.md`: daily build log from the early prototype through the CodeCook.live rename, Bluesky sharing, guest chat, session management hooks, project import, and AI-assisted writing.
- Repository evidence: Next.js app code, Supabase migrations, S3 screenshot generation, GitHub commit APIs, Bluesky integration, AI session helpers, chat components, project import/editing surfaces, and shadcn-style UI components.

## Repository Evidence

- `package.json` defines a private Next.js 15.1.3, React 19, TypeScript, Tailwind CSS, Supabase, AI SDK, OpenAI provider, Octokit, Bluesky, Puppeteer, S3, and Radix/shadcn UI app.
- `app/` uses the Next.js App Router for the landing page, profile pages, project pages, session pages, auth callback, upload, GitHub commit APIs, AI utilities, and Bluesky endpoints.
- `components/` contains home, auth, layout, project, session editor, session display, chat, and UI primitives.
- `lib/` contains server actions, AI actions and prompts, Supabase clients/admin/server helpers, GitHub API, Bluesky client/formatting, S3 screenshot helpers, shared types, and utilities.
- `supabase/migrations/` contains profiles, projects, sessions, commits, Bluesky, live/archive status, chat schema changes, and a cleanup migration that drops the removed waitlist table.
- This folder had no `.git` directory at import time.

## Generated Source Briefs

- `wiki/sources/prd.md`
- `wiki/sources/technical-brief.md`
- `wiki/sources/design-brief.md`
- `wiki/sources/marketing-brief.md`
- `wiki/Architecture.md`

## Unknowns

- Whether the app is currently deployed at `codecook.live` and which hosting provider or environment variables are authoritative.
- Whether the README build log dates are historical project records, forward-dated notes, or manually edited status.
- Current production Supabase migration status and whether local migrations exactly match remote state.
- Active product priorities, known bugs, analytics, and launch-readiness criteria.
- Authentication provider configuration and required OAuth scopes for GitHub and Bluesky in production.

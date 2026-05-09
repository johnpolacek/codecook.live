# Sources

This page catalogs source material, repository evidence, and unresolved unknowns for `CodeCook.live`.

## Source Material

- User request on 2026-05-08: initialize this project with `project-wiki`.
- Root `README.md`: daily build log from the early prototype through the CodeCook.live rename, Bluesky sharing, guest chat, session management hooks, project import, and AI-assisted writing.
- Repository evidence: Next.js app code, S3 screenshot generation, GitHub commit APIs, Bluesky integration, AI session helpers, chat components, project import/editing surfaces, and shadcn-style UI components.

## Repository Evidence

- `package.json` defines a private Next.js 16.2.6, React 19, TypeScript, Tailwind CSS, AI SDK, OpenAI provider, Octokit, Bluesky, Puppeteer, S3, and Radix/shadcn UI app.
- `app/` uses the Next.js App Router for the landing page, placeholder profile/project/session pages, upload, GitHub commit APIs, AI utilities, and Bluesky endpoints.
- `components/` contains home, auth, layout, project, session editor, session display, chat, and UI primitives.
- `lib/` contains server actions, AI actions and prompts, GitHub API, Bluesky client/formatting, S3 screenshot helpers, shared types, and utilities.
- Supabase schema, migrations, generated types, clients, and package dependencies were removed on 2026-05-09. No old Supabase data is being migrated.
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
- Active product priorities, known bugs, analytics, and launch-readiness criteria.
- Clerk, Convex, authentication provider configuration, and required OAuth scopes for GitHub and Bluesky in production.

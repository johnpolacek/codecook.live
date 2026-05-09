# Sources

This page catalogs source material, repository evidence, and unresolved unknowns for `CodeCook.live`.

## Source Material

- User request on 2026-05-08: initialize this project with `project-wiki`.
- User clarification on 2026-05-09: treat the reset project as an MVP rebuild for solo developers building in public.
- Root `README.md`: current fresh-base status and development commands.
- Repository evidence: Next.js landing shell, layout components, graphics, shadcn-style UI primitives, and wiki plans for the future product direction.

## Repository Evidence

- `package.json` defines a private Next.js 16.2.6, React 19, TypeScript, Tailwind CSS, Radix/shadcn UI primitive dependencies, icons, theming, linting, and `pnpm` scripts.
- `app/` uses the Next.js App Router for the public landing page only.
- `components/` contains home, layout, graphics, and reusable UI primitives.
- `lib/` contains only shared local utilities.
- Supabase schema, migrations, generated types, clients, and package dependencies were removed on 2026-05-09. No old Supabase data is being migrated.
- Legacy profile/project/session routes, server actions, chat, Bluesky, GitHub proxy APIs, upload APIs, AI route helpers, S3 screenshot utilities, and disabled placeholders were removed on 2026-05-09 to create a clean base.
- This folder had no `.git` directory at import time.

## Generated Source Briefs

- `wiki/sources/prd.md`
- `wiki/sources/technical-brief.md`
- `wiki/sources/design-brief.md`
- `wiki/sources/marketing-brief.md`
- `wiki/Architecture.md`
- `wiki/plans/mvp/README.md`

## Unknowns

- Whether the app is currently deployed at `codecook.live` and which hosting provider or environment variables are authoritative.
- Active product priorities, known bugs, analytics, and launch-readiness criteria.
- Clerk, Convex, authentication provider configuration, required OAuth scopes for GitHub, and production deployment details.

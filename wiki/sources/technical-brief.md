# Technical Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection, dependency upgrade validation, Supabase removal, and legacy app cruft removal
- Confidence: high for current repo shape, medium for future integration direction
- Known gaps: production environment, Clerk setup, Convex project/schema, GitHub OAuth app, CI, deployment provider, AI provider key, and required secrets are unknown.

## Stack

- Framework: Next.js 16.2.6 App Router with React 19.2.6 and TypeScript.
- Styling: Tailwind CSS 4, shadcn/Radix-style primitives, `lucide-react`, Heroicons, and local components.
- Data/auth: no provider configured. Intended direction is Clerk for auth and Convex for structured data/realtime.
- AI: not currently configured in code. Future writing assistance should be added after commit/session data contracts exist.
- Integrations: none currently active in code. MVP integrations are Clerk, Convex, GitHub OAuth/API, and AI writing. Artifact storage may be added when needed for screenshots or generated media. Direct publish channels are post-MVP.
- Package manager: `pnpm`, inferred from `pnpm-lock.yaml` and scripts.

## Project Surfaces

- `app/` owns the App Router layout and public landing page.
- `components/` owns reusable UI and workflow-specific components.
- `lib/` owns shared utilities.
- No database schema exists in the repo after the fresh-base reset.

## Validation Defaults

For meaningful changes, prefer:

```bash
pnpm lint
pnpm build
```

Database work should add provider-specific validation when Clerk and Convex are introduced. Browser-visible UI work should include manual checks for the landing page, authenticated app shell, project creation, live session, recap editor, and public session page as those routes are reintroduced.

## Handoff Risks

- Next 16 removed `next lint`; this project now uses `eslint .` through `pnpm lint`.
- The app intentionally has no database layer until Clerk and Convex are added.
- Legacy integrations were removed rather than preserved as disabled placeholders; reintroduce them from fresh contracts.

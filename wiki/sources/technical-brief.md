# Technical Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection, dependency upgrade validation, and Supabase removal
- Confidence: medium
- Known gaps: production environment, Clerk setup, Convex schema, CI, deployment provider, and required secrets are unknown.

## Stack

- Framework: Next.js 16.2.6 App Router with React 19.2.6 and TypeScript.
- Styling: Tailwind CSS 4, shadcn/Radix-style primitives, `lucide-react`, Heroicons, and local components.
- Data/auth: no provider configured. Intended direction is Clerk for auth and Convex for structured data/realtime.
- AI: Vercel AI SDK v6 with OpenAI provider and `@ai-sdk/rsc` for existing RSC stream helpers.
- Integrations: GitHub via Octokit/API routes, Bluesky via `@atproto/api`, S3 via AWS SDK, Puppeteer/Chromium for screenshots.
- Package manager: `pnpm`, inferred from `pnpm-lock.yaml` and scripts.

## Project Surfaces

- `app/` owns routes, pages, route handlers, and server actions.
- `components/` owns reusable UI and workflow-specific components.
- `hooks/` owns client-side session/editor state helpers.
- `lib/` owns integration clients, actions, prompts, storage helpers, shared types, and utilities.
- No database schema exists in the repo after the fresh-base reset.

## Validation Defaults

For meaningful changes, prefer:

```bash
pnpm lint
pnpm build
```

Database work should add provider-specific validation when Clerk and Convex are introduced. Browser-visible UI work should include manual checks across landing, auth, project, session editor, and public session views.

## Handoff Risks

- Next 16 removed `next lint`; this project now uses `eslint .` through `pnpm lint`.
- The app intentionally has no database layer until Clerk and Convex are added.
- Screenshot generation can be environment-sensitive because Puppeteer and Chromium behave differently locally and in serverless contexts.

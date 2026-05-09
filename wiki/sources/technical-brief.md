# Technical Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection and dependency upgrade validation
- Confidence: medium
- Known gaps: production environment, remote database state, CI, deployment provider, required secrets, and Supabase CLI package bin health are unknown.

## Stack

- Framework: Next.js 16.2.6 App Router with React 19.2.6 and TypeScript.
- Styling: Tailwind CSS 4, shadcn/Radix-style primitives, `lucide-react`, Heroicons, and local components.
- Data/auth: Supabase with generated TypeScript database types and SQL migrations.
- AI: Vercel AI SDK v6 with OpenAI provider and `@ai-sdk/rsc` for existing RSC stream helpers.
- Integrations: GitHub via Octokit/API routes, Bluesky via `@atproto/api`, S3 via AWS SDK, Puppeteer/Chromium for screenshots.
- Package manager: `pnpm`, inferred from `pnpm-lock.yaml` and scripts.

## Project Surfaces

- `app/` owns routes, pages, route handlers, and server actions.
- `components/` owns reusable UI and workflow-specific components.
- `hooks/` owns client-side session/editor state helpers.
- `lib/` owns integration clients, actions, prompts, storage helpers, shared types, and utilities.
- `supabase/migrations/` owns database schema evolution.

## Validation Defaults

For meaningful changes, prefer:

```bash
pnpm lint
pnpm build
```

Database work should also validate generated types and migration state with the relevant Supabase scripts from `package.json`. Browser-visible UI work should include manual checks across landing, auth, project, session editor, and public session views.

## Handoff Risks

- Next 16 removed `next lint`; this project now uses `eslint .` through `pnpm lint`.
- Supabase local and remote commands can mutate database state; ask before running long or environment-changing commands.
- Screenshot generation can be environment-sensitive because Puppeteer and Chromium behave differently locally and in serverless contexts.
- `pnpm update --latest` reported Supabase package bin creation warnings for `supabase@2.98.2`; validate Supabase CLI commands before relying on them.

# Technical Brief

## Status

- Last reviewed: 2026-05-08
- Evidence basis: repository inspection
- Confidence: medium
- Known gaps: production environment, remote database state, CI, deployment provider, and required secrets are unknown.

## Stack

- Framework: Next.js 15.1.3 App Router with React 19 and TypeScript.
- Styling: Tailwind CSS 3, shadcn/Radix-style primitives, `lucide-react`, Heroicons, and local components.
- Data/auth: Supabase with generated TypeScript database types and SQL migrations.
- AI: Vercel AI SDK v4 with OpenAI provider.
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

- `next lint` may depend on legacy Next.js lint behavior; confirm the installed Next version behavior before relying on it as the only validation.
- Supabase local and remote commands can mutate database state; ask before running long or environment-changing commands.
- Screenshot generation can be environment-sensitive because Puppeteer and Chromium behave differently locally and in serverless contexts.

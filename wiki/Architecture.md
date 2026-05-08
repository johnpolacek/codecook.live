# Architecture

## Status

- Last reviewed: 2026-05-08
- Evidence basis: repository inspection
- Confidence: medium
- Known gaps: deployment environment, production Supabase state, auth provider configuration, and storage bucket configuration are not confirmed.

## System Shape

`CodeCook.live` is a Next.js App Router application with server actions and route handlers for product workflows, Supabase for authentication and relational data, GitHub APIs for commit import/diff context, AI SDK/OpenAI for writing assistance, Bluesky APIs for sharing, and S3/Puppeteer support for generated screenshots.

## Runtime Boundaries

- Browser UI lives under `app/`, `components/`, and `hooks/`.
- Server actions live under `app/actions/`, `lib/actions/`, `lib/ai/actions.ts`, and `lib/ai/sessions/actions.ts`.
- Route handlers live under `app/api/` for uploads, GitHub commit APIs, AI utilities, waitlist actions, session actions, and Bluesky endpoints.
- Supabase client variants live in `lib/supabase/` for browser, server, middleware, and admin contexts.
- Database evolution is tracked in `supabase/migrations/`.

## Data And Integration Surfaces

- Supabase owns profiles, projects, sessions, commits, waitlist entries, Bluesky connection data, chat messages, and realtime/session state.
- GitHub import surfaces fetch repository commits and commit diffs, then support project and session content workflows.
- AI-assisted session writing appears centered on prompts and actions under `lib/ai/`.
- S3 and screenshot utilities support generated media for sharing or project/session visuals.
- Bluesky sharing includes API routes, client helpers, formatting, and session/editor UI.

## Implementation Risks

- Some schema types appear duplicated between `lib/database.types.ts` and `lib/supabase/database.types.ts`; future database work should confirm the authoritative generated type path.
- Environment-sensitive integrations need explicit validation before deployment work: Supabase, GitHub OAuth/API, OpenAI, S3, Puppeteer/Chromium, and Bluesky.
- App Router server/client boundaries should be checked carefully when moving logic between components and actions.

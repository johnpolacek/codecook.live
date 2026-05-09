# Architecture

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection after Supabase removal
- Confidence: medium
- Known gaps: Clerk configuration, Convex schema, deployment environment, and storage bucket configuration are not confirmed.

## System Shape

`CodeCook.live` is a Next.js App Router application reset to a fresh no-database base. The intended direction is Clerk for auth, Convex for structured app data and realtime state, S3 for artifacts, GitHub APIs for commit context, AI SDK/OpenAI for writing assistance, and Bluesky APIs for sharing.

## Runtime Boundaries

- Browser UI lives under `app/`, `components/`, and `hooks/`.
- Server actions live under `app/actions/`, `lib/actions/`, `lib/ai/actions.ts`, and `lib/ai/sessions/actions.ts`.
- Route handlers live under `app/api/` for uploads, GitHub commit APIs, AI utilities, session actions, and Bluesky endpoints.
- No database provider is currently configured.
- Former database-backed routes/actions now return placeholders or disabled states until Clerk and Convex are added.

## Data And Integration Surfaces

- Convex is expected to own profiles, projects, sessions, commits, Bluesky connection data, chat messages, and realtime/session state after the next database pass.
- Clerk is expected to own authentication and GitHub OAuth tokens.
- GitHub import surfaces fetch repository commits and commit diffs, then support project and session content workflows.
- AI-assisted session writing appears centered on prompts and actions under `lib/ai/`.
- S3 and screenshot utilities support generated media for sharing or project/session visuals; S3 should remain artifact storage, not canonical app state.
- Bluesky sharing includes API routes, client helpers, formatting, and session/editor UI.

## Implementation Risks

- Environment-sensitive integrations need explicit validation before deployment work: Clerk, Convex, GitHub OAuth/API, OpenAI, S3, Puppeteer/Chromium, and Bluesky.
- App Router server/client boundaries should be checked carefully when moving logic between components and actions.

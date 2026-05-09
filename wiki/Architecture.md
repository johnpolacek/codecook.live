# Architecture

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection after legacy app cruft removal
- Confidence: high for current repo shape, medium for future integration direction
- Known gaps: Clerk configuration, Convex schema, deployment environment, and storage bucket configuration are not confirmed.

## System Shape

`CodeCook.live` is a Next.js App Router application reset to a fresh no-database public product shell. The intended direction is Clerk for auth, Convex for structured app data and realtime state, S3-compatible artifact storage, GitHub APIs for commit context, AI SDK/OpenAI for writing assistance, and optional distribution integrations after the core loop is rebuilt.

## Runtime Boundaries

- Browser UI lives under `app/` and `components/`.
- There are currently no server actions or route handlers.
- No database provider is currently configured.
- Removed product routes should be rebuilt intentionally on top of Clerk and Convex instead of restoring old disabled placeholders.

## Data And Integration Surfaces

- Convex is expected to own profiles, projects, sessions, commits, realtime/session state, and generated content state after the next database pass.
- Clerk is expected to own authentication and GitHub OAuth tokens.
- GitHub import surfaces should fetch repository commits and commit diffs, then support project and session content workflows.
- AI-assisted writing should be reintroduced only after commit/session data contracts are defined.
- S3-compatible storage should remain artifact storage, not canonical app state.
- Bluesky or other publish channels should be added after generated content review/editing exists.

## Implementation Risks

- Environment-sensitive integrations need explicit validation before deployment work: Clerk, Convex, GitHub OAuth/API, OpenAI, artifact storage, and publish channels.
- App Router server/client boundaries should be checked carefully when moving logic between components and actions.

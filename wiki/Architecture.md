# Architecture

## Status

- Last reviewed: 2026-05-10
- Evidence basis: repository inspection after legacy app cruft removal, Clerk auth foundation implementation, and GitHub App repository-access planning correction
- Confidence: high for current repo shape, medium for future integration direction
- Known gaps: real Clerk keys, flat-file deployment persistence path, deployment environment, and storage bucket configuration are not confirmed.

## System Shape

`CodeCook.live` is a Next.js App Router application reset to a fresh public product shell. Clerk now provides the auth foundation and protected-route middleware. The MVP persistence direction is flat-file JSON for mutable app data and S3-compatible storage for immutable artifacts. A GitHub App should provide read-only, installation-scoped repository and commit context, AI SDK/OpenAI will provide writing assistance, and optional distribution integrations come after the core loop is rebuilt.

## Runtime Boundaries

- Browser UI lives under `app/` and `components/`.
- There are currently no server actions or route handlers.
- Next 16 `proxy.ts` protects authenticated app routes through Clerk.
- Flat-file JSON is the intended MVP data layer.
- Removed product routes should be rebuilt intentionally on top of Clerk, flat-file data helpers, and artifact storage instead of restoring old disabled placeholders.

## Data And Integration Surfaces

- Clerk owns authentication and GitHub OAuth sign-in only.
- Flat-file JSON owns profiles, projects, sessions, selected commits, timeline state, and generated content state for the MVP.
- GitHub import surfaces should use a GitHub App for read-only, installation-scoped repository commits and diffs, then support project and session content workflows.
- AI-assisted writing should be reintroduced only after commit/session data contracts are defined.
- S3-compatible storage should remain immutable artifact storage, not canonical mutable app state.
- Bluesky or other publish channels should be added after generated content review/editing exists.

## Implementation Risks

- Environment-sensitive integrations need explicit validation before deployment work: Clerk, S3-compatible storage, GitHub OAuth sign-in, GitHub App API access, OpenAI, artifact storage, and publish channels.
- App Router server/client boundaries should be checked carefully when moving logic between components and actions.

# Remove Legacy App Cruft

## Status

- Created: 2026-05-09
- Status: complete
- Owner: Codex
- Validation: `pnpm lint`, `pnpm build`, code search, public route smoke checks

## Goal

Remove the highest-impact leftover surfaces from the pre-reset product so the repo is a clean base for the new Clerk and Convex direction.

## Scope

- Remove broken auth routes/components.
- Remove placeholder public profile/project/session routes.
- Remove disabled profile/project/session actions and old app flows.
- Remove chat/community surface.
- Remove Bluesky credential/posting flow.
- Remove unauthenticated GitHub proxy routes.
- Remove now-unused S3 screenshot/upload helpers, AI helper routes, old hooks, shared types, stale utility functions, and dependencies tied to the deleted surfaces.
- Refresh README and wiki context so future work does not treat deleted systems as current architecture.

## Non-Goals

- Do not add Clerk, Convex, GitHub OAuth, AI generation, S3 artifacts, or publish integrations in this pass.
- Do not migrate old Supabase data or preserve old schemas.
- Do not rebuild the removed product routes as placeholders.

## Result

- The runtime app now consists of the public landing shell, layout, graphics, reusable UI primitives, and local utilities.
- No `app/api`, `app/actions`, `hooks`, workflow-specific components, integration clients, generated schemas, or disabled old app flows remain.
- The next product step is the Clerk and Convex foundation plan.

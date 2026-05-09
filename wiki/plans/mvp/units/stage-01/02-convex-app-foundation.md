# Unit 02 - Convex App Foundation

## Goal

Install and configure Convex as the app data and realtime foundation.

## Scope

- Add the Convex dependency.
- Configure Convex environment variable examples for local development.
- Add initial Convex project configuration and generated client setup.
- Wrap the authenticated app boundary in the Convex provider.
- Add a minimal Convex health/query function only if useful for validation.

## Non-Goals

- Do not build the user/profile model yet.
- Do not fetch GitHub repositories yet.
- Do not add AI generation yet.
- Do not create project or session tables yet unless Convex setup requires a minimal placeholder.

## Implementation Notes

- Convex owns structured app data and realtime state.
- Clerk-authenticated app state should be available before Convex provider wiring is considered complete.
- UI copy must be customer-facing and must not mention Clerk, Convex, implementation status, or roadmap mechanics.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Convex codegen/check command once configured.
- Manual:
  - Start the app locally.
  - Confirm anonymous users can still view `/`.
  - Confirm signed-in users can reach the protected route with Convex provider wiring active.
  - Confirm the minimal Convex validation path succeeds if a health/query function is added.
- Deferred:
  - Production Convex deployment verification until production credentials exist.

## Completion Gate

This unit is complete when Convex is configured, generated client setup is in place, the app builds, and authenticated app routes can load with Convex provider wiring active.

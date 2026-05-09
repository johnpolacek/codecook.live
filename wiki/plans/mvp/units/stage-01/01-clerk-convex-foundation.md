# Unit 01 - Clerk And Convex App Foundation

## Goal

Install and configure Clerk and Convex as the app foundation.

## Scope

- Add Clerk and Convex dependencies.
- Configure environment variable examples for local development.
- Wrap the Next.js app in Clerk and Convex providers.
- Add initial Convex configuration and generated client setup.
- Add a minimal protected app route or shell that requires sign-in.

## Non-Goals

- Do not build full profile onboarding.
- Do not fetch GitHub repositories yet.
- Do not add AI generation yet.

## Implementation Notes

- Clerk owns auth.
- Convex owns structured app data and realtime state.
- UI copy must be customer-facing and must not mention Clerk, Convex, implementation status, or roadmap mechanics.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Convex codegen/check command once configured.
- Manual:
  - Start the app locally.
  - Confirm anonymous users can view `/`.
  - Confirm protected app route redirects to sign-in.
  - Confirm signed-in users can reach the app shell.
- Deferred:
  - Production OAuth verification until production credentials exist.

## Completion Gate

This unit is complete when Clerk and Convex are configured, the app builds, and an authenticated shell can be reached by a signed-in user.

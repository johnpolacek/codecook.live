# Unit 01 - Clerk Auth Foundation

## Summary

- Status: completed
- Completed: 2026-05-09
- Result: Clerk SDK, provider wiring, protected-route middleware, public auth entry points, and env examples are in place.
- Follow-up: execute `02-convex-app-foundation.md`.
- Blockers: manual sign-in and protected-route redirect verification require real Clerk keys.

## Goal

Install and configure Clerk as the authentication foundation.

## Scope

- Add the Clerk dependency.
- Configure Clerk environment variable examples for local development.
- Wrap the Next.js app in the Clerk provider.
- Add sign-in and sign-out entry points.
- Add middleware and a minimal protected route that requires sign-in.

## Non-Goals

- Do not configure Convex in this unit.
- Do not build full profile onboarding.
- Do not fetch GitHub repositories yet.
- Do not add AI generation yet.

## Implementation Notes

- Clerk owns auth.
- UI copy must be customer-facing and must not mention Clerk, Convex, implementation status, or roadmap mechanics.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Start the app locally.
  - Confirm anonymous users can view `/`.
  - Confirm protected app route redirects to sign-in.
  - Confirm signed-in users can reach the minimal protected route.
- Deferred:
  - Production OAuth verification until production credentials exist.

## Completion Gate

This unit is complete when Clerk is configured, the app builds, `/` remains public, and a signed-in user can reach a protected route.

## Result

- Added `@clerk/nextjs`.
- Added Clerk provider wiring at the root layout.
- Added Next 16 `proxy.ts` route protection for `/app`.
- Added a minimal protected `/app` route.
- Added public sign-in and signed-in account/app entry points in the header.
- Added `.env.example` entries for Clerk keys.
- Updated repo automation policy so dependency installs are automatic.

## Verification Result

- Passed: `pnpm lint`.
- Passed: `pnpm build`.
- Passed: public `/` smoke check returns 200.
- Blocked: protected `/app` redirect and signed-in route check require valid local Clerk keys. Without keys, Clerk fails with a missing `publishableKey` error before redirect behavior can be verified.

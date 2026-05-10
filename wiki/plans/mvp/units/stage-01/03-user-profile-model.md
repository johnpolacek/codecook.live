# Unit 03 - User Profile Model

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: flat-file-backed creator profile records, Clerk user mapping, onboarding/update form, and validation smoke checks are in place.
- Follow-up: execute `04-github-oauth-login.md`.
- Blockers: full browser sign-in/profile submission verification requires interactive Clerk sign-in.

## Goal

Create the flat-file-backed creator profile foundation.

## Scope

- Define the user/profile record shape for flat-file JSON persistence.
- Store Clerk user identity mapping.
- Add profile onboarding for display name and username.
- Reserve route-safe usernames.
- Add basic profile read/update functions.

## Non-Goals

- Do not add teams or organizations.
- Do not build public profile discovery beyond what MVP routes need.
- Do not add avatar uploads unless Clerk profile data already covers the need.

## Implementation Notes

- A profile is required before creating projects or sessions.
- Username should support future public routes.
- Public UI must present this as creator setup, not database setup.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Flat-file data smoke checks.
- Manual:
  - Sign in with a new user.
  - Complete profile setup.
  - Refresh and confirm profile persists.
  - Try an invalid or reserved username and confirm useful validation.
- Deferred:
  - Advanced abuse prevention until MVP hardening.

## Completion Gate

This unit is complete when a signed-in user can create and update a durable creator profile.

## Result

- Added `lib/server/profiles.ts` for creator profile read/upsert behavior.
- Added Clerk user ID mapping, display name validation, username normalization, reserved username checks, and duplicate username checks.
- Added `/app` profile onboarding/update UI backed by a server action.
- Added profile smoke verification over flat-file JSON data.

## Verification Result

- Passed: `pnpm smoke:data`.
- Passed: `pnpm smoke:profiles`.
- Passed: `pnpm check`.
- Passed: public `/` returns 200 and signed-out `/app` redirects to Clerk sign-in.
- Deferred: interactive signed-in profile submission check because it requires completing Clerk sign-in in a browser session.

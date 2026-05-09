# Unit 03 - User Profile Model

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

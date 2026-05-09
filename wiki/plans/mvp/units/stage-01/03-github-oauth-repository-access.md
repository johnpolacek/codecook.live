# Unit 03 - GitHub OAuth Repository Access

## Goal

Enable GitHub OAuth access needed to list repositories and fetch commits.

## Scope

- Configure Clerk GitHub OAuth scopes needed for repository and commit access.
- Add server-side helpers for authenticated GitHub API calls.
- Fetch accessible repositories for the signed-in user.
- Handle missing scopes, expired tokens, and empty repository states.

## Non-Goals

- Do not create projects yet.
- Do not store full commit histories.
- Do not support non-GitHub providers in MVP.

## Implementation Notes

- GitHub is required from day one.
- Request the narrowest scopes that support MVP repository and commit reads.
- Private repository support should be explicit in UX if scopes allow it.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Unit/integration tests for helper behavior where practical.
- Manual:
  - Sign in with GitHub.
  - Confirm repositories can be listed.
  - Confirm empty/error/token states are understandable.
- Deferred:
  - Production GitHub OAuth verification until production app credentials exist.

## Completion Gate

This unit is complete when a signed-in GitHub user can authorize access and the app can list repositories needed for project creation.

# Unit 04 - GitHub OAuth Repository Access

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: server-side GitHub OAuth token access, repository listing helper, repository access UI states, and helper smoke checks are in place.
- Follow-up: execute `05-authenticated-app-shell.md`.
- Blockers: manual GitHub OAuth app and Clerk social connection configuration are required for live repository listing verification.

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

## Manual Setup Required

### GitHub OAuth App

Create one GitHub OAuth app for local/dev and one for production.

For local/dev:

- Application name: `CodeCook Dev`
- Homepage URL: `http://localhost:3000`
- Authorization callback URL: paste the callback URL shown by Clerk for the GitHub social connection.

For production:

- Application name: `CodeCook`
- Homepage URL: `https://codecook.live`
- Authorization callback URL: paste the production callback URL shown by Clerk for the production GitHub social connection.

GitHub OAuth apps support one callback URL per app, so keep local/dev and production separate.

### Clerk GitHub Social Connection

In the Clerk dashboard:

- Enable the GitHub social connection.
- Use custom GitHub OAuth credentials.
- Paste the GitHub OAuth app client ID and client secret.
- Configure repository-read scopes:
  - Use `public_repo` for public repositories only.
  - Use `repo` if private repositories must be available in the MVP.
- Confirm users can sign in with GitHub and Clerk stores the GitHub OAuth access token.

### Local Verification

- Sign out locally.
- Sign in with GitHub.
- Visit `/app`.
- Confirm repositories appear after profile setup.
- If the UI reports missing or insufficient access, re-check the Clerk GitHub scopes and sign in again.

## Result

- Added `lib/server/github.ts` for Clerk-backed GitHub OAuth token retrieval.
- Added `lib/server/github-repositories.ts` for GitHub repository listing, scope checks, response mapping, and API error messages.
- Added repository access states for signed-out, missing token, insufficient scope, empty repositories, errors, and ready repositories.
- Added a repository access panel on `/app` after profile setup.
- Added `pnpm smoke:github`.

## Verification Result

- Passed: `pnpm smoke:github`.
- Passed: `pnpm check`.
- Deferred: live GitHub repository listing until GitHub OAuth app and Clerk social connection setup are complete.

# Unit 04 - GitHub OAuth Login

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: Clerk GitHub OAuth is retained for authentication only; repository access moved to a GitHub App unit for read-only, repository-scoped permissions.
- Follow-up: execute `05-authenticated-app-shell.md`.
- Blockers: manual GitHub OAuth app and Clerk social connection configuration are required for GitHub sign-in verification.

## Goal

Enable GitHub-backed sign-in through Clerk without requesting repository scopes.

## Scope

- Configure Clerk GitHub OAuth for sign-in.
- Use the GitHub OAuth app only as an identity provider.
- Avoid repository scopes such as `public_repo` and `repo`.

## Non-Goals

- Do not create projects yet.
- Do not list repositories yet.
- Do not request broad repository OAuth scopes.
- Do not support non-GitHub providers in MVP.

## Implementation Notes

- GitHub is required from day one for identity.
- GitHub OAuth Apps do not provide a private repository read-only scope.
- Repository and commit access should use a GitHub App with fine-grained read-only permissions.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Sign in with GitHub.
  - Confirm the authenticated app recognizes the Clerk user.
- Deferred:
  - Production GitHub OAuth verification until production app credentials exist.
  - Repository listing until the GitHub App unit is complete.

## Completion Gate

This unit is complete when a user can sign in with GitHub and no repository OAuth scopes are required.

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
- Do not configure `public_repo` or `repo` scopes.
- Confirm users can sign in with GitHub.

### Local Verification

- Sign out locally.
- Sign in with GitHub.
- Visit `/app`.
- Confirm the authenticated workspace loads.

## Result

- Retained GitHub as the Clerk social sign-in provider.
- Removed OAuth-based repository listing direction from the MVP plan.
- Planned read-only repository access through a GitHub App instead.

## Verification Result

- Passed: `pnpm check`.
- Deferred: live GitHub sign-in verification until GitHub OAuth app and Clerk social connection setup are complete.

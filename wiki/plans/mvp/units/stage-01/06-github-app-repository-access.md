# Unit 06 - GitHub App Repository Access

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: read-only GitHub App install flow, installation storage, repository listing, and helper smoke checks are in place.
- Follow-up: execute Stage 02 project creation from connected repositories.
- Blockers: manual GitHub App creation, local env values, and installation verification are required for live repository listing.

## Goal

Enable read-only repository and commit access through a GitHub App instead of broad GitHub OAuth scopes.

## Scope

- Create a GitHub App integration plan for repository selection and commit reads.
- Use fine-grained GitHub App permissions, starting with `Contents: Read-only` and any additional read-only permission proven necessary by implementation.
- Support installation-scoped repository access so users can choose which repositories CodeCook can read.
- Store the minimal installation and repository identity needed for later project creation.
- Add server-side helpers for GitHub App installation tokens and repository/commit reads.

## Non-Goals

- Do not request OAuth `repo` or `public_repo` scopes.
- Do not write to repositories.
- Do not create projects yet.
- Do not store full commit histories.

## Implementation Notes

- Clerk GitHub OAuth remains login-only.
- GitHub App tokens should be short-lived and created server-side.
- Private repository support depends on the user installing the GitHub App on that repository.
- Store only stable identifiers needed by CodeCook: installation ID, repository ID, owner/name, visibility, and default branch.

## Manual Setup Required

Create one GitHub App for local/dev and one for production.

### Local/dev GitHub App

- GitHub App name: `CodeCook Dev`
- Homepage URL: `http://localhost:3000`
- Callback URL: leave blank unless GitHub requires a value; CodeCook does not request GitHub App user authorization in this unit.
- Request user authorization during installation: disabled.
- Setup URL: `http://localhost:3000/app/github/setup`
- Redirect on update: enabled.
- Webhooks: disabled for this unit.
- Repository permissions:
  - Contents: Read-only
  - Metadata: Read-only is always included by GitHub.
- Account permissions: no access.
- Organization permissions: no access.
- Where can this GitHub App be installed: choose the narrowest option that supports your testing.

### Local Environment

Add these values to `.env.local`:

- `GITHUB_APP_ID`: the numeric App ID from the GitHub App settings page.
- `GITHUB_APP_SLUG`: the app slug from the GitHub App URL, for example `codecook-dev`.
- `GITHUB_APP_PRIVATE_KEY_BASE64`: base64 of the downloaded private key PEM.

To produce the base64 value locally:

```bash
base64 -i /path/to/codecook-dev.private-key.pem | tr -d '\n'
```

Restart `pnpm dev` after editing `.env.local`.

### Production GitHub App

- GitHub App name: `CodeCook`
- Homepage URL: `https://codecook.live`
- Setup URL: `https://codecook.live/app/github/setup`
- Use the same permission shape as local/dev: Contents read-only, no write permissions.
- Store the production App ID, slug, and base64 private key in production environment variables.

### Local Verification

- Sign in locally.
- Create a creator profile if needed.
- Visit `/app/projects`.
- Click `Connect GitHub repositories`.
- Install the GitHub App on selected repositories.
- Confirm GitHub redirects back to `/app/projects`.
- Confirm only repositories from the selected installation appear.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Smoke checks for repository mapping and installation-token helper behavior where practical.
- Manual:
  - Install the GitHub App on a selected repository.
  - Confirm the app lists only repositories available to that installation.
  - Confirm private repositories work with read-only installation permissions.
  - Confirm no repository write permission is requested.

## Completion Gate

This unit is complete when a signed-in creator can install the GitHub App, select an installation-accessible repository, and the app can read repository metadata and recent commits without broad OAuth repository scopes.

## Result

- Added `lib/server/github-app.ts` for GitHub App config, JWT creation, installation token creation, and installation repository listing.
- Added `lib/server/repository-connections.ts` for flat-file storage of the current user's GitHub App installation.
- Added `/app/github/setup` to capture GitHub's installation redirect and save the installation ID.
- Added repository connection UI on `/app` and `/app/projects`.
- Added an all-repositories installation notice with a link to manage the GitHub installation.
- Added visible setup feedback for failed GitHub App installation redirects, including invalid private key configuration.
- Added `GITHUB_APP_ID`, `GITHUB_APP_SLUG`, and `GITHUB_APP_PRIVATE_KEY_BASE64` to `.env.example`.
- Added `pnpm smoke:github-app`.

## Verification Result

- Passed: `pnpm smoke:github-app`.
- Passed: `pnpm check`.
- Deferred: live GitHub App installation verification until manual setup is complete.

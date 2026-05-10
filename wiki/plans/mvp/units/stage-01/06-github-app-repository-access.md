# Unit 06 - GitHub App Repository Access

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

- Create a GitHub App for local/dev and production.
- Configure callback/setup URLs once implementation defines the exact routes.
- Generate and store the GitHub App ID, client ID, client secret, webhook secret, and private key in the appropriate environments.
- Install the GitHub App on selected repositories during local verification.

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

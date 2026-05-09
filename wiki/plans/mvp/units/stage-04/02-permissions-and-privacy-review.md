# Unit 02 - Permissions And Privacy Review

## Goal

Confirm MVP data access and public visibility boundaries are safe.

## Scope

- Review owner-only routes and mutations.
- Review public session/project access.
- Review GitHub token handling.
- Review generated content visibility.
- Confirm private repo data is not leaked unintentionally.

## Non-Goals

- Do not perform a full external security audit.
- Do not add enterprise permission models.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Authorization tests where practical.
- Manual:
  - Attempt owner actions signed out.
  - Attempt owner actions as another user.
  - Open public pages signed out.
  - Confirm draft/private content remains private.
- Deferred:
  - Formal security review until release candidate if not completed here.

## Completion Gate

This unit is complete when MVP ownership and public visibility boundaries are explicit and verified.

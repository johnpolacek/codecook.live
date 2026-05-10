# Stage 01 - Identity And Data Foundation

## Summary

- Status: draft
- Shape: MVP stage
- Current unit: complete
- Next action: start Stage 02 project creation
- Blockers: manual GitHub App setup and live installation verification
- Validation: `pnpm lint`, `pnpm build`, auth sign-in smoke checks, local data smoke checks, S3 config checks

## Goal

Create the technical foundation for the MVP: GitHub-backed identity, durable flat-file app data, immutable S3-compatible artifact storage, an authenticated app shell, and read-only GitHub App repository access that future units can build on.

## Completion Gate

Stage 01 is complete when a user can sign in with GitHub, land in an authenticated app shell, have a flat-file-backed user/profile record, and install a GitHub App that authorizes read-only repository and commit access needed by later stages.

## Unit Sequence

1. `units/stage-01/01-clerk-auth-foundation.md`
2. `units/stage-01/02-flat-file-and-s3-foundation.md`
3. `units/stage-01/03-user-profile-model.md`
4. `units/stage-01/04-github-oauth-login.md`
5. `units/stage-01/05-authenticated-app-shell.md`
6. `units/stage-01/06-github-app-repository-access.md`

## Key Decisions

- Clerk owns authentication and GitHub OAuth sign-in only.
- Flat-file JSON owns mutable MVP app data.
- S3-compatible storage owns immutable artifacts such as screenshots, generated media, captions, and exports.
- GitHub is the source of truth for repositories, commits, and diffs.
- A GitHub App owns repository access so CodeCook can request read-only, installation-scoped permissions.
- Product UI must not expose implementation status, stack choices, roadmap mechanics, or planning placeholders.

## Follow-Up Stage

After this stage, continue to `stage-02-projects-and-live-sessions.md`.

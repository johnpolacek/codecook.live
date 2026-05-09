# Stage 01 - Identity And Data Foundation

## Summary

- Status: draft
- Shape: MVP stage
- Current unit: Unit 02 - Convex App Foundation
- Next action: implement Convex setup and provider wiring
- Blockers: Convex project setup
- Validation: `pnpm lint`, `pnpm build`, auth sign-in smoke checks, Convex function checks

## Goal

Create the technical foundation for the MVP: GitHub-backed identity, durable app data, realtime-ready state, and an authenticated app shell that future units can build on.

## Completion Gate

Stage 01 is complete when a user can sign in with GitHub, land in an authenticated app shell, have a Convex-backed user/profile record, and authorize the app to read repository and commit data needed by later stages.

## Unit Sequence

1. `units/stage-01/01-clerk-auth-foundation.md`
2. `units/stage-01/02-convex-app-foundation.md`
3. `units/stage-01/03-user-profile-model.md`
4. `units/stage-01/04-github-oauth-repository-access.md`
5. `units/stage-01/05-authenticated-app-shell.md`

## Key Decisions

- Clerk owns authentication and GitHub OAuth.
- Convex owns structured app data and realtime session state.
- GitHub is the source of truth for repositories, commits, and diffs.
- Product UI must not expose implementation status, stack choices, roadmap mechanics, or planning placeholders.

## Follow-Up Stage

After this stage, continue to `stage-02-projects-and-live-sessions.md`.

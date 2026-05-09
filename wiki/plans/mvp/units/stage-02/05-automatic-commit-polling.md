# Unit 05 - Automatic Commit Polling

## Goal

Automatically detect new commits during live sessions.

## Scope

- Poll GitHub for new commits on active sessions.
- Add detected commits to the session as candidate context or timeline events.
- Avoid duplicate commits.
- Show polling status and recoverable errors to the creator.

## Non-Goals

- Do not require webhooks for MVP.
- Do not auto-publish generated content.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Tests for duplicate detection where practical.
- Manual:
  - Start a session.
  - Push or identify a new commit.
  - Confirm polling detects it.
  - Confirm duplicate detection works.
- Deferred:
  - GitHub webhook support until post-MVP.

## Completion Gate

This unit is complete when active sessions can discover new commits automatically without duplicate timeline noise.

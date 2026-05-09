# Unit 04 - MVP Acceptance Pass

## Goal

Verify the complete MVP journey end to end.

## Scope

- Run the canonical MVP journey from new user to public page and copy/export.
- Confirm validation status and remaining known limitations.
- Update roadmap and plans with what ships next.
- Record launch-readiness gaps.

## Non-Goals

- Do not add new feature scope during acceptance.
- Do not hide known limitations; record them clearly.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Any provider-specific checks added during implementation.
- Manual:
  - Sign in with GitHub.
  - Create profile.
  - Connect repository.
  - Create project.
  - Start live session.
  - Select commits.
  - Add manual update.
  - Confirm automatic commit polling.
  - Generate and edit recap.
  - Publish public page.
  - Copy/export content.
- Deferred:
  - None unless an external provider outage blocks a step; if so, record the outage and retry path.

## Completion Gate

This unit is complete when the MVP journey works end to end and the remaining launch gaps are explicit.

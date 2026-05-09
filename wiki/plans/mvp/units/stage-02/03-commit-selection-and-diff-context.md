# Unit 03 - Commit Selection And Diff Context

## Goal

Let creators select commits that will ground the session and future recap.

## Scope

- Fetch recent commits for the project repository.
- Show commit metadata clearly.
- Let the creator select commits for a session.
- Fetch and store or cache enough diff context for generation.

## Non-Goals

- Do not summarize commits with AI in this unit.
- Do not store unnecessary full repository data.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Tests for commit/diff normalization where practical.
- Manual:
  - View commits for a connected repository.
  - Select and deselect commits.
  - Confirm selected commits persist on the session.
  - Confirm large diff/error states are handled.
- Deferred:
  - Generation quality checks until Stage 03.

## Completion Gate

This unit is complete when selected commits and diff context are available as reliable session inputs.

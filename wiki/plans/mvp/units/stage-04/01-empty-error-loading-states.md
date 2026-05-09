# Unit 01 - Empty Error Loading States

## Goal

Make the MVP workflows resilient and understandable across empty, loading, and error states.

## Scope

- Review auth, profile, repository, project, session, commit, AI, and publishing states.
- Add customer-facing empty states.
- Add recoverable error states.
- Add clear loading states without layout jumps.

## Non-Goals

- Do not add new product workflows.
- Do not expose technical provider names in user-facing errors unless required for action.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Walk through the MVP journey with empty data.
  - Simulate or trigger common errors where practical.
  - Confirm copy is customer-facing and actionable.
- Deferred:
  - Exhaustive network chaos testing until post-MVP.

## Completion Gate

This unit is complete when the MVP journey has no dead-end placeholder, blank, or implementation-flavored states.

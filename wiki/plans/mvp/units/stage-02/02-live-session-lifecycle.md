# Unit 02 - Live Session Lifecycle

## Goal

Add the core session lifecycle for active shipping work.

## Scope

- Create a session for a project.
- Support lifecycle states: draft, live, paused, shipped, archived.
- Track start, pause, resume, ship, and archive timestamps.
- Add owner controls for lifecycle transitions.

## Non-Goals

- Do not add AI recaps yet.
- Do not add direct external publishing.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Flat-file data smoke checks.
- Manual:
  - Start, pause, resume, ship, and archive a session.
  - Confirm invalid state transitions are blocked.
  - Confirm state survives refresh.
- Deferred:
  - Public page polish until Stage 03.

## Completion Gate

This unit is complete when a project owner can manage a durable live shipping session lifecycle.

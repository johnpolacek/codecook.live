# Stage 04 - MVP Hardening

## Summary

- Status: draft
- Shape: MVP stage
- Current unit: none
- Next action: start after Stage 03 completion
- Blockers: complete MVP journey through public publishing
- Validation: `pnpm lint`, `pnpm build`, end-to-end browser smoke pass, responsive checks, privacy checks

## Goal

Harden the MVP for a credible first release: reliable empty/error/loading states, privacy boundaries, responsive layout, basic observability, and a complete acceptance pass through the canonical journey.

## Completion Gate

Stage 04 is complete when the canonical MVP journey works end to end without development-only UI, broken states, or unclear privacy boundaries.

## Unit Sequence

1. `units/stage-04/01-empty-error-loading-states.md`
2. `units/stage-04/02-permissions-and-privacy-review.md`
3. `units/stage-04/03-responsive-public-and-app-polish.md`
4. `units/stage-04/04-mvp-acceptance-pass.md`

## Key Decisions

- The MVP is for solo developers, not teams.
- Public pages must be legible to anonymous viewers without GitHub context.
- Placeholder UI must feel real and customer-facing; never expose roadmap, stack, or work-in-progress language.

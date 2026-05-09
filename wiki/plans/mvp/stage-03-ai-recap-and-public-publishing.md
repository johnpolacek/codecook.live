# Stage 03 - AI Recap And Public Publishing

## Summary

- Status: draft
- Shape: MVP stage
- Current unit: none
- Next action: start after Stage 02 completion
- Blockers: project/session/commit data model, live timeline, selected commit context
- Validation: `pnpm lint`, `pnpm build`, generation grounding checks, browser checks for public pages and copy/export

## Goal

Turn live session context into useful creator-controlled content: AI-generated recap drafts, manual editing, public session pages, and copy/export for external distribution.

## Completion Gate

Stage 03 is complete when a creator can generate and edit a recap from selected commits and session updates, publish a public CodeCook session page, and copy/export the generated content.

## Unit Sequence

1. `units/stage-03/01-ai-generation-contract.md`
2. `units/stage-03/02-recap-editor.md`
3. `units/stage-03/03-public-session-page.md`
4. `units/stage-03/04-copy-export-flow.md`

## Key Decisions

- AI generation is in the MVP.
- Generated content must remain editable and visibly grounded in selected commit/session context.
- Direct external platform posting is deferred; MVP distribution is copy/export plus public CodeCook page.

## Follow-Up Stage

After this stage, continue to `stage-04-mvp-hardening.md`.

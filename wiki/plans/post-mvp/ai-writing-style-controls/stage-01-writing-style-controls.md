# Stage 01 - Writing Style Controls

## Summary

- Status: deferred
- Shape: post-MVP feature stage
- Current unit: none
- Next action: execute `units/stage-01/01-style-settings-model.md`
- Blockers: MVP AI generation, recap editor, copy/export, and public session page
- Validation: `pnpm lint`, `pnpm build`, style fixture checks, preview/manual generation review

## Goal

Add creator-controlled style settings for AI-generated content, starting with account-level defaults and ending with optional format/platform overrides.

## Completion Gate

This stage is complete when creators can set a default writing style, preview it, apply it to generated output, and optionally layer format-specific overrides without weakening factual grounding.

## Unit Sequence

1. `units/stage-01/01-style-settings-model.md`
2. `units/stage-01/02-style-settings-ui.md`
3. `units/stage-01/03-preview-sample-flow.md`
4. `units/stage-01/04-generation-integration.md`
5. `units/stage-01/05-format-and-platform-overrides.md`

## Key Decisions

- Style controls are account-level by default.
- The default style is `Clear builder voice`.
- Users customize primarily with a plain-language brief.
- Product UI must use customer-facing language such as "Writing Style," "Preset," "Custom guidance," and "Preview."
- Product UI must avoid "prompt," model/provider names, and implementation terms.

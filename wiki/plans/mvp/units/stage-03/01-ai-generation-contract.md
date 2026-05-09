# Unit 01 - AI Generation Contract

## Goal

Define and implement the data contract for AI recap generation.

## Scope

- Define the session context sent to the model.
- Include selected commits, diff summaries, manual updates, project metadata, and creator intent.
- Add server-side generation function with structured output.
- Add safeguards against unsupported claims.

## Non-Goals

- Do not add multiple platform-specific formats yet.
- Do not auto-publish AI output.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Schema validation tests for generated output where practical.
- Manual:
  - Generate from a small session.
  - Compare output against selected commits and updates.
  - Confirm output remains editable and grounded.
- Deferred:
  - Full prompt evaluation suite until after MVP behavior stabilizes.

## Completion Gate

This unit is complete when the app can generate a grounded recap draft from session context.

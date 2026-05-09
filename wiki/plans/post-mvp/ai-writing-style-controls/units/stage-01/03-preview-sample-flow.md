# Unit 03 - Preview Sample Flow

## Goal

Let creators preview how unsaved style settings affect generated writing.

## Scope

- Fixed demo shipping context.
- Preview generation from unsaved settings.
- Save after preview or explicit skip.
- Loading, error, and retry states.

## Non-Goals

- Do not use private user project data for the fixed preview sample.
- Do not require preview to block every save if the creator explicitly skips it.
- Do not evaluate long-term prompt quality in this unit.

## Implementation Notes

- The preview should make style effects clear before settings are saved.
- The preview sample must be customer-facing and should not mention implementation details.
- Preview failures should be recoverable and should not corrupt saved settings.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture test for preview input shape where practical.
- Manual:
  - Preview reflects selected preset.
  - Preview reflects custom brief.
  - Preview errors are recoverable.
- Deferred:
  - Full prompt evaluation suite until style controls are used in real generation.

## Completion Gate

Complete when creators can understand the effect of style settings before saving them.

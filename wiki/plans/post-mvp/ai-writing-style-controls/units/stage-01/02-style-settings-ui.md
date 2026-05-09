# Unit 02 - Style Settings UI

## Goal

Add a creator-facing settings panel for writing style.

## Scope

- Preset dropdown.
- Plain-language custom style brief.
- Customer-facing helper copy.
- Save/cancel behavior.
- Empty/default state.

## Non-Goals

- Do not build prompt-builder UI.
- Do not expose model/provider details.
- Do not add preview generation yet.

## Implementation Notes

- Use labels such as "Writing Style," "Preset," "Custom guidance," and "Preview."
- Avoid "prompt," "model," "system message," "temperature," and other implementation terms.
- The default state should feel ready to use, not incomplete.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - User can choose a preset.
  - User can edit custom guidance.
  - UI copy avoids "prompt," provider names, and implementation language.
- Deferred:
  - Mobile polish until the feature is integrated into the full settings surface.

## Completion Gate

Complete when creators can view and edit writing style settings in a product-quality settings panel.

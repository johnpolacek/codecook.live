# Unit 01 - AI Voiceover

## Goal

Add optional AI-generated narration.

## Scope

- Generate narration from approved script.
- Sync captions to narration.
- Let creators choose captions-only or voiceover render.
- Store audio asset and render metadata.

## Non-Goals

- Do not make voiceover required.
- Do not choose the voice provider before implementation planning.
- Do not remove captions-only fallback.

## Implementation Notes

- Captions-only remains the baseline.
- Voiceover should use approved script content.
- Audio timing should drive or align caption timing where practical.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Audio duration/metadata validation where practical.
- Manual:
  - Listen to generated voiceover.
  - Confirm captions match narration.
  - Confirm fallback to captions-only works.
- Deferred:
  - Voice provider selection until implementation planning.

## Completion Gate

Complete when creators can render the same short with or without AI narration.

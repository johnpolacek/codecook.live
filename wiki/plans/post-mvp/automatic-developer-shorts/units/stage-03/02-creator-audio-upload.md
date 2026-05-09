# Unit 02 - Creator Audio Upload

## Goal

Support uploaded narration or music.

## Scope

- Accept creator-uploaded audio.
- Validate file type, size, and duration.
- Trim or align audio to short duration.
- Store audio asset and usage metadata.

## Non-Goals

- Do not implement licensing enforcement beyond user-facing guidance.
- Do not require uploaded audio for video export.
- Do not add full audio editing tools.

## Implementation Notes

- Uploaded audio should be optional.
- Invalid audio states should be recoverable.
- Render metadata should record whether uploaded audio was used.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Upload validation tests where practical.
- Manual:
  - Upload narration.
  - Upload music.
  - Confirm invalid files are rejected clearly.
  - Confirm rendered output includes uploaded audio.
- Deferred:
  - Rights/licensing enforcement beyond user-facing guidance.

## Completion Gate

Complete when creators can use their own audio in generated shorts.

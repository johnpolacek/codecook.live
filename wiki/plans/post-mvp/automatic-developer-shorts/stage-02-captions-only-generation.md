# Stage 02 - Captions-Only Short Generation

## Summary

- Status: deferred
- Shape: post-MVP feature stage
- Current unit: none
- Next action: start after Stage 01 completion
- Blockers: content contract, renderer decision, review model, artifact storage
- Validation: `pnpm lint`, `pnpm build`, generation fixtures, render smoke checks, MP4 playback checks

## Goal

Generate downloadable, platform-ready shorts without audio complexity.

## Completion Gate

This stage is complete when creators can generate, review, render, persist, and download captions-only MP4 variants for YouTube Shorts, TikTok, and X.

## Unit Sequence

1. `units/stage-02/01-short-concept-generator.md`
2. `units/stage-02/02-storyboard-and-script-generator.md`
3. `units/stage-02/03-platform-variant-renderer.md`
4. `units/stage-02/04-downloadable-export.md`

## Key Decisions

- Captions-only is the first deliverable.
- Generated concepts must be educational/useful to developers, not promotional.
- Platform variants are separate renders.
- Duration defaults to each platform's best practice, but remains configurable.

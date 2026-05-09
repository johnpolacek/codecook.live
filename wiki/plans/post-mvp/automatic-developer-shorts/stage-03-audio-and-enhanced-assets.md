# Stage 03 - Audio And Enhanced Assets

## Summary

- Status: deferred
- Shape: post-MVP feature stage
- Current unit: none
- Next action: start after Stage 02 completion
- Blockers: reliable captions-only video generation and artifact storage
- Validation: `pnpm lint`, `pnpm build`, audio metadata checks, visual review

## Goal

Expand beyond captions-only after reliable video generation works.

## Completion Gate

This stage is complete when creators can choose captions-only, AI voiceover, or uploaded audio, and can optionally use generated visuals without replacing source-grounded session evidence.

## Unit Sequence

1. `units/stage-03/01-ai-voiceover.md`
2. `units/stage-03/02-creator-audio-upload.md`
3. `units/stage-03/03-generative-visual-enhancements.md`

## Key Decisions

- Audio follows captions-only video.
- AI voiceover and creator uploads are optional modes.
- Generated imagery, video, personas, and characters are optional enhancements requiring creator approval.

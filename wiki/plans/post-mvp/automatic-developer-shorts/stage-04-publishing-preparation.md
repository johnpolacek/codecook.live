# Stage 04 - Publishing Preparation

## Summary

- Status: deferred
- Shape: post-MVP feature stage
- Current unit: none
- Next action: start after Stage 03 completion
- Blockers: persisted rendered shorts, thumbnails, captions, and metadata
- Validation: `pnpm lint`, `pnpm build`, metadata validation, manual platform requirement review

## Goal

Prepare generated shorts for future direct upload and automatic posting without implementing posting yet.

## Completion Gate

This stage is complete when generated shorts are durable reusable assets with enough metadata for future YouTube, TikTok, and X posting integrations.

## Unit Sequence

1. `units/stage-04/01-short-asset-library.md`
2. `units/stage-04/02-posting-metadata-contract.md`
3. `units/stage-04/03-direct-posting-readiness-review.md`

## Key Decisions

- Direct upload and automatic posting are future features.
- This stage prepares metadata, assets, and requirements for a later direct posting plan.

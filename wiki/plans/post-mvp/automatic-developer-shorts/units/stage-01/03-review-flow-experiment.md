# Unit 03 - Review Flow Experiment

## Goal

Choose the creator review and correction model.

## Scope

- Evaluate storyboard review.
- Evaluate preview-only regenerate flow.
- Evaluate timeline-style review.
- Choose the simplest flow that lets creators trust and correct a short before export.

## Non-Goals

- Do not build a full video editor unless the experiment proves it is necessary.
- Do not hide source references from creator review.
- Do not force direct export without a trust/correction step.

## Implementation Notes

- Review must expose enough source context for creator trust.
- The first review model should favor speed and confidence over professional video-editing depth.
- Regeneration should be possible at the smallest practical level chosen by the review model.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build` if prototypes touch app code.
- Manual:
  - Review the flow against a real session.
  - Confirm creators can see source references.
  - Confirm creators can correct bad concepts or scenes.
- Deferred:
  - Full usability testing until an implementation exists.

## Completion Gate

Complete when the first review model is chosen and future units know what creators can edit before rendering.

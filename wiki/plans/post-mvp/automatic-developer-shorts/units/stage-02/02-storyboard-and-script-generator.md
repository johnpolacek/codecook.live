# Unit 02 - Storyboard And Script Generator

## Goal

Convert a selected concept into scenes.

## Scope

- Generate scene outline.
- Generate captions/script.
- Assign visual source per scene.
- Include timing estimates and source references.
- Keep writing specific, practical, and non-promotional.

## Non-Goals

- Do not render final video in this unit.
- Do not add audio modes yet.
- Do not use visuals without a source or creator approval.

## Implementation Notes

- Scenes should be short and readable in vertical video.
- Each scene should have a visual source, caption text, timing estimate, and source references.
- Scripts should favor useful developer lessons over broad motivational copy.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture tests for scene/source reference completeness.
- Manual:
  - Review a storyboard for clarity and pacing.
  - Confirm no scene makes unsupported claims.
- Deferred:
  - Caption timing precision until rendering integration.

## Completion Gate

Complete when a selected concept can become a source-grounded storyboard ready for render.

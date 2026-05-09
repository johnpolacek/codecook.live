# Unit 03 - Platform Variant Renderer

## Goal

Render platform-specific captions-only variants.

## Scope

- Generate separate YouTube Shorts, TikTok, and X variants.
- Default each variant to target platform best-practice duration.
- Allow configurable duration.
- Use platform-safe caption margins and 9:16 layouts.
- Render animated text, commits, diffs, screenshots, and project metadata.

## Non-Goals

- Do not implement voiceover or uploaded audio yet.
- Do not implement direct platform posting.
- Do not render unsupported generic visuals without creator approval.

## Implementation Notes

- Output should be a vertical MP4 suitable for manual upload.
- Captions must remain readable within common platform UI overlays.
- Platform variants can share storyboard content but may differ in pacing, safe areas, and companion text.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Render smoke test per platform variant.
  - Caption safe-margin checks for vertical layouts.
- Manual:
  - Inspect rendered MP4s on desktop and mobile-sized previews.
  - Confirm text is readable and not covered by expected platform UI areas.
- Deferred:
  - Direct upload validation until a future posting plan.

## Completion Gate

Complete when the same storyboard can render usable YouTube Shorts, TikTok, and X MP4 variants.

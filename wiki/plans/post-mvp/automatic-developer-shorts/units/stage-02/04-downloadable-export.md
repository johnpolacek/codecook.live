# Unit 04 - Downloadable Export

## Goal

Persist and expose generated short assets.

## Scope

- Store rendered MP4 files.
- Store thumbnails.
- Store captions/subtitles.
- Store render settings and metadata.
- Generate companion upload title, description, hashtags, and public CodeCook link.
- Support re-download.

## Non-Goals

- Do not implement direct upload or automatic posting.
- Do not finalize long-term retention policy unless artifact storage requires it.
- Do not make generated assets canonical app state.

## Implementation Notes

- Generated video assets are artifacts.
- Companion upload copy should remain source-aligned.
- Saved render settings should support future re-rendering and posting.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Asset metadata validation.
- Manual:
  - Download each MP4 variant.
  - Inspect playback.
  - Confirm thumbnail and captions are available.
  - Confirm generated upload copy is useful and source-aligned.
- Deferred:
  - Long-term retention policy until artifact storage decisions are final.

## Completion Gate

Complete when creators can download platform-specific shorts and companion upload copy from stored generated assets.

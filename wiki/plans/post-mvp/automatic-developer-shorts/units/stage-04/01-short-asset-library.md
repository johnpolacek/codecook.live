# Unit 01 - Short Asset Library

## Goal

Create a reusable library of generated shorts.

## Scope

- List generated shorts by project and session.
- Show platform variants, status, duration, thumbnail, and download links.
- Support re-download and re-render from saved settings.

## Non-Goals

- Do not implement direct posting.
- Do not build advanced search/filtering unless usage volume justifies it.
- Do not replace project/session pages with the asset library.

## Implementation Notes

- Generated shorts should be durable reusable assets.
- The library should make prior renders easy to find by project/session.
- Saved settings should support future re-rendering.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Find prior shorts by project/session.
  - Download an existing variant.
  - Re-render from saved settings.
- Deferred:
  - Search/filter polish until usage volume justifies it.

## Completion Gate

Complete when generated shorts are durable reusable assets, not one-off downloads.

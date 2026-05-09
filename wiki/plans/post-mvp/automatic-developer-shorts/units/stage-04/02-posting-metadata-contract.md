# Unit 02 - Posting Metadata Contract

## Goal

Prepare metadata needed for future direct posting.

## Scope

- Store title.
- Store description.
- Store hashtags.
- Store platform target.
- Store generated captions.
- Store public CodeCook link.
- Store source session.

## Non-Goals

- Do not call platform posting APIs.
- Do not validate metadata against API-specific requirements yet.
- Do not auto-publish.

## Implementation Notes

- Metadata should support manual upload immediately.
- Metadata should be structured enough for future YouTube, TikTok, and X posting integrations.
- Public CodeCook link should be available when the source session has one.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Metadata validation checks.
- Manual:
  - Review metadata for YouTube Shorts, TikTok, and X variants.
  - Confirm metadata can be copied for manual upload.
- Deferred:
  - API-specific validation until direct posting work begins.

## Completion Gate

Complete when each rendered short has enough metadata for future direct upload integrations.

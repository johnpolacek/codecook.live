# Unit 04 - Copy Export Flow

## Goal

Let creators copy or export generated session content for external sharing.

## Scope

- Add copy actions for recap content.
- Support at least one clean plain text or Markdown export.
- Include public CodeCook page link in exportable content.
- Show copy success/failure states.

## Non-Goals

- Do not post directly to Bluesky, X, LinkedIn, or other platforms.
- Do not build scheduling.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Copy recap content.
  - Paste into a plain text editor and verify formatting.
  - Confirm public page link is included where expected.
- Deferred:
  - Multiple platform-specific variants until post-MVP unless MVP testing proves it necessary.

## Completion Gate

This unit is complete when a creator can leave CodeCook with polished content and a public page link ready to share.

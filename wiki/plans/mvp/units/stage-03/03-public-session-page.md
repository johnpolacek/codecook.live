# Unit 03 - Public Session Page

## Goal

Publish a public CodeCook page for a live or shipped session.

## Scope

- Add public session route.
- Show project identity, session state, timeline updates, selected commits, and recap content when published.
- Support public/private or draft/published visibility.
- Make page useful to anonymous viewers without GitHub context.

## Non-Goals

- Do not add comments or chat.
- Do not add platform-specific posting.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Publish a session.
  - Open the page signed out.
  - Confirm draft/private sessions are not public.
  - Confirm page explains what shipped and why it matters.
- Deferred:
  - SEO polish until Stage 04 unless blocking share previews.

## Completion Gate

This unit is complete when a session can be published as a public page that anonymous viewers can understand.

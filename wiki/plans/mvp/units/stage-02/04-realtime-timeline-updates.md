# Unit 04 - Realtime Timeline Updates

## Goal

Make live sessions observable through realtime manual updates.

## Scope

- Add timeline update model.
- Let owners post manual session updates.
- Render updates in session timeline order.
- Use Convex realtime subscriptions for owner and public views.

## Non-Goals

- Do not add chat.
- Do not add notifications.
- Do not add AI generation yet.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Convex validation/codegen checks.
- Manual:
  - Open owner and public/session preview views.
  - Post an update.
  - Confirm the update appears without manual refresh.
  - Confirm empty and error states are understandable.
- Deferred:
  - Multi-viewer load testing until hardening.

## Completion Gate

This unit is complete when a session can be followed through realtime manual timeline updates.

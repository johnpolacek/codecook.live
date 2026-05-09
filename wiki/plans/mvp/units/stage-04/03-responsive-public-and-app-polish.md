# Unit 03 - Responsive Public And App Polish

## Goal

Make the MVP feel credible on desktop and mobile.

## Scope

- Review landing page, authenticated workspace, project page, session editor, and public session page.
- Fix text overflow, awkward spacing, and interaction issues.
- Confirm keyboard reachability for core controls.
- Preserve dense developer workflows without marketing-style clutter.

## Non-Goals

- Do not redesign the full brand system.
- Do not add animation or decorative complexity unless it improves clarity.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Browser checks at mobile and desktop widths.
  - Confirm core controls are reachable by keyboard.
  - Confirm public pages are understandable when signed out.
- Deferred:
  - Full accessibility audit until after MVP unless critical issues appear.

## Completion Gate

This unit is complete when the MVP journey is visually coherent and usable across expected viewport sizes.

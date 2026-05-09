# Unit 05 - Authenticated App Shell

## Goal

Create the signed-in workspace structure for MVP workflows.

## Scope

- Add authenticated app navigation.
- Add dashboard/workspace route.
- Route incomplete users to profile setup.
- Route complete users to project creation or project list.
- Add customer-facing empty states.

## Non-Goals

- Do not build full project/session workflows in this unit.
- Do not expose technical setup language or implementation placeholders.

## Implementation Notes

- The app shell should feel like a real product even before every workflow is implemented.
- Keep navigation small: dashboard, projects, profile/account as needed.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Anonymous user sees landing page.
  - Signed-in user reaches workspace.
  - User without profile is guided to creator setup.
  - User with profile sees the next useful product action.
- Deferred:
  - Full responsive polish until Stage 04.

## Completion Gate

This unit is complete when authenticated users have a coherent workspace shell and routing foundation for the rest of the MVP.

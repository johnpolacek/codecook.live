# Unit 05 - Authenticated App Shell

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: authenticated workspace shell, dashboard, projects, and profile routes are in place with customer-facing empty states.
- Follow-up: execute `06-github-app-repository-access.md`.
- Blockers: interactive Clerk sign-in for full browser verification remains manual.

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

## Result

- Added `app/app/layout.tsx` and `components/app/workspace-shell.tsx` for authenticated app navigation.
- Added `/app/profile` for profile setup/editing.
- Added `/app/projects` with a project empty state and profile guard.
- Updated `/app` to route incomplete users to creator setup content and complete users to a dashboard with next actions.
- Updated `/` to redirect signed-in users into `/app` instead of showing marketing content.
- Kept repository connection as a customer-facing next step without exposing implementation details.

## Verification Result

- Passed: `pnpm check`.
- Passed: public `/` route smoke check.
- Passed: signed-out Clerk redirect checks for `/app` and `/app/projects`.
- Deferred: signed-in browser workflow verification until a Clerk session is available.

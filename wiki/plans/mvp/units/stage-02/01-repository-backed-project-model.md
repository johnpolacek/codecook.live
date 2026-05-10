# Unit 01 - Repository-Backed Project Model

## Summary

- Status: completed
- Completed: 2026-05-10
- Result: connected GitHub repositories now appear as CodeCook projects automatically.
- Follow-up: execute `02-live-session-lifecycle.md`.
- Blockers: project detail/session routes are still pending.

## Goal

Treat each connected GitHub repository as a CodeCook project without requiring a separate project creation step.

## Scope

- Derive project cards from connected GitHub App repositories.
- Remove the manual “create project from repository” concept from the MVP workflow.
- Show connected repositories as projects on `/app/projects`.
- Keep project-specific behavior ready for later session routes.

## Non-Goals

- Do not implement live sessions yet.
- Do not add project detail pages yet.
- Do not import full commit history beyond metadata already shown by the repository connection.

## Implementation Notes

- A CodeCook project is the app-specific view of a connected repository.
- Project-specific data can be added later when sessions, recaps, and publishing state need durable records.
- The GitHub installation and repository IDs remain the canonical repository identity.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Existing GitHub App smoke checks.
- Manual:
  - Connect one or more repositories.
  - Confirm each connected repository appears as a project.
  - Confirm the stale “create project” empty state no longer appears when repositories are connected.

## Completion Gate

This unit is complete when connected repositories are surfaced as durable project candidates without an extra project creation form.

## Result

- Added `components/app/repository-project-list.tsx`.
- Updated `/app/projects` to render connected repositories as projects.
- Updated `/app` to show repository-backed project cards.
- Replaced the previous project creation unit direction with repository-backed project modeling.

## Verification Result

- Passed: `pnpm smoke:github-app`.
- Passed: `pnpm check`.

# Unit 01 - Project Create From Repository

## Goal

Let a creator create a CodeCook project from a GitHub repository.

## Scope

- Select a GitHub repository.
- Create a Convex project record.
- Store repository identity, owner, name, visibility, default branch, and public project slug.
- Show a project detail page for the creator.

## Non-Goals

- Do not implement live sessions yet.
- Do not import full commit history beyond initial metadata needed for setup.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Convex validation/codegen checks.
- Manual:
  - Select a repository and create a project.
  - Confirm duplicate project handling.
  - Confirm project persists after refresh.
- Deferred:
  - Public project page polish until later units.

## Completion Gate

This unit is complete when a creator can create and view a durable project from a GitHub repository.

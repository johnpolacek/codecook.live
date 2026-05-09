# Unit 02 - Recap Editor

## Goal

Let creators edit and save generated recap content.

## Scope

- Add recap draft model.
- Render generated recap in an editor.
- Support manual edits and save state.
- Preserve source context links to selected commits and timeline updates.

## Non-Goals

- Do not build a general blog editor.
- Do not support collaborative editing.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Generate a recap.
  - Edit and save it.
  - Refresh and confirm changes persist.
  - Confirm source context remains visible enough for trust.
- Deferred:
  - Rich formatting polish until hardening unless needed for copy/export.

## Completion Gate

This unit is complete when generated recap content can be edited, saved, and trusted by the creator.

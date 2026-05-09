# Confirmed Cruft Cleanup

## Summary

- Status: completed
- Shape: compact maintenance plan
- Current unit: none
- Next action: return to the MVP foundation plan
- Blockers: none
- Validation: `pnpm lint`, `pnpm build`, reference sweep, and landing-page/share-image visual check

## Intent

Remove leftovers from the previous CodeCook.live incarnation that are clearly stale, broken, or misleading while preserving reusable UI scaffolding for the upcoming Clerk, Convex, and live-session rebuild.

## Scope

- Delete old mock commit tooling that targets a different repository and depends on undeclared packages.
- Remove stale empty directories from deleted API, hooks, and types surfaces.
- Remove old session/message utilities that have no current references.
- Replace stale Open Graph screenshot imagery with a fresh current landing-page preview.
- Make package scripts safe for local verification without auto-pushing to `main`.

## Non-Goals

- Do not prune shadcn/Radix primitives or package dependencies kept as near-term scaffolding.
- Do not introduce Clerk, Convex, GitHub OAuth, AI, or artifact storage.
- Do not change the public landing-page copy or product direction beyond refreshing stale image metadata.

## Execution Units

### Unit 01 - Confirmed Cleanup

Apply the scoped cleanup, regenerate the share preview, and update project context when complete.

#### Verification

- Automated: `pnpm lint` and `pnpm build`.
- Search: confirm stale runtime references are gone with `rg` for the removed script, utility, screenshot, auto-push helper, and waitlist path names.
- Manual: inspect the refreshed `public/images/screenshot.png` to ensure it reflects the current commit-to-content landing shell.

#### Completion Gate

Complete when the app validates, the current share preview no longer displays old live-coding/dashboard UI, and remaining old-product references are only intentional wiki history.

#### Result

- Completed on 2026-05-09.
- Removed the old mock commit script, stale message-time utility, stale session screenshot, and empty legacy API/hooks/types/script directories.
- Replaced the Open Graph screenshot with a current landing-page capture.
- Replaced auto-push package scripts with local verification/status scripts.
- Verification passed: `pnpm lint`, `pnpm build`, reference sweep, and screenshot inspection.

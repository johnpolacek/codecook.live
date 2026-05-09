# Remove Supabase Fresh Base

## Summary

- Status: complete
- Shape: compact maintenance plan
- Current unit: none
- Next action: plan Clerk auth and Convex data foundation
- Blockers: none
- Validation: `pnpm lint`, `pnpm build`, `rg "supabase|SUPABASE_|NEXT_PUBLIC_SUPABASE|@supabase"`

## Goal

Reset the project to a fresh no-database base before introducing Clerk, Convex, and S3 artifact storage. The old Supabase schema and generated database types are not authoritative and should not be migrated.

## Scope

- Remove Supabase dependencies, scripts, generated types, client helpers, migrations, and auth callback route.
- Replace old Supabase-backed pages/actions/components with placeholders or no-op states so the marketing shell and static routes remain usable.
- Preserve S3 helpers, AI helpers, GitHub API utility surfaces, and UI components that can be reused by the future Convex-backed product.

## Non-Goals

- Do not create Convex schema or Clerk auth in this pass.
- Do not preserve or migrate old Supabase data.
- Do not operate on the old remote Supabase account.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - `rg "supabase|SUPABASE_|NEXT_PUBLIC_SUPABASE|@supabase"`
- Manual:
  - Confirm public landing/auth/static pages still render after Supabase removal.

## Completion Gate

This plan is complete when the repo has no code/package references to Supabase, no Supabase schema artifacts, and validation passes from the fresh no-database base.

## Completion Notes

- Removed the Supabase package dependencies, DB scripts, clients, generated types, auth callback route, and `supabase/` migration/config tree.
- Replaced old database-backed routes/actions/components with placeholder or disabled states until Clerk and Convex are configured.
- Validation passed: `pnpm lint`, `pnpm build`, runtime code search for Supabase references, and curl smoke checks for `/`, `/signin`, `/signup`, `/welcome`, and a placeholder session route.

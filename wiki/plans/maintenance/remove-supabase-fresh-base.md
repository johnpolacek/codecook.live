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
- Replace old Supabase-backed behavior with a clean no-database base so the marketing shell remains usable.
- Preserve only UI components that can be reused by the future Convex-backed product.

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
- Confirm the public landing page renders after Supabase removal.

## Completion Gate

This plan is complete when the repo has no code/package references to Supabase, no Supabase schema artifacts, and validation passes from the fresh no-database base.

## Completion Notes

- Removed the Supabase package dependencies, DB scripts, clients, generated types, auth callback route, and `supabase/` migration/config tree.
- Follow-up cleanup removed the old placeholder/disabled route surfaces instead of keeping them.
- Validation passed: `pnpm lint`, `pnpm build`, runtime code search for Supabase references, and curl smoke checks for public routes.

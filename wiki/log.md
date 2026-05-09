# CodeCook.live Log

Append durable project-context changes here. Git owns routine implementation history.

Log bootstrap/import events, planning direction changes, codebase sync summaries after unplanned work, validation results that affect plans or roadmap, source-context changes, and important decisions discovered during implementation. Do not log routine commits, every code edit, every test run, formatting, minor refactors, or details already obvious from Git.

## 2026-05-08 bootstrap | initialize project wiki

- Created the docs-first project wiki, source index, local agent guidance, planning contract, roadmap, architecture note, and source briefs.
- Mode: `import_existing`.
- Lifecycle classification: existing product or post-MVP app; no `wiki/plans/mvp/` tree was created.
- Git result: repository was not initialized when imported; Git was initialized during bootstrap.
- Source briefs: generated `wiki/sources/prd.md`, `wiki/sources/technical-brief.md`, `wiki/sources/design-brief.md`, and `wiki/sources/marketing-brief.md`.
- Unknowns: production deployment status, current Supabase project state, active product priorities, and whether legacy README dates are historical or manually maintained.

## 2026-05-08 source | update product vision

- Updated the product positioning from building projects in the open to turning commits into content.
- Current vision: "CodeCook.live is your platform for turning your commits into content. Grow your audience while you ship."
- Product implication: future planning should prioritize content generation, distribution, audience growth, and shipping cadence over broad community/social features.

## 2026-05-08 planning | create commit-to-content roadmap plans

- Created the first maintained plan sequence for the new product direction.
- Active plan: `wiki/plans/maintenance/product-base-reset.md`.
- Follow-up plans: `wiki/plans/features/live-product-loop.md`, `wiki/plans/features/commit-to-content-engine.md`, and `wiki/plans/features/distribution-audience-loop.md`.
- Planning decision: web app remains the primary product; any Tauri app is deferred as a possible future local companion.

## 2026-05-08 implementation | product base reset pass

- Advanced `wiki/plans/maintenance/product-base-reset.md` through Unit 01 and Unit 02.
- Recorded the product surface inventory in `wiki/plans/maintenance/product-base-inventory.md`.
- Shifted landing/header/auth/share copy and anonymous CTAs toward the commit-to-content product base.
- Removed orphaned waitlist UI/action files while preserving migration history and generated types until schema cleanup is explicitly planned.
- Validation is blocked locally because `node_modules` is missing; `pnpm lint` and `pnpm build` both fail with `next: command not found`.

## 2026-05-09 maintenance | upgrade Next and dependencies

- Completed `wiki/plans/maintenance/next-and-dependency-upgrade.md`.
- Upgraded to Next.js 16.2.6, React 19.2.6, Tailwind CSS 4.3.0, AI SDK 6, and current dependency versions where compatible.
- Migrated linting from `next lint` to `eslint .`.
- Validation passed: `pnpm lint`, `pnpm build`, and `agent-browser` local landing-page verification.
- Noted compatibility constraint: ESLint remains on the latest compatible v9 line because Next/plugin peer ranges do not yet support ESLint 10.

## 2026-05-09 maintenance | complete product base reset

- Completed `wiki/plans/maintenance/product-base-reset.md`.
- Removed remaining waitlist schema from generated Supabase types and added `supabase/migrations/20260509000000_drop_waitlist.sql`.
- Added a local-env guard for `/import` so public smoke checks do not fail when Supabase public env vars are absent.
- Updated roadmap and plan dashboard so the next active plan is `wiki/plans/features/live-product-loop.md`.
- Validation passed: `pnpm lint`, `pnpm build`, public route smoke checks, and browser landing-page verification.

## 2026-05-09 maintenance | remove Supabase fresh base

- Created `wiki/plans/maintenance/remove-supabase-fresh-base.md`.
- Decision: no old Supabase data is needed, and the old schema should not be migrated.
- Removed Supabase as the current data/auth provider; the intended next foundation is Clerk for auth and Convex for structured data/realtime.
- Placeholder routes/actions are acceptable during the fresh-base reset because the next pass will rebuild the data-backed product surfaces.
- Validation passed: `pnpm lint`, `pnpm build`, runtime code search for Supabase references, and curl smoke checks for key public routes.

## 2026-05-09 maintenance | remove legacy app cruft

- Created `wiki/plans/maintenance/remove-legacy-app-cruft.md`.
- Removed the top legacy cruft categories: broken auth routes/components, placeholder profile/project/session routes, disabled old app actions, chat/community surface, Bluesky flows, and unauthenticated GitHub proxy routes.
- Also removed old upload/S3 screenshot helpers, AI helper routes, session hooks, shared integration types, stale utilities, and dependencies tied to deleted surfaces.
- Current runtime app is intentionally a landing shell plus layout, graphics, UI primitives, and local utilities.
- Validation passed: `pnpm lint`, `pnpm build`, code reference sweep, and smoke checks for `/` plus removed auth/API/dynamic routes returning 404.

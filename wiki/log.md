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

## 2026-05-09 maintenance | prune historical plans

- Removed completed maintenance plan files from `wiki/plans/maintenance/` so the wiki now emphasizes forward-looking product plans.
- Updated the landing copy from transitional product-direction language to a clearer commit-to-content publishing loop.

## 2026-05-09 product copy | remove internal planning language

- Removed work-in-progress implementation language from the public landing page.
- Added a project instruction that product UI should never expose stack choices, roadmap mechanics, or planning placeholders.

## 2026-05-09 planning | create MVP rebuild plan

- User clarified the reset app should now be planned as an MVP track.
- MVP target: solo developers building in public.
- MVP acceptance: GitHub sign-in, profile, connected repository, project, live shipping session, commit selection, manual realtime updates, automatic commit polling, AI recap, public CodeCook page, and copy/export.
- Created `wiki/plans/mvp/` with four stages and executable units; Stage 01 Unit 01 is the next implementation target.

## 2026-05-09 maintenance | clean confirmed legacy cruft

- Completed `wiki/plans/zzz_completed/maintenance/confirmed-cruft-cleanup.md`.
- Removed confirmed leftovers from the previous incarnation: stale mock commit tooling, old message-time utility, old session screenshot, and empty legacy API/hooks/types/script directories.
- Replaced the social preview screenshot with a current landing-page capture and changed package `go`/`ship` scripts so they verify locally without auto-pushing to `main`.
- Validation passed: `pnpm lint`, `pnpm build`, stale-reference sweep, and screenshot inspection.

## 2026-05-09 planning | add post-MVP AI writing style controls

- Created `wiki/plans/post-mvp/ai-writing-style-controls/` as a post-MVP feature plan with stage and unit files.

## 2026-05-09 planning | clean feature plans

- Removed the active `wiki/plans/features/` directory.
- Moved live product loop, commit-to-content engine, and distribution/audience loop plans to `wiki/plans/zzz_completed/features/` because their work is now represented in the MVP stages and units.
- Moved AI writing style controls to `wiki/plans/post-mvp/ai-writing-style-controls/` because it remains a standalone post-MVP feature plan with its own stage and units.
- Decision: style controls are account-level by default with `Clear builder voice`, preset dropdown, plain-language custom guidance, preview sample, and optional format/platform overrides.
- MVP execution remains unchanged; this plan starts after MVP AI generation and copy/export are working.

## 2026-05-09 planning | add post-MVP automatic developer shorts

- Created `wiki/plans/post-mvp/automatic-developer-shorts/` as a docs-only post-MVP feature plan with stage and unit files.
- Decision: shorts should be useful developer-value videos, not self-promotional recap ads.
- First planned deliverable is source-grounded downloadable MP4s for YouTube Shorts, TikTok, and X; direct upload and automatic posting are deferred.
- Renderer remains TBD and must be evaluated between Remotion, Hyperframe, or an adapter before implementation.

## 2026-05-09 planning | split post-MVP feature plans into directories

- Replaced single-file post-MVP feature plans with directory-based plans that follow the project-wiki stage/unit convention.
- `ai-writing-style-controls` now has a README, one stage file, and five unit files.
- `automatic-developer-shorts` now has a README, four stage files, and thirteen unit files.

## 2026-05-09 implementation | complete Clerk auth foundation

- Completed `wiki/plans/mvp/units/stage-01/01-clerk-auth-foundation.md`.
- Split the original combined Clerk/Convex foundation unit into separate Clerk and data/storage units, then renumbered remaining Stage 01 units.
- Added Clerk SDK/provider wiring, Next 16 `proxy.ts` protected-route middleware, a minimal `/app` protected route, header auth entry points, and Clerk env examples.
- Updated repo automation policy so dependency installs are automatic.
- Validation passed: `pnpm lint`, `pnpm build`, and public `/` smoke check. Protected `/app` redirect and signed-in route checks remain blocked until real Clerk keys are available locally.

## 2026-05-09 architecture | switch MVP persistence to flat files and S3

- User directed the MVP away from Convex.
- New persistence decision: mutable MVP app data uses flat-file JSON; things that do not change after creation use S3-compatible artifact storage.
- Updated MVP planning, architecture, source briefs, and active unit references accordingly.

## 2026-05-09 implementation | complete flat-file and S3 foundation

- Completed `wiki/plans/mvp/units/stage-01/02-flat-file-and-s3-foundation.md`.
- Added flat-file JSON helpers with atomic writes, S3-compatible immutable storage helpers, env examples, `.data/` ignore rules, and `pnpm smoke:data`.
- Validation passed: `pnpm smoke:data` and `pnpm check`.
- Real S3 upload verification is deferred until bucket credentials exist.

## 2026-05-10 implementation | complete user profile model

- Completed `wiki/plans/mvp/units/stage-01/03-user-profile-model.md`.
- Added flat-file-backed creator profile read/upsert behavior, Clerk user ID mapping, display name and username validation, reserved username checks, and duplicate username checks.
- Added `/app` creator profile onboarding/update UI backed by a server action.
- Validation passed: `pnpm smoke:data`, `pnpm smoke:profiles`, `pnpm check`, public `/` smoke check, and signed-out `/app` Clerk redirect check.
- Interactive signed-in profile submission remains deferred until a browser sign-in session is available.

## 2026-05-10 implementation | superseded GitHub OAuth repository access

- Completed the original Unit 04 OAuth repository access attempt.
- Added Clerk-backed GitHub OAuth token retrieval, GitHub repository listing, repository access states, and `/app` repository access UI after profile setup.
- Added manual setup notes for GitHub OAuth apps and Clerk GitHub social connection scopes.
- Validation passed before later correction.
- This direction was superseded by the GitHub App planning correction below.

## 2026-05-10 planning correction | move repository access to GitHub App

- Revised and renamed Unit 04 to `wiki/plans/mvp/units/stage-01/04-github-oauth-login.md` so GitHub OAuth is login-only and requests no repository scopes.
- Added `wiki/plans/mvp/units/stage-01/06-github-app-repository-access.md` for read-only, installation-scoped repository and commit access.
- Removed the OAuth-token repository listing helper, repository access panel, and GitHub smoke script because GitHub OAuth Apps do not offer private repository read-only access.
- Updated roadmap, architecture, and technical source context to reflect GitHub App ownership of repository access.

## 2026-05-10 implementation | authenticated app shell

- Completed `wiki/plans/mvp/units/stage-01/05-authenticated-app-shell.md`.
- Added authenticated app navigation, dashboard, projects route, and profile route.
- Added customer-facing empty states for profile setup, project setup, and future recaps without exposing implementation details.
- Validation passed: `pnpm check`, public `/` route smoke check, and signed-out Clerk redirect checks for `/app` and `/app/projects`.
- Interactive signed-in route verification remains deferred until a Clerk browser session is available.

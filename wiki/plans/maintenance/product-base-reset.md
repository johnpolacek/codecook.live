# Product Base Reset

## Summary

- Status: active
- Shape: compact maintenance plan with short unit outline
- Current unit: Unit 04 - Base Validation And Handoff
- Next action: install dependencies or otherwise restore `node_modules`, then rerun `pnpm lint` and `pnpm build`
- Blockers: `node_modules` is missing, so `next` is unavailable for local lint/build validation
- Blockers: none
- Validation: `pnpm lint`, `pnpm build`, route smoke checks, and manual review of removed/kept flows

## Intent

Strip the existing app down to a coherent base for the new product direction: CodeCook.live turns commits into content, with `.live` fulfilled by active shipping sessions and public live project stories. The reset should remove or quarantine product surfaces that distract from that loop before new features are layered in.

## Product Direction

Keep the web app as the primary product. Treat any desktop/Tauri concept as a future optional companion for local commit capture, not as the core product.

The base product should center on:

- Projects connected to GitHub commit history.
- Live shipping sessions.
- Commit/diff context that becomes content.
- Public project/session pages.
- Distribution to social channels.

## Scope

- Audit current routes, components, server actions, API routes, database tables, and public copy.
- Decide what to keep, remove, rename, or defer.
- Remove or hide broad community/social features that do not support live sessions, content generation, distribution, or audience growth.
- Preserve reusable primitives, authentication, project import, session editing, commit/diff utilities, Supabase migrations, and integration clients unless a specific replacement is planned.
- Update user-facing copy from "building in public" or generic "live coding community" toward "turn commits into content" and "grow your audience while you ship."

## Non-Goals

- Do not rebuild the product architecture in this pass.
- Do not introduce new schema unless removal or hiding requires a compatibility flag.
- Do not delete database migrations casually; preserve migration history unless a full reset strategy is explicitly chosen.
- Do not add the full commit-to-content engine in this plan. Create a good base for it.

## Keep Candidates

- Auth, profiles, project import/editing, GitHub commit APIs, commit diff rendering, session editor, session/public pages, screenshot/media utilities, AI helper surfaces, Bluesky integration, and core UI primitives.

## Remove Or Defer Candidates

- Waitlist-first language if authenticated product access is now preferred.
- Generic "community feedback" positioning that does not tie directly to live sessions or content outcomes.
- Chat features if they add maintenance weight before the live page has clear value.
- Legacy thread naming in components or UI where it obscures the session/content model.
- Any duplicate or stale type generation path after confirming the authoritative Supabase type file.

## Execution Units

### Unit 01 - Product Surface Inventory

Create an inventory of routes, components, actions, API routes, database tables, and copy. Classify each as keep, remove, rename, defer, or investigate.

Inventory artifact: `product-base-inventory.md`.

#### Verification

- Automated: none required beyond file inspection.
- Manual: confirm inventory covers `app/`, `components/`, `hooks/`, `lib/`, and `supabase/migrations/`.
- Deferred: no code deletion in this unit.

#### Completion Gate

Complete. The inventory gives one clear implementation checklist for the initial base cleanup pass.

### Unit 02 - Copy And Navigation Reset

Update homepage, metadata, navigation, CTAs, feature copy, and public descriptions to match the new vision.

#### Verification

- Automated: `pnpm lint` and `pnpm build` when dependencies and environment allow.
- Manual: inspect landing, auth entry, profile/project/session pages for mismatched messaging.
- Deferred: browser QA may be deferred if the app cannot run locally before environment setup.

#### Completion Gate

Complete. Public copy now supports "turn commits into content" and primary anonymous CTAs point to signup instead of waitlist.

### Unit 03 - Remove Or Hide Off-Direction Features

Remove, hide, or defer surfaces identified in Unit 01 that distract from the commit-to-content/live-session loop.

Initial removals:

- Removed orphaned waitlist UI and server action files after landing/header CTAs moved to signup.
- Preserved waitlist migration history and generated database types until a schema cleanup strategy is chosen.

#### Verification

- Automated: `pnpm lint`, `pnpm build`, and TypeScript validation through the build.
- Manual: route smoke checks for landing, auth, project import, project page, session editor, and public session page.
- Deferred: database cleanup should be deferred unless backed by a migration strategy.

#### Completion Gate

Complete for the initial reset pass. The app has a smaller product surface with primary waitlist UI removed, while database cleanup remains deferred.

### Unit 04 - Base Validation And Handoff

Run baseline checks, record known issues, and update the wiki with the resulting base contract.

Validation attempted:

- `pnpm lint` failed because `node_modules` is missing and `next` is not available.
- `pnpm build` failed because `node_modules` is missing and `next` is not available.

Dependency installation is deferred because repo policy says to ask before installing dependencies.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: key workflow smoke checklist documented in this plan or `wiki/log.md`.
- Deferred: external integrations may be deferred if credentials are unavailable.

#### Completion Gate

Complete when future feature work can begin from a documented, validated base.

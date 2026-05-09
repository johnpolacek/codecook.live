# Product Requirements Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection after fresh-base reset
- Confidence: medium
- Known gaps: current launch stage, active user feedback, pricing or access model, analytics, and production readiness are unknown.

## Product Intent

`CodeCook.live` is a publishing platform for turning commits into content. Its core promise is to help developers ship while converting their work into public, shareable updates that grow an audience.

## Audience

Primary users are developers who want to document their work, share commit-driven progress, and present projects publicly. Secondary audiences include viewers who follow live sessions and discover project progress.

## Primary Workflows

- Sign up, create a profile, and manage user identity through Clerk.
- Import or create a coding project backed by Convex.
- Connect GitHub commit history and select commits or diffs as session context.
- Create, update, pause, ship, archive, and publicly view live shipping sessions.
- Use AI help to generate editable writing drafts from project, commit, and session context.
- Share project/session updates publicly and through distribution channels after the content review flow exists.

## Constraints

- Project/session workflows will depend on external services: Clerk, Convex, GitHub, OpenAI or another AI provider, artifact storage, and optional publish channels.
- Public sharing needs stable URLs, generated media, and clear session/project ownership.
- The old Supabase schema and legacy route/component code are intentionally not preserved.

## Non-Goals

- Do not treat this as a generic blogging platform without commit/content context.
- Do not replace GitHub as the source of commit truth without a specific plan.
- Do not add broad social-network features unless they support content generation, distribution, audience growth, or public project progress.

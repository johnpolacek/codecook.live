# Product Requirements Brief

## Status

- Last reviewed: 2026-05-08
- Evidence basis: repository inspection and README build log
- Confidence: medium
- Known gaps: current launch stage, active user feedback, pricing or access model, analytics, and production readiness are unknown.

## Product Intent

`CodeCook.live` is a publishing platform for turning commits into content. Its core promise is to help developers ship while converting their work into public, shareable updates that grow an audience.

## Audience

Primary users are developers who want to document their work, share commit-driven progress, and present projects publicly. Secondary audiences include viewers who follow live sessions, comment or chat, and discover project progress.

## Primary Workflows

- Sign up, create a profile, and manage user identity.
- Import or create a coding project.
- Connect GitHub commit history and select commits or diffs as session context.
- Create, edit, auto-save, archive, and publish live coding sessions.
- Use AI help to generate session ideas or writing drafts from project and commit context.
- Share project/session updates publicly and through distribution channels such as Bluesky.
- Enable or participate in guest chat on live sessions.

## Constraints

- Project/session workflows depend on external services: Supabase, GitHub, OpenAI, S3-compatible storage, Puppeteer/Chromium, and Bluesky.
- Public sharing needs stable URLs, generated media, and clear session/project ownership.
- Future behavior changes should preserve existing user/project/session data and Supabase migration history.

## Non-Goals

- Do not treat this as a generic blogging platform without commit/content context.
- Do not replace GitHub as the source of commit truth without a specific plan.
- Do not add broad social-network features unless they support content generation, distribution, audience growth, or public project progress.

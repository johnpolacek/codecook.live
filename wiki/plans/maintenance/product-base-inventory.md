# Product Base Inventory

## Status

- Last reviewed: 2026-05-08
- Related plan: `product-base-reset.md`
- Unit: Unit 01 - Product Surface Inventory

## Keep

- Routes: landing page, auth callback, sign in, sign up, welcome, profile, profile edit, project import, project page, project edit, session page, live session page.
- API and server surfaces: GitHub commit/diff APIs, session actions, project/session/profile creation actions, upload, screenshot generation, AI utility/actions, Bluesky actions/posting.
- Components: auth, profile, project import/edit/list/view, commit manager/diff/link, session editor, session display, share dialogs, Bluesky integration, reusable UI primitives, layout, logo.
- Data: profiles, projects, sessions, commits, Bluesky connections, live/archive status, media/upload paths, generated database types.
- Integrations: Supabase, GitHub, OpenAI/AI SDK, S3/Puppeteer screenshots, Bluesky.

## Rename Or Reframe

- Landing copy should move from live coding/community language to commit-to-content and shipping language.
- "Thread" UI can remain as an implementation concept for multi-post exports, but creator-facing labels should become "content thread", "post thread", or "share package" where practical.
- "Cooking" language can remain as brand flavor only when it does not obscure the product job.

## Hide Or Defer

- Waitlist-first entry should be removed from primary landing/header CTAs in favor of signup/signin.
- Generic community feedback claims should be removed until live audience mechanics are useful.
- Chat should remain in code and schema for now, but product emphasis should defer it until the live page has a compelling timeline.
- Database cleanup is deferred; preserve migrations and existing tables.

## Investigate

- Confirm the authoritative generated Supabase type path between `lib/database.types.ts` and `lib/supabase/database.types.ts`.
- Confirm production deployment and environment variable posture before removing waitlist backend/schema.
- Confirm whether public signup is intended to be open in production.
- Confirm whether `thread-*` component filenames should be renamed in a later mechanical cleanup.

## Initial Cleanup Checklist

1. Replace primary waitlist CTAs with signup/dashboard CTAs.
2. Update metadata and landing sections to "turn commits into content" and "grow your audience while you ship."
3. Remove generic community feedback copy from the first-viewport product story.
4. Leave chat, waitlist backend, and database migrations intact until a later cleanup has environment confidence.

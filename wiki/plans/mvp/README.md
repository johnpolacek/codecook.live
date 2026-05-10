# MVP Plan

## Summary

- Status: draft
- Shape: multi-stage MVP
- Current stage: Stage 01 - Identity And Data Foundation
- Current unit: Stage 02 Unit 02 - Live Session Lifecycle
- Next action: implement live session lifecycle from `units/stage-02/02-live-session-lifecycle.md`
- Blockers: manual GitHub App setup and live installation verification
- Validation: `pnpm lint`, `pnpm build`, provider-specific auth/data checks, browser workflow checks

## MVP Outcome

The MVP is complete when a solo developer building in public can sign in with GitHub, create a profile, connect a repository, create a project, start a live shipping session, select commits, write or generate a recap, copy/export the content, and publish a public CodeCook page.

## Target User

Solo developers building in public who want their shipping activity to become audience-building content without manually reconstructing what changed.

## Canonical MVP Journey

1. Sign in with GitHub.
2. Create a public creator profile.
3. Connect a GitHub repository, which becomes a CodeCook project.
4. Start a live shipping session.
5. Select commits and add manual timeline updates while work is active.
6. Generate and edit recap content with AI.
7. Publish a public session page.
8. Copy/export generated content for external sharing.

## Stage Sequence

1. `stage-01-foundation.md` - identity, flat-file data, S3 artifact storage, GitHub OAuth login, GitHub App repository access, and app shell.
2. `stage-02-projects-and-live-sessions.md` - profiles, projects, live sessions, commit selection, realtime timeline.
3. `stage-03-ai-recap-and-public-publishing.md` - AI generation, editable recap, public page, copy/export.
4. `stage-04-mvp-hardening.md` - UX polish, validation, privacy, observability, launch readiness.

## Active Read Commands

```bash
sed -n '1,120p' wiki/plans/mvp/README.md
sed -n '1,180p' wiki/plans/mvp/stage-01-foundation.md
sed -n '1,180p' wiki/plans/mvp/units/stage-02/02-live-session-lifecycle.md
```

## Deferred Until After MVP

- Direct Bluesky posting or other platform publishing.
- Team accounts, organizations, or collaboration.
- Advanced analytics and audience feedback loops.
- Desktop/Tauri companion app.
- Full social/community features.

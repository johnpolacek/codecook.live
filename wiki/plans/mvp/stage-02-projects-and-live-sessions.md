# Stage 02 - Projects And Live Sessions

## Summary

- Status: draft
- Shape: MVP stage
- Current unit: Unit 02 - Live Session Lifecycle
- Next action: implement live session lifecycle for a repository-backed project
- Blockers: manual GitHub App setup and live installation verification
- Validation: `pnpm lint`, `pnpm build`, flat-file data checks, browser workflow checks for projects and sessions

## Goal

Build the core live workflow: use connected repositories as projects, start a live shipping session, select commits, post manual updates, and expose realtime session state for owners and public viewers.

## Completion Gate

Stage 02 is complete when an authenticated creator can use a connected repository as a project, start an active session, select commits, add manual timeline updates, and see those updates reflected on a session timeline.

## Unit Sequence

1. `units/stage-02/01-repository-backed-project-model.md`
2. `units/stage-02/02-live-session-lifecycle.md`
3. `units/stage-02/03-commit-selection-and-diff-context.md`
4. `units/stage-02/04-realtime-timeline-updates.md`
5. `units/stage-02/05-automatic-commit-polling.md`

## Key Decisions

- Live means async-live: active, observable, public, and followable while work is happening.
- MVP live sessions include realtime public timeline, manual posted updates, and automatic commit polling.
- Chat is out of scope for MVP unless the live timeline is already compelling and complete.

## Follow-Up Stage

After this stage, continue to `stage-03-ai-recap-and-public-publishing.md`.

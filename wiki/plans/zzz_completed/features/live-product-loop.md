# Live Product Loop

## Summary

- Status: superseded
- Shape: historical feature plan retained as source context
- Current unit: none; superseded by `../mvp/stage-02-projects-and-live-sessions.md`
- Next action: follow the MVP stage/unit plan
- Blockers: MVP Stage 01 foundation
- Validation: live session route smoke checks, realtime/manual viewer checks, `pnpm lint`, `pnpm build`

## Intent

Fulfill the `.live` promise without copying Twitch-style streaming. A CodeCook live session should be async-live: fresh, observable, public, and followable while the developer is shipping.

## Scope

- Define live session states and viewer-facing status.
- Make active sessions visibly live on project/profile/public session pages.
- Turn commits, notes, screenshots, and generated updates into a readable live timeline.
- Keep live pages useful for anonymous viewers.
- Preserve a path from live activity to generated content.

## Non-Goals

- Do not build video streaming.
- Do not make chat the center of the product before the live timeline is compelling.
- Do not require a desktop app for v1 live behavior.
- Do not add heavy notification infrastructure until follow mechanics are defined.

## Product Model

The live loop has three layers:

- Live work session: the creator starts, updates, pauses, ships, or archives a session.
- Live audience page: viewers can understand current progress without GitHub context.
- Live content engine: the session continuously creates draft content from commit activity.

## Execution Units

### Unit 01 - Live State Contract

Define the authoritative session states, timestamps, and user-facing labels for active, paused, shipped, and archived sessions.

#### Verification

- Automated: schema/type checks through `pnpm build` if code changes are made.
- Manual: review state labels across editor, project, profile, and public pages.
- Deferred: migration validation if no schema change is required.

#### Completion Gate

Complete when future work has one live-state contract and no conflicting labels.

### Unit 02 - Public Live Timeline

Make the public session page tell a live story from commits, notes, images, and generated summaries.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: inspect anonymous and owner views for a live session with multiple updates.
- Deferred: realtime update checks may be deferred until Convex is configured.

#### Completion Gate

Complete when a viewer can follow what is happening now and what shipped so far.

### Unit 03 - Live Presence And Entry Points

Surface active sessions on profile/project pages and make share links clearly route viewers into the live page.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: inspect profile, project, and session routes at desktop and mobile widths.
- Deferred: analytics are out of scope for this unit.

#### Completion Gate

Complete when active work is discoverable from public project and creator surfaces.

### Unit 04 - Live Session Recap

When a session ends, generate or assemble a recap package from commits, timeline updates, screenshots, and final notes.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: end a session and verify recap content is editable, shareable, and linked from the archived page.
- Deferred: platform-specific publishing belongs to the distribution plan.

#### Completion Gate

Complete when ending a session creates a usable recap draft instead of only changing status.

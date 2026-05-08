# Distribution And Audience Loop

## Summary

- Status: draft
- Shape: compact feature plan with short unit outline
- Current unit: none; starts after the first commit-to-content output is useful
- Next action: choose first-class distribution channels and tracking scope
- Blockers: content format decisions, Bluesky integration posture, authenticated publishing policy
- Validation: platform copy/export checks, share flow smoke checks, `pnpm lint`, `pnpm build`

## Intent

Help developers grow an audience while they ship by turning generated content into repeatable distribution workflows.

## Scope

- Make generated content easy to copy, export, or post.
- Treat Bluesky as the existing first integration unless a different priority is chosen.
- Track content drafts, share attempts, published links, and basic status.
- Make public project/session pages the destination for shared posts.

## Non-Goals

- Do not build a generalized social media management platform.
- Do not add paid scheduling infrastructure before copy/export/manual posting works.
- Do not optimize for analytics until publishing status and public destinations are stable.
- Do not post automatically without explicit user action.

## Execution Units

### Unit 01 - Share Package Model

Define how generated content, destination URL, media, platform variant, and publication status are represented.

#### Verification

- Automated: type/build checks if code changes are made.
- Manual: review model against short post, thread, recap, and changelog scenarios.
- Deferred: database migration checks if persistence is delayed.

#### Completion Gate

Complete when generated content can be treated as a shareable package instead of free-floating text.

### Unit 02 - Copy And Export Flows

Support reliable copy/export for generated content variants.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: copy/export generated content from the editor and recap surfaces.
- Deferred: direct platform posting remains separate.

#### Completion Gate

Complete when a creator can leave CodeCook with polished content in the right format.

### Unit 03 - Bluesky Publish Flow

Upgrade the existing Bluesky integration into the first direct publish path for generated content.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: publish or dry-run a Bluesky post/thread where credentials are available.
- Deferred: production credential validation may require user-owned environment access.

#### Completion Gate

Complete when generated content can be reviewed and posted to Bluesky with clear success/failure state.

### Unit 04 - Audience Feedback Signals

Add lightweight status that shows what was shared and where it points.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: inspect share history on relevant session/project surfaces.
- Deferred: engagement metrics from external platforms are out of scope until APIs and priorities are confirmed.

#### Completion Gate

Complete when creators can see which session/project content has been distributed.

# Commit-To-Content Engine

## Summary

- Status: deferred
- Shape: compact feature plan retained as source context
- Current unit: none; superseded by `../mvp/stage-03-ai-recap-and-public-publishing.md`
- Next action: follow the MVP stage/unit plan
- Blockers: MVP Stage 02 project/session/commit context
- Validation: generation prompt tests or fixtures where possible, manual content review, `pnpm lint`, `pnpm build`

## Intent

Make commits the raw material for useful content. The creator should be able to select commits or session context and produce ready-to-edit posts, updates, recaps, changelogs, and threads.

## Scope

- Define commit/diff/session inputs for generation.
- Generate content blocks that explain what changed, why it matters, and what is next.
- Support multiple content styles without making the editor too complex.
- Keep generated content editable and attributable to the selected commit/session context.

## Non-Goals

- Do not create fully autonomous posting without human review.
- Do not support every social platform in the first implementation pass.
- Do not replace the session editor; upgrade it into the content workspace.
- Do not infer private repository data beyond explicitly selected commits/diffs.

## Initial Content Formats

- Short social update.
- Technical thread.
- Session recap.
- Project changelog entry.
- Launch or ship note.

## Execution Units

### Unit 01 - Generation Input Contract

Define what data the generator receives from commits, diffs, selected files, session notes, project metadata, and user intent.

#### Verification

- Automated: type/build checks if code changes are made.
- Manual: review sample inputs for small, medium, and large commits.
- Deferred: prompt quality validation waits until generation exists.

#### Completion Gate

Complete when the app has a documented input contract that can support multiple content outputs.

### Unit 02 - Content Draft Generator

Create the first generator path for commit-to-update drafts.

#### Verification

- Automated: `pnpm lint`, `pnpm build`; fixture tests if the codebase has or receives a suitable test harness.
- Manual: generate drafts from representative commits and review factual grounding against diffs.
- Deferred: engagement scoring and analytics are out of scope.

#### Completion Gate

Complete when a creator can generate an editable content draft from selected commit context.

### Unit 03 - Style And Format Variants

Add a constrained set of output formats with clear UI controls and prompt behavior.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: compare output for short update, technical thread, recap, changelog, and ship note.
- Deferred: platform-specific character limits may be finalized in the distribution plan.

#### Completion Gate

Complete when the same commit/session context can produce distinct useful content formats.

### Unit 04 - Session Recap Integration

Connect content generation to the live session end flow so a session can produce a recap package.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: end a session with selected commits and verify generated recap is editable and shareable.
- Deferred: automatic publishing remains out of scope.

#### Completion Gate

Complete when session completion reliably produces creator-ready content.

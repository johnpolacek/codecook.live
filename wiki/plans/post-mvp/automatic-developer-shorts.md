# Automatic Developer Shorts

## Summary

- Status: deferred
- Shape: multi-stage post-MVP feature plan
- Current stage: none; starts after AI writing style controls and artifact storage are ready
- Current unit: none
- Next action: execute Stage 01 Unit 01 when post-MVP video work begins
- Blockers: MVP AI generation, session timeline, copy/export, artifact storage, AI writing style controls
- Validation: `pnpm lint`, `pnpm build`, source-grounding fixtures, render smoke checks, MP4 playback checks

## Intent

Automatically generate short-form videos for YouTube Shorts, TikTok, and X from CodeCook live session context.

The videos should be useful to developers and technical audiences. They should teach techniques, tips, things to avoid, implementation lessons, or other practical takeaways from the creator's work. They should not be self-promotional recap ads.

## Scope

- Generate developer-value short concepts from session context.
- Support AI-selected angles and creator-selected angles.
- Build platform-specific variants for YouTube Shorts, TikTok, and X.
- Render downloadable MP4 files with captions first.
- Persist MP4s, thumbnails, captions, render settings, and metadata.
- Prepare metadata for future direct upload and automatic posting.

## Non-Goals

- Do not change the active MVP execution path.
- Do not implement app code, dependencies, rendering setup, or schema in this planning pass.
- Do not choose Remotion, Hyperframe, or an adapter before the renderer evaluation unit.
- Do not implement direct upload or automatic posting in the first shorts feature.
- Do not generate unsupported claims or generic advice that cannot be traced to session context.

## Product Decisions

- Roadmap position: post-MVP after AI writing style controls.
- First delivery target: downloadable MP4 files plus companion upload copy.
- Future target: direct upload and automatic posting.
- Audio sequence: captions-only first; AI voiceover and creator-uploaded audio later.
- Visual foundation: animated text, commits, diffs, screenshots, project metadata, and template motion graphics.
- Optional later enhancement: generated imagery/video and AI persona or character experiments.
- Renderer decision: TBD through Stage 01 evaluation.
- Renderer priority: quality and control over speed or cost unless feasibility blocks the preferred path.
- Source grounding: strict; every lesson or tip must trace back to session source material.

## Source Context Contract

The generator should consume a `sessionInsightPackage` assembled from:

- Selected commits
- Diff summaries or source snippets
- Timeline notes
- Screenshots or other session visuals
- Session recap
- Project metadata
- Public CodeCook page URL when available
- Source references for every claim

Creators may optionally provide a `creatorSelectedAngle`, such as:

- "Show the refactor mistake I avoided."
- "Explain the small performance win."
- "Turn this bug fix into a practical lesson."

## Stage 01 - Shorts Strategy And Renderer Evaluation

### Unit 01 - Shorts Content Contract

Define the data contract for source-grounded developer shorts.

#### Scope

- Define `sessionInsightPackage`.
- Define `creatorSelectedAngle`.
- Define `shortConcept`.
- Define required source reference types.
- Define rejection behavior for unsupported concepts.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Type/schema validation when implemented.
- Manual:
  - Review sample session contexts.
  - Confirm each proposed lesson/tip can cite source material.
- Deferred:
  - Runtime generation tests until the generation service exists.

#### Completion Gate

Complete when a future implementer can build concept generation without deciding what source data or grounding rules mean.

### Unit 02 - Renderer Evaluation

Evaluate the rendering approach before production implementation.

#### Scope

- Compare Remotion, Hyperframe, and a renderer adapter approach.
- Use the same representative short concept for evaluation where possible.
- Compare branded motion quality, caption timing, screenshot/diff rendering, server rendering complexity, cost, export reliability, and operational fit.
- Pick one path: Remotion first, Hyperframe first, or renderer adapter layer.

#### Verification

- Automated:
  - None required during planning; future prototypes should run their provider-specific checks.
- Manual:
  - Inspect rendered or mocked output quality.
  - Compare implementation complexity and operational risks.
  - Record the renderer decision and rationale.
- Deferred:
  - Production render reliability until Stage 02.

#### Completion Gate

Complete when the renderer path is chosen based on quality/control and documented tradeoffs.

### Unit 03 - Review Flow Experiment

Choose the creator review and correction model.

#### Scope

- Evaluate storyboard review.
- Evaluate preview-only regenerate flow.
- Evaluate timeline-style review.
- Choose the simplest flow that lets creators trust and correct a short before export.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build` if prototypes touch app code.
- Manual:
  - Review the flow against a real session.
  - Confirm creators can see source references.
  - Confirm creators can correct bad concepts or scenes.
- Deferred:
  - Full usability testing until an implementation exists.

#### Completion Gate

Complete when the first review model is chosen and future units know what creators can edit before rendering.

## Stage 02 - Captions-Only Short Generation

### Unit 01 - Short Concept Generator

Generate useful developer-focused short concepts.

#### Scope

- Generate 3-5 concepts from a session insight package.
- Include hook, lesson, source references, platform fit, and why the concept is useful.
- Support creator-selected angle when provided.
- Reject concepts that cannot cite source context.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture tests proving every generated concept has source references.
- Manual:
  - Review concepts from a real completed session.
  - Confirm concepts are useful to developers and not promotional.
- Deferred:
  - Engagement quality scoring until post-feature analytics work.

#### Completion Gate

Complete when creators can choose from source-grounded short concepts that teach a useful developer takeaway.

### Unit 02 - Storyboard And Script Generator

Convert a selected concept into scenes.

#### Scope

- Generate scene outline.
- Generate captions/script.
- Assign visual source per scene.
- Include timing estimates and source references.
- Keep writing specific, practical, and non-promotional.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture tests for scene/source reference completeness.
- Manual:
  - Review a storyboard for clarity and pacing.
  - Confirm no scene makes unsupported claims.
- Deferred:
  - Caption timing precision until rendering integration.

#### Completion Gate

Complete when a selected concept can become a source-grounded storyboard ready for render.

### Unit 03 - Platform Variant Renderer

Render platform-specific captions-only variants.

#### Scope

- Generate separate YouTube Shorts, TikTok, and X variants.
- Default each variant to target platform best-practice duration.
- Allow configurable duration.
- Use platform-safe caption margins and 9:16 layouts.
- Render animated text, commits, diffs, screenshots, and project metadata.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Render smoke test per platform variant.
  - Caption safe-margin checks for vertical layouts.
- Manual:
  - Inspect rendered MP4s on desktop and mobile-sized previews.
  - Confirm text is readable and not covered by expected platform UI areas.
- Deferred:
  - Direct upload validation until a future posting plan.

#### Completion Gate

Complete when the same storyboard can render usable YouTube Shorts, TikTok, and X MP4 variants.

### Unit 04 - Downloadable Export

Persist and expose generated short assets.

#### Scope

- Store rendered MP4 files.
- Store thumbnails.
- Store captions/subtitles.
- Store render settings and metadata.
- Generate companion upload title, description, hashtags, and public CodeCook link.
- Support re-download.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Asset metadata validation.
- Manual:
  - Download each MP4 variant.
  - Inspect playback.
  - Confirm thumbnail and captions are available.
  - Confirm generated upload copy is useful and source-aligned.
- Deferred:
  - Long-term retention policy until artifact storage decisions are final.

#### Completion Gate

Complete when creators can download platform-specific shorts and companion upload copy from stored generated assets.

## Stage 03 - Audio And Enhanced Assets

### Unit 01 - AI Voiceover

Add optional AI-generated narration.

#### Scope

- Generate narration from approved script.
- Sync captions to narration.
- Let creators choose captions-only or voiceover render.
- Store audio asset and render metadata.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Audio duration/metadata validation where practical.
- Manual:
  - Listen to generated voiceover.
  - Confirm captions match narration.
  - Confirm fallback to captions-only works.
- Deferred:
  - Voice provider selection until implementation planning.

#### Completion Gate

Complete when creators can render the same short with or without AI narration.

### Unit 02 - Creator Audio Upload

Support uploaded narration or music.

#### Scope

- Accept creator-uploaded audio.
- Validate file type, size, and duration.
- Trim or align audio to short duration.
- Store audio asset and usage metadata.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Upload validation tests where practical.
- Manual:
  - Upload narration.
  - Upload music.
  - Confirm invalid files are rejected clearly.
  - Confirm rendered output includes uploaded audio.
- Deferred:
  - Rights/licensing enforcement beyond user-facing guidance.

#### Completion Gate

Complete when creators can use their own audio in generated shorts.

### Unit 03 - Generative Visual Enhancements

Experiment with optional generated visuals.

#### Scope

- Generate imagery/video for scenes with weak source visuals.
- Explore optional AI persona or character concepts.
- Require creator approval for generated visuals.
- Keep source-grounded visuals as the default.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Confirm generated visuals are clearly optional.
  - Confirm generated visuals do not imply unsupported product behavior.
  - Confirm creator can remove or replace generated visuals.
- Deferred:
  - Persona/character brand system until a separate design decision exists.

#### Completion Gate

Complete when generated visuals can enhance a short without replacing source-grounded session evidence.

## Stage 04 - Publishing Preparation

### Unit 01 - Short Asset Library

Create a reusable library of generated shorts.

#### Scope

- List generated shorts by project and session.
- Show platform variants, status, duration, thumbnail, and download links.
- Support re-download and re-render from saved settings.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Find prior shorts by project/session.
  - Download an existing variant.
  - Re-render from saved settings.
- Deferred:
  - Search/filter polish until usage volume justifies it.

#### Completion Gate

Complete when generated shorts are durable reusable assets, not one-off downloads.

### Unit 02 - Posting Metadata Contract

Prepare metadata needed for future direct posting.

#### Scope

- Store title.
- Store description.
- Store hashtags.
- Store platform target.
- Store generated captions.
- Store public CodeCook link.
- Store source session.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Metadata validation checks.
- Manual:
  - Review metadata for YouTube Shorts, TikTok, and X variants.
  - Confirm metadata can be copied for manual upload.
- Deferred:
  - API-specific validation until direct posting work begins.

#### Completion Gate

Complete when each rendered short has enough metadata for future direct upload integrations.

### Unit 03 - Direct Posting Readiness Review

Document future direct upload requirements.

#### Scope

- Identify OAuth/API requirements for YouTube, TikTok, and X.
- Identify review/compliance needs.
- Identify required app permissions and user consent.
- Create a follow-up direct posting plan.

#### Verification

- Automated:
  - None.
- Manual:
  - Review platform requirements against stored metadata and assets.
  - Confirm the follow-up plan has clear prerequisites.
- Deferred:
  - Actual upload/posting tests until direct posting implementation.

#### Completion Gate

Complete when the team knows what is required to turn generated shorts into automatic posting.

## Future Data Contracts

Minimum future records:

- `shortConcept`: session, angle, hook, lesson, source references, platform fit, status.
- `shortStoryboard`: concept, scenes, target duration, review status.
- `shortRender`: storyboard, platform, duration, renderer, MP4 URL, thumbnail URL, captions URL, render settings, status, error.
- `shortPublishingMetadata`: render, title, description, hashtags, public CodeCook URL, platform target.

Source reference types:

- Commit
- Diff
- Timeline update
- Screenshot
- Recap section
- Project metadata

## Acceptance Criteria

- Shorts are useful to developers and technical audiences.
- Shorts are not self-promotional recap ads.
- Every generated lesson, tip, or warning is source-grounded.
- Creator can choose from generated concepts or provide an angle.
- Creator can review and correct the short before export.
- Captions-only MP4 variants can be downloaded for YouTube Shorts, TikTok, and X.
- Generated assets persist for re-download and future posting.
- Direct upload and automatic posting are clearly deferred to a future plan.

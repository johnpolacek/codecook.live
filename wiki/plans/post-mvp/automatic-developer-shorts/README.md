# Automatic Developer Shorts

## Summary

- Status: deferred
- Shape: multi-stage post-MVP feature plan
- Current stage: none; starts after AI writing style controls and artifact storage are ready
- Current unit: none
- Next action: execute `units/stage-01/01-shorts-content-contract.md` when post-MVP video work begins
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

## Stage Sequence

1. `stage-01-strategy-and-renderer-evaluation.md`
2. `stage-02-captions-only-generation.md`
3. `stage-03-audio-and-enhanced-assets.md`
4. `stage-04-publishing-preparation.md`

## Active Read Commands

```bash
sed -n '1,140p' wiki/plans/post-mvp/automatic-developer-shorts/README.md
sed -n '1,160p' wiki/plans/post-mvp/automatic-developer-shorts/stage-01-strategy-and-renderer-evaluation.md
sed -n '1,160p' wiki/plans/post-mvp/automatic-developer-shorts/units/stage-01/01-shorts-content-contract.md
```

## Acceptance Criteria

- Shorts are useful to developers and technical audiences.
- Shorts are not self-promotional recap ads.
- Every generated lesson, tip, or warning is source-grounded.
- Creator can choose from generated concepts or provide an angle.
- Creator can review and correct the short before export.
- Captions-only MP4 variants can be downloaded for YouTube Shorts, TikTok, and X.
- Generated assets persist for re-download and future posting.
- Direct upload and automatic posting are clearly deferred to a future plan.

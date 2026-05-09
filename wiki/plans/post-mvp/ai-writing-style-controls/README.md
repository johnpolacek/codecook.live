# AI Writing Style Controls

## Summary

- Status: deferred
- Shape: single-stage post-MVP feature plan
- Current stage: Stage 01 - Writing Style Controls
- Current unit: none; starts after MVP Stage 03 copy/export works
- Next action: execute `units/stage-01/01-style-settings-model.md` after MVP acceptance or when post-MVP work begins
- Blockers: MVP AI generation, recap editor, copy/export, and public session page
- Validation: `pnpm lint`, `pnpm build`, style fixture checks, preview/manual generation review

## Intent

Let creators control the writing style of AI-generated content without exposing prompt engineering or implementation mechanics. CodeCook output should sound more like the creator while preserving factual grounding in commits, diffs, timeline updates, and session context.

## Scope

- Account-level primary writing style settings.
- Default style: `Clear builder voice`.
- Preset dropdown for quick style selection.
- Plain-language custom style brief for creator-specific guidance.
- Preview sample before saving.
- Optional format/platform overrides for blog posts, X/thread-style posts, launch notes, changelogs, and short updates.

## Non-Goals

- Do not change the active MVP execution path.
- Do not expose raw prompts, model/provider names, or implementation language in product UI.
- Do not let style settings override factual grounding or invent unsupported claims.
- Do not build engagement optimization or analytics-driven style recommendations in this feature.

## Product Defaults

- Primary default: `Clear builder voice`.
- Default behavior: direct, practical, lightly personal, useful to developers and followers.
- Preset examples: `Clear builder voice`, `Polished launch`, `Technical changelog`, `Founder update`, `Casual build note`, `Concise social`.
- Customization input: plain-language brief, such as "Keep it concise, practical, and specific. Avoid hype. Explain what changed and why it matters."

## Style Application Model

Primary account style is the baseline for all generated copy. Optional format/platform overrides layer on top of the primary style.

Overrides may customize:

- Tone
- Length
- Structure/template
- Headings
- CTA style
- Hashtags
- Formatting conventions

Supported override targets should start with:

- Blog post
- X/thread-style post
- Launch note
- Changelog
- Short update

## Generation Contract

Future generation inputs should include:

- `primaryStylePreset`
- `customStyleBrief`
- Optional `formatOverride`
- Output format target, such as `recap`, `shortUpdate`, `thread`, `blogPost`, or `changelog`
- Existing grounded context from selected commits, diffs, timeline updates, and project/session metadata

Generation rules:

- Style affects voice, structure, and formatting.
- Style must not change source facts.
- Generated output remains editable.
- Public pages and exported content must never reveal raw settings or prompt text.

## Stage Sequence

1. `stage-01-writing-style-controls.md`

## Active Read Commands

```bash
sed -n '1,140p' wiki/plans/post-mvp/ai-writing-style-controls/README.md
sed -n '1,160p' wiki/plans/post-mvp/ai-writing-style-controls/stage-01-writing-style-controls.md
sed -n '1,160p' wiki/plans/post-mvp/ai-writing-style-controls/units/stage-01/01-style-settings-model.md
```

## Acceptance Criteria

- A creator has a default writing style without setup.
- A creator can choose a preset and add plain-language guidance.
- A creator can preview style before saving.
- AI-generated copy uses saved style settings.
- Optional format/platform overrides can change voice or template for specific outputs.
- Style controls never expose implementation details in product UI.
- Style changes do not weaken factual grounding.

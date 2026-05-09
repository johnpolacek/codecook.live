# AI Writing Style Controls

## Summary

- Status: deferred
- Shape: single-stage post-MVP feature plan
- Current unit: none; starts after MVP Stage 03 copy/export works
- Next action: execute Unit 01 after MVP acceptance or when post-MVP work begins
- Blockers: MVP AI generation, recap editor, copy/export, and public session page
- Validation: `pnpm lint`, `pnpm build`, style fixture checks, preview/manual generation review

## Intent

Let creators control the writing style of AI-generated content without exposing prompt engineering or implementation mechanics. The feature should make CodeCook output sound more like the creator while preserving factual grounding in commits, diffs, timeline updates, and session context.

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
- Preset examples:
  - `Clear builder voice`
  - `Polished launch`
  - `Technical changelog`
  - `Founder update`
  - `Casual build note`
  - `Concise social`
- Customization input: plain-language brief, such as "Keep it concise, practical, and specific. Avoid hype. Explain what changed and why it matters."

## Style Application Model

Primary account style is the baseline for all generated copy.

Optional format/platform overrides layer on top of the primary style. Overrides may customize:

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

## Stage 01 - Writing Style Controls

### Unit 01 - Style Settings Model

Define the persistent account-level style settings model.

#### Scope

- Store primary style preset.
- Store custom style brief.
- Include future-ready format override structure.
- Seed new users with `Clear builder voice`.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Schema/type validation when implemented.
- Manual:
  - New user receives default style.
  - Saved style persists after refresh.
- Deferred:
  - Migration validation until the underlying MVP data model exists.

#### Completion Gate

Complete when creator style settings can be saved, read, and defaulted without affecting generation yet.

### Unit 02 - Style Settings UI

Add a creator-facing settings panel for writing style.

#### Scope

- Preset dropdown.
- Plain-language custom style brief.
- Customer-facing helper copy.
- Save/cancel behavior.
- Empty/default state.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - User can choose a preset.
  - User can edit custom guidance.
  - UI copy avoids "prompt," provider names, and implementation language.
- Deferred:
  - Mobile polish until the feature is integrated into the full settings surface.

#### Completion Gate

Complete when creators can view and edit writing style settings in a product-quality settings panel.

### Unit 03 - Preview Sample Flow

Let creators preview how unsaved style settings affect generated writing.

#### Scope

- Fixed demo shipping context.
- Preview generation from unsaved settings.
- Save after preview or explicit skip.
- Loading, error, and retry states.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture test for preview input shape where practical.
- Manual:
  - Preview reflects selected preset.
  - Preview reflects custom brief.
  - Preview errors are recoverable.
- Deferred:
  - Full prompt evaluation suite until style controls are used in real generation.

#### Completion Gate

Complete when creators can understand the effect of style settings before saving them.

### Unit 04 - Generation Integration

Apply saved style settings to real AI-generated content.

#### Scope

- Pass primary preset and custom brief into generation.
- Apply settings to recap and copy/export outputs.
- Preserve source-grounding safeguards.
- Keep generated content editable.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture checks confirming style inputs are included.
  - Fixture comparison between at least two presets against the same context.
- Manual:
  - Generate content with default style.
  - Generate content with custom brief.
  - Confirm output changes style but does not invent facts.
- Deferred:
  - Analytics-informed style scoring until post-feature work.

#### Completion Gate

Complete when real generated output consistently respects saved creator style without weakening factual grounding.

### Unit 05 - Format And Platform Overrides

Add optional override settings for specific output targets.

#### Scope

- Override editor per supported target.
- Optional preset override.
- Optional custom brief.
- Template/formatting instructions.
- Enable/disable behavior.
- Fallback to primary style when no override is enabled.

#### Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Schema/type checks for override structure.
- Manual:
  - Blog override changes blog output only.
  - Thread-style override changes thread output only.
  - Disabled override falls back to primary style.
  - Public/exported content does not reveal settings text unless the creator intentionally copies it.
- Deferred:
  - Direct platform posting validation until publish integrations exist.

#### Completion Gate

Complete when target-specific outputs can use optional style/template overrides while preserving the account-level primary style fallback.

## Acceptance Criteria

- A creator has a default writing style without setup.
- A creator can choose a preset and add plain-language guidance.
- A creator can preview style before saving.
- AI-generated copy uses saved style settings.
- Optional format/platform overrides can change voice or template for specific outputs.
- Style controls never expose implementation details in product UI.
- Style changes do not weaken factual grounding.

# Unit 04 - Generation Integration

## Goal

Apply saved style settings to real AI-generated content.

## Scope

- Pass primary preset and custom brief into generation.
- Apply settings to recap and copy/export outputs.
- Preserve source-grounding safeguards.
- Keep generated content editable.

## Non-Goals

- Do not let style settings invent claims.
- Do not bypass existing source references.
- Do not add direct platform posting.

## Implementation Notes

- Style affects voice, structure, and formatting.
- Style must not change source facts.
- Generated output remains editable.
- Public pages and exported content must never reveal raw settings or prompt text.

## Verification

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

## Completion Gate

Complete when real generated output consistently respects saved creator style without weakening factual grounding.

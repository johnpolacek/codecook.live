# Unit 01 - Shorts Content Contract

## Goal

Define the data contract for source-grounded developer shorts.

## Scope

- Define `sessionInsightPackage`.
- Define `creatorSelectedAngle`.
- Define `shortConcept`.
- Define required source reference types.
- Define rejection behavior for unsupported concepts.

## Non-Goals

- Do not generate video in this unit.
- Do not choose a renderer in this unit.
- Do not allow ungrounded general advice.

## Implementation Notes

- Source reference types should include commit, diff, timeline update, screenshot, recap section, and project metadata.
- Every generated lesson or tip must cite source material.
- Creator-selected angle should guide concept generation without weakening grounding.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Type/schema validation when implemented.
- Manual:
  - Review sample session contexts.
  - Confirm each proposed lesson/tip can cite source material.
- Deferred:
  - Runtime generation tests until the generation service exists.

## Completion Gate

Complete when a future implementer can build concept generation without deciding what source data or grounding rules mean.

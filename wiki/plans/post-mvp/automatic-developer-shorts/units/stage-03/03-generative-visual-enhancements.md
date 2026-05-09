# Unit 03 - Generative Visual Enhancements

## Goal

Experiment with optional generated visuals.

## Scope

- Generate imagery/video for scenes with weak source visuals.
- Explore optional AI persona or character concepts.
- Require creator approval for generated visuals.
- Keep source-grounded visuals as the default.

## Non-Goals

- Do not replace source-grounded visuals by default.
- Do not invent project behavior through generated imagery.
- Do not establish a persona/character brand system in this unit.

## Implementation Notes

- Generated visuals are optional.
- Creator must be able to remove or replace generated visuals.
- Generated visuals should enhance a lesson, not become the evidence for it.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
- Manual:
  - Confirm generated visuals are clearly optional.
  - Confirm generated visuals do not imply unsupported product behavior.
  - Confirm creator can remove or replace generated visuals.
- Deferred:
  - Persona/character brand system until a separate design decision exists.

## Completion Gate

Complete when generated visuals can enhance a short without replacing source-grounded session evidence.

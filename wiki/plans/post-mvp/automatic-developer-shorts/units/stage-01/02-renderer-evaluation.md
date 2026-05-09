# Unit 02 - Renderer Evaluation

## Goal

Evaluate and choose the rendering approach before production implementation.

## Scope

- Compare Remotion, Hyperframe, and a renderer adapter approach.
- Use the same representative short concept for evaluation where possible.
- Compare branded motion quality, caption timing, screenshot/diff rendering, server rendering complexity, cost, export reliability, and operational fit.
- Pick one path: Remotion first, Hyperframe first, or renderer adapter layer.

## Non-Goals

- Do not implement the full renderer.
- Do not add production render infrastructure.
- Do not choose based only on speed if output quality/control is materially worse.

## Implementation Notes

- Renderer priority is quality and control.
- The evaluation should include vertical video, animated text, code/diff visuals, captions, and screenshot handling.
- If neither candidate can satisfy core needs, choose an adapter path and record the missing capability.

## Verification

- Automated:
  - None required during planning; future prototypes should run their provider-specific checks.
- Manual:
  - Inspect rendered or mocked output quality.
  - Compare implementation complexity and operational risks.
  - Record the renderer decision and rationale.
- Deferred:
  - Production render reliability until Stage 02.

## Completion Gate

Complete when the renderer path is chosen based on quality/control and documented tradeoffs.

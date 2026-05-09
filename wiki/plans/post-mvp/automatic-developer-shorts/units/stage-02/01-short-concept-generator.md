# Unit 01 - Short Concept Generator

## Goal

Generate useful developer-focused short concepts.

## Scope

- Generate 3-5 concepts from a session insight package.
- Include hook, lesson, source references, platform fit, and why the concept is useful.
- Support creator-selected angle when provided.
- Reject concepts that cannot cite source context.

## Non-Goals

- Do not create promotional recap ads.
- Do not generate scenes or render video yet.
- Do not optimize for engagement analytics yet.

## Implementation Notes

- Concepts should teach techniques, tips, lessons, mistakes to avoid, or useful implementation takeaways.
- Concepts should be specific to the session and useful to developers or technical audiences.
- Every concept must include source references.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Fixture tests proving every generated concept has source references.
- Manual:
  - Review concepts from a real completed session.
  - Confirm concepts are useful to developers and not promotional.
- Deferred:
  - Engagement quality scoring until post-feature analytics work.

## Completion Gate

Complete when creators can choose from source-grounded short concepts that teach a useful developer takeaway.

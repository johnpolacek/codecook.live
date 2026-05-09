# Unit 05 - Format And Platform Overrides

## Goal

Add optional override settings for specific output targets.

## Scope

- Override editor per supported target.
- Optional preset override.
- Optional custom brief.
- Template/formatting instructions.
- Enable/disable behavior.
- Fallback to primary style when no override is enabled.

## Non-Goals

- Do not require overrides for every user.
- Do not implement direct platform posting.
- Do not turn overrides into a full social media management system.

## Implementation Notes

- Primary account style remains the baseline.
- Overrides layer on top only when enabled for a target format.
- Initial targets: blog post, X/thread-style post, launch note, changelog, short update.

## Verification

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

## Completion Gate

Complete when target-specific outputs can use optional style/template overrides while preserving the account-level primary style fallback.

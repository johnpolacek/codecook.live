# Unit 01 - Style Settings Model

## Goal

Define the persistent account-level style settings model.

## Scope

- Store primary style preset.
- Store custom style brief.
- Include future-ready format override structure.
- Seed new users with `Clear builder voice`.

## Non-Goals

- Do not change generation behavior in this unit.
- Do not add format/platform override UI yet.
- Do not expose raw prompt fields to creators.

## Implementation Notes

- Style settings should belong to the creator/account, not a single draft.
- Future format overrides should be representable without a migration that changes primary style semantics.
- Style settings must be treated as generation configuration, not public content.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - Schema/type validation when implemented.
- Manual:
  - New user receives default style.
  - Saved style persists after refresh.
- Deferred:
  - Migration validation until the underlying MVP data model exists.

## Completion Gate

Complete when creator style settings can be saved, read, and defaulted without affecting generation yet.

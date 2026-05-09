# Unit 02 - Flat-File Data And S3 Storage Foundation

## Summary

- Status: completed
- Completed: 2026-05-09
- Result: flat-file JSON helpers, S3-compatible immutable storage helpers, environment examples, and local data smoke verification are in place.
- Follow-up: execute `03-user-profile-model.md`.
- Blockers: real S3-compatible bucket credentials are still needed for upload verification.

## Goal

Configure the MVP data foundation around flat-file JSON persistence and S3-compatible immutable artifact storage.

## Scope

- Add a server-only flat-file data helper for JSON collections.
- Configure a local data directory default and environment variable example.
- Add an S3-compatible storage client helper for immutable artifacts.
- Configure S3 environment variable examples for public bucket, private bucket, region, and credentials.
- Add a minimal server-only validation path that can confirm data and storage config without exposing implementation details in product UI.

## Non-Goals

- Do not build the user/profile model yet.
- Do not fetch GitHub repositories yet.
- Do not add AI generation yet.
- Do not upload generated artifacts yet.
- Do not decide long-term retention policy beyond treating S3 objects as immutable artifacts.

## Implementation Notes

- Flat-file JSON is the canonical MVP database for mutable app state.
- Use atomic writes for local JSON files so interrupted writes do not corrupt data.
- S3-compatible storage owns things that should not change after creation, such as screenshots, generated images, video files, captions, and other artifacts.
- Public and private artifact buckets are configured separately so callers must choose visibility intentionally.
- App code should depend on local storage/data helper interfaces rather than scattering filesystem or S3 client usage through product routes.
- UI copy must be customer-facing and must not mention implementation status, storage mechanics, or roadmap mechanics.

## Verification

- Automated:
  - `pnpm lint`
  - `pnpm build`
  - TypeScript coverage through the production build for the flat-file and S3 helper modules.
- Manual:
  - Start the app locally.
  - Confirm anonymous users can still view `/`.
  - Confirm protected route behavior is unchanged from Unit 01 when Clerk keys are available.
  - Confirm local data directory creation and JSON read/write behavior with a small local smoke command.
- Deferred:
  - Real S3 upload verification until production or development bucket credentials exist.

## Completion Gate

This unit is complete when flat-file JSON helpers and S3-compatible storage helpers are configured, environment examples are documented, the app builds, and a local smoke command can create/read data without product UI exposing implementation details.

## Result

- Added `lib/server/flat-file-db.ts` with safe collection names, JSON array reads, atomic writes, and append helper.
- Added `lib/server/immutable-storage.ts` with S3-compatible client config, explicit public/private bucket selection, immutable object keys, and immutable upload helper.
- Added `CODECOOK_DATA_DIR` and S3-compatible storage keys to `.env.example`.
- Added `.data/` to `.gitignore`.
- Added `pnpm smoke:data` for flat-file read/write verification.

## Verification Result

- Passed: `pnpm smoke:data`.
- Passed: `pnpm check`.
- Deferred: real S3 upload verification until bucket credentials exist.

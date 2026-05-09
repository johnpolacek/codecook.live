# Technical Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection, dependency upgrade validation, Supabase removal, legacy app cruft removal, and Clerk auth foundation implementation
- Confidence: high for current repo shape, medium for future integration direction
- Known gaps: production environment, real Clerk keys, S3-compatible storage credentials, GitHub OAuth app, CI, deployment provider, AI provider key, and required secrets are unknown.

## Stack

- Framework: Next.js 16.2.6 App Router with React 19.2.6 and TypeScript.
- Styling: Tailwind CSS 4, shadcn/Radix-style primitives, `lucide-react`, Heroicons, and local components.
- Data/auth/storage: Clerk SDK and protected-route middleware are configured for auth. Flat-file JSON is the MVP database for mutable app state. S3-compatible storage is planned for immutable artifacts.
- AI: not currently configured in code. Future writing assistance should be added after commit/session data contracts exist.
- Integrations: Clerk is active in code. MVP integrations still to add are S3-compatible storage credentials, GitHub OAuth/API, and AI writing. Direct publish channels are post-MVP.
- Post-MVP video rendering is unchosen; automatic shorts must evaluate Remotion, Hyperframe, or a renderer adapter before implementation.
- Package manager: `pnpm`, inferred from `pnpm-lock.yaml` and scripts.

## Project Surfaces

- `app/` owns the App Router layout and public landing page.
- `components/` owns reusable UI and workflow-specific components.
- `lib/` owns shared utilities.
- No product data model exists yet; Unit 02 introduces flat-file storage helpers before profile/project/session models are added.

## Validation Defaults

For meaningful changes, prefer:

```bash
pnpm lint
pnpm build
```

Data/storage work should add local flat-file smoke checks and S3 configuration checks. Browser-visible UI work should include manual checks for the landing page, authenticated app shell, project creation, live session, recap editor, and public session page as those routes are reintroduced.

## Handoff Risks

- Next 16 removed `next lint`; this project now uses `eslint .` through `pnpm lint`.
- The MVP intentionally uses flat-file JSON for mutable app data rather than a hosted database.
- Legacy integrations were removed rather than preserved as disabled placeholders; reintroduce them from fresh contracts.
- Generated video assets should be treated as artifacts: MP4s, thumbnails, captions, render settings, and publishing metadata should not become canonical app state.

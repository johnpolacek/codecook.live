# Next And Dependency Upgrade

## Summary

- Status: complete
- Shape: compact maintenance plan with short unit outline
- Current unit: none
- Next action: continue Product Base Reset validation or begin the next active maintenance/feature plan
- Blockers: none
- Validation: `pnpm lint`, `pnpm build`, local dev server, and `agent-browser` landing-page verification passed

## Intent

Upgrade CodeCook.live from Next 15.1.3 to the latest stable Next.js release and bring dependencies current, while preserving the existing App Router product surface and product-base reset work.

## Source Guidance

- Official Next 16 upgrade guide: `https://nextjs.org/docs/app/guides/upgrading/version-16`
- Official Next codemods guide: `https://nextjs.org/docs/app/guides/upgrading/codemods`

Relevant guidance as of 2026-05-09:

- Use `pnpm dlx @next/codemod@canary upgrade latest` for the official upgrade flow.
- Next 16 requires Node.js 20.9+; local Node 24.14.1 satisfies this.
- Upgrade `next`, `react`, `react-dom`, `@types/react`, and `@types/react-dom` together.
- Migrate `next lint` to ESLint CLI because `next lint` is removed in Next 16.

## Scope

- Update package versions and lockfile.
- Apply official codemods where relevant.
- Fix compile, type, lint, config, and peer dependency issues caused by the upgrade.
- Verify the app locally through CLI checks and browser automation.

## Non-Goals

- Do not redesign product flows during the dependency upgrade.
- Do not change Supabase schema or remote database state.
- Do not migrate Tailwind design architecture unless dependency upgrades force minimal config changes.
- Do not validate authenticated GitHub/Supabase flows that require secrets unless credentials are already available.

## Execution Units

### Unit 01 - Upgrade Framework And Dependencies

Run the official Next upgrade path and update dependencies to current compatible releases.

Completed:

- Upgraded Next.js from 15.1.3 to 16.2.6.
- Upgraded React and React DOM from 19.0.0 to 19.2.6.
- Ran `pnpm update --latest` and refreshed `pnpm-lock.yaml`.
- Added current peer/runtime packages needed by the upgraded stack: `@ai-sdk/rsc`, `@tailwindcss/postcss`, and `nanostores`.
- Kept ESLint and `@eslint/js` on the latest compatible v9 line because `eslint-config-next` 16.2.6 and related plugins do not yet accept ESLint 10.

#### Verification

- Automated: package install completes and lockfile is regenerated.
- Manual: inspect package changes for unexpected removals or major config shifts.
- Deferred: build/lint fixes happen in Unit 02.

#### Completion Gate

Complete. Dependency updates are installed and the package manifest/lockfile reflect the upgraded stack.

### Unit 02 - Fix Build And Lint Fallout

Repair errors introduced by the upgrade, including ESLint CLI migration, Next config changes, type errors, and package API changes.

Completed:

- Migrated `next lint` to `eslint .` and added `eslint.config.mjs`.
- Updated AI SDK RSC imports from `ai/rsc` to `@ai-sdk/rsc`.
- Updated Tailwind 4 PostCSS config and removed global `@apply` usage that Tailwind 4 rejected.
- Replaced removed `lucide-react` `Github` icon imports with `@radix-ui/react-icons` `GitHubLogoIcon`.
- Updated Bluesky post record typing for the newer `@atproto/api`.
- Updated Puppeteer/Chromium launch options for newer package types.
- Guarded public landing auth probes when local Supabase public env vars are absent.

#### Verification

- Automated: `pnpm lint`, `pnpm build`.
- Manual: review changed files for scoped upgrade-only edits.
- Deferred: external integration runtime checks may be deferred if credentials are unavailable.

#### Completion Gate

Complete. `pnpm lint` and `pnpm build` pass.

### Unit 03 - Browser Verification

Run the app locally and verify the public landing page with `agent-browser`.

Completed:

- Started `pnpm dev` on `http://localhost:3000`.
- Used `agent-browser` to open the landing page, wait for network idle, capture an interactive snapshot, and take a full-page screenshot.
- Verified the page rendered with header links and the `Start Shipping` CTA.

#### Verification

- Automated/manual: start `pnpm dev`, open the local URL with `agent-browser`, capture a snapshot or screenshot, and confirm the updated landing page renders.
- Deferred: authenticated app flows may be deferred if OAuth/Supabase credentials are unavailable.

#### Completion Gate

Complete. The browser rendered the upgraded app locally.

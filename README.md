# CodeCook.live

CodeCook.live is a Next.js app for turning commits into content. The current repo is intentionally reset to a clean public product shell while the next foundation is planned around Clerk auth, Convex app data/realtime state, and future artifact storage.

## Current State

- Public landing page and layout are active.
- Legacy Supabase, project/session editor, chat, Bluesky, GitHub proxy, upload, and AI route surfaces have been removed.
- No database or authentication provider is currently configured.
- Product planning lives in `wiki/`.

## Development

```bash
pnpm install
pnpm dev
```

Useful checks:

```bash
pnpm lint
pnpm build
```

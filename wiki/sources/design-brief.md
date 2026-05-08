# Design Brief

## Status

- Last reviewed: 2026-05-08
- Evidence basis: repository inspection
- Confidence: medium
- Known gaps: brand guidelines, production screenshots, target device analytics, accessibility audit status, and final launch polish expectations are unknown.

## Product Surface

CodeCook.live has a public landing page, profile and project pages, project import/editing workflows, session viewing, live session pages, chat, and a session editor with commit selection, diff display, file references, block editing, image upload, AI assistance, and sharing controls.

## Interface Principles

- Prioritize efficient creation and review workflows for developers, especially in session editing and project import.
- Keep commit, diff, and session context scannable; dense information is appropriate when organized clearly.
- Public pages should make the creator, project, session status, and shareable progress easy to understand.
- Preserve clear separation between editing controls and public reading/live viewing surfaces.

## Visual System

- Existing UI uses Tailwind CSS, shadcn/Radix-style primitives, Geist/Rethink Sans typography, cards, dialogs, tabs, buttons, badges, avatars, tooltips, and toast notifications.
- Current brand cues include the CodeCook.live name, blue accent color, bolt iconography, and commit-to-content publishing language.
- Future UI work should reuse existing primitives before introducing new component patterns.

## Interaction Patterns

- Use dialogs for focused creation, waitlist, share, commit selection, and confirmation workflows.
- Use tabs, selectors, and sortable blocks where editor tasks require switching context without navigating away.
- Loading, empty, error, and save states matter for editor trust because sessions are content-heavy and auto-save appears central.
- External sharing flows should confirm success/failure and avoid losing draft state.

## Responsive And Accessibility Expectations

- Landing and public pages should work well on mobile and desktop.
- Editor-heavy workflows may be desktop-primary, but controls should not overlap or truncate on narrower screens without an intentional fallback.
- Preserve keyboard focus states, semantic controls from Radix primitives, readable contrast, and reduced layout shift during loading or autosave.

## Validation

- For meaningful UI changes, check desktop and mobile browser states for landing, auth, project import/edit, session editor, public session view, and live chat when relevant.
- Verify that text fits inside buttons/cards/dialogs and that interactive controls remain reachable with keyboard navigation.

## Unknowns

- Whether there is a visual reference, production analytics, or a preferred brand direction beyond current source code.
- Whether editor workflows require full mobile support or can remain desktop-first.

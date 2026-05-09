# Design Brief

## Status

- Last reviewed: 2026-05-09
- Evidence basis: repository inspection after fresh-base reset
- Confidence: high for current landing shell, medium for future workflow design
- Known gaps: brand guidelines, production screenshots, target device analytics, accessibility audit status, and final launch polish expectations are unknown.

## Product Surface

CodeCook.live currently has a public landing page, layout components, graphics, and reusable UI primitives. Profile, project, import, session, chat, AI, and sharing workflows were removed and should be redesigned around the new Clerk/Convex foundation.

The MVP product surface should include profile onboarding, repository selection, project creation, live session controls, commit selection, timeline updates, AI recap editing, copy/export, and public session pages.

## Interface Principles

- Prioritize efficient creation and review workflows for developers, especially in session editing and project import.
- Keep commit, diff, and session context scannable; dense information is appropriate when organized clearly.
- Public pages should make the creator, project, session status, and shareable progress easy to understand.
- Preserve clear separation between editing controls and public reading/live viewing surfaces.

## Visual System

- Existing UI uses Tailwind CSS, shadcn/Radix-style primitives, Rethink Sans typography, cards, buttons, badges, tooltips, and toast notifications.
- Current brand cues include the CodeCook.live name, blue accent color, bolt iconography, and commit-to-content publishing language.
- Future UI work should reuse existing primitives before introducing new component patterns.

## Interaction Patterns

- Use dialogs for focused creation, share, commit selection, and confirmation workflows when those workflows are reintroduced.
- Use tabs and selectors where editor tasks require switching context without navigating away.
- Loading, empty, error, and save states matter for editor trust because sessions are content-heavy and auto-save appears central.
- External sharing flows should confirm success/failure and avoid losing draft state.
- Product UI must never expose implementation status, provider names, roadmap mechanics, or work-in-progress planning. Placeholder UI should feel like real customer-facing product copy.
- Post-MVP writing style settings should use customer-facing language such as "Writing Style," "Preset," "Custom guidance," and "Preview"; avoid "prompt," model/provider names, or implementation terms.
- Post-MVP shorts should emphasize useful developer lessons over self-promotion, keep source references reviewable, and support vertical video review before export.

## Responsive And Accessibility Expectations

- Landing and public pages should work well on mobile and desktop.
- Editor-heavy workflows may be desktop-primary, but controls should not overlap or truncate on narrower screens without an intentional fallback.
- Preserve keyboard focus states, semantic controls from Radix primitives, readable contrast, and reduced layout shift during loading or autosave.

## Validation

- For meaningful UI changes, check desktop and mobile browser states for the landing page and any newly reintroduced auth, project, editor, or public session views.
- Verify that text fits inside buttons/cards/dialogs and that interactive controls remain reachable with keyboard navigation.

## Unknowns

- Whether there is a visual reference, production analytics, or a preferred brand direction beyond current source code.
- Whether editor workflows require full mobile support or can remain desktop-first.

# Tech Stack

## Approved Stack

Use this stack unless a change is explicitly approved:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## Recommended Baseline

- Next.js 16
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- shadcn/ui
- Lucide React for icons
- `next/font` for typography loading

## Technical Principles

- Build the site as a modern frontend project
- Prefer a marketing-site architecture, not an app architecture
- Keep the codebase simple, extensible, and easy to redesign
- Avoid unnecessary backend assumptions in this phase
- Avoid locking the project to a heavy data model before needed
- Prefer reusable UI primitives over one-off hacks

## What Is Not Fixed Yet

The following are still open unless later specified:

- deployment target
- whether the site is fully static or partially dynamic
- CMS usage
- content source strategy
- analytics stack
- payment provider integration
- documentation system

## Design-System Guidance

The stack is fixed.
The design system is **not** fixed.

That means:

- use Tailwind and shadcn/ui as implementation tools
- do not treat an old palette, spacing system, or component treatment as mandatory
- do not assume a prior visual direction is still valid
- create the design system from current product needs, not from legacy briefing baggage

# AI Music Video Generators

`aimusicvideogenerators.com` is a Next.js 16 content site being built to own search intent around AI music video generators and route high-intent traffic toward Revid.

## Project Thesis

The site should behave like a credible authority hub:

- own broad intent with a curated homepage
- win commercial intent with a best-of page
- support rankings with reviews, comparisons, and tutorials
- keep Revid visible throughout the funnel without making pages feel like thin affiliate content

## Current State

- The codebase is still an early scaffold.
- The root docs now describe the intended product and agent workflow.
- The next implementation phase should replace the generic starter content with the actual site structure and copy.

## Planned Page Map

- `/` broad landing page for `ai music video generator` intent
- `/best-ai-music-video-generators` as the main comparison page
- `/reviews/[tool]` for individual tool reviews
- `/compare/[slug]` or `/vs/[slug]` for head-to-head comparisons
- `/how-to/[slug]` for tutorial and informational content
- `/free/[slug]` for modifier-driven supporting pages where the search demand is real

Keep route names short, readable, and aligned with search intent.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide and shadcn primitives where useful

## Local Development

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run typecheck
npm run check
```

## Working Rules

- Use real, benefit-driven copy. No placeholders.
- Verify tool claims before publishing comparison content.
- Prefer semantic, accessible, metadata-rich pages.
- Keep the repo simple. Avoid unnecessary abstractions and folders.
- Update `HANDOVER.md` after material work so the next agent can continue cleanly.

## Agent Docs

- `AGENTS.md`: stable project rules and build constraints
- `HANDOVER.md`: live project brief and current priorities
- `HANDOVER_TEMPLATE.md`: reusable session handoff template
- `CLAUDE.md`: Claude entrypoint into the shared docs

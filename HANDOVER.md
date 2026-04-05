# Project Handover

## Snapshot

- Date: 2026-04-05
- Domain: `aimusicvideogenerators.com`
- Primary conversion target: Revid
- Repo status: starter scaffold is still in place, but the operating docs now reflect the real project
- Goal: build an authority site around `ai music video generator` and related commercial-intent queries

## Strategy

- Use a credible editorial model: homepage, best-of page, review pages, comparison pages, and tutorials.
- Let supporting content feed internal links into the highest-intent pages.
- Keep Revid consistently present, but make the pages useful enough to rank and trustworthy enough to convert.
- Treat the site as a long-term SERP asset, not a one-page microsite.

## Immediate Priorities

1. Replace the generic homepage copy, metadata, and layout with the actual `aimusicvideogenerators.com` positioning.
2. Build the main comparison page for `/best-ai-music-video-generators`.
3. Define a simple content structure for tools, comparisons, FAQs, and proof points so future pages stay consistent.
4. Add the first review and tutorial routes that can support internal linking into the money page.

## Proposed Information Architecture

- `/`
- `/best-ai-music-video-generators`
- `/reviews/[tool]`
- `/compare/[slug]` or `/vs/[slug]`
- `/how-to/[slug]`
- `/free/[slug]`

The exact comparison route pattern can be finalized during implementation. Keep it simple and SEO-readable.

## Content Guardrails

- Revid can be the recommendation, but the reasoning must be explicit and defensible.
- Do not publish stale claims about competitor pricing, features, or model capabilities.
- Comparison pages should explain criteria, best-fit users, tradeoffs, and why the ranking exists.
- Tutorials should help a real user complete a task and then route them naturally to Revid or the main comparison page.

## Current Gaps

- No project-specific homepage implementation yet.
- No shared data model for tools or page content yet.
- No review, comparison, or tutorial routes yet.
- Package metadata still reflects the original starter and can be cleaned up later if needed.

## Open Questions

- Which competitor set should be treated as the default shortlist for launch?
- What proof points for Revid are fully verified and safe to repeat across pages?
- Should the site explicitly disclose ownership or bias when Revid is featured as the top recommendation?
- Which route structure is preferred for comparisons: `/compare/...` or `/vs/...`?

## Verification

- No app tests were run for this handoff because this pass only updated documentation files.

## Last Documentation Pass

- Rewrote `AGENTS.md` from generic starter rules into project-specific agent guidance.
- Rewrote `README.md` to reflect the real site goal and route plan.
- Expanded `CLAUDE.md` into a proper entrypoint.
- Added this handoff file and a reusable handoff template.

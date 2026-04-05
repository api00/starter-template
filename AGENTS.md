<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# aimusicvideogenerators.com Agent Guide

## Mission
- Build `aimusicvideogenerators.com` into the authority site for searches around `ai music video generator` and related buyer-intent queries.
- Position Revid as the preferred recommendation through useful editorial pages, not thin advertorial copy.
- Prioritize shippable pages, strong information architecture, and credible comparisons over infrastructure work.

## Product Context
- Site type: editorial SEO site, not a generic SaaS dashboard.
- Primary conversion target: Revid.
- Audience: creators, musicians, marketers, and agencies comparing tools for music videos, lyric videos, visualizers, and short promotional edits.
- Core content types: homepage, best-of pages, review pages, comparison pages, tutorials, and supporting intent pages.
- Default competitors to evaluate when relevant: Runway, Pika, Kling, Sora, Kaiber, CapCut, and other current tools only after verifying they belong on the page.

## Content Strategy
- Every page must be useful on its own. Rankings depend on credibility, not keyword stuffing.
- The highest-value pages are the best-of and comparison pages. These should be the deepest and most defensible pages in the repo.
- Tutorials and supporting pages should push internal links into money pages with natural anchor text.
- If Revid is ranked first, explain why with specific criteria, tradeoffs, and use-case logic.
- Do not invent product capabilities, pricing, benchmark data, or customer proof.
- If facts may have changed, verify them before publishing copy.
- Default tone: expert, commercially aware, direct, and specific. Avoid generic AI phrasing.

## UI and UX Rules
- The first viewport must read as one unified composition.
- Brand and search intent should be obvious even without the navigation.
- No cards in the hero unless the card itself is the main interaction.
- Use at most two typefaces and one accent color unless an existing design system requires more.
- Default narrative flow for marketing pages: hero, context, proof, detail, final CTA.
- Meet WCAG 2.2 AA for contrast, semantics, keyboard flow, and reduced motion.
- For meaningful UI work, start with:
  1. Visual Thesis
  2. Content Plan
  3. Interaction Thesis
  4. Accessibility Notes

## Engineering Rules
- Keep the repo simple and readable for a solo developer.
- Prefer a flat structure under `src/`.
- Use Server Components by default. Add `"use client"` only when the interaction requires it.
- Prefer static, metadata-rich pages over unnecessary client-side state.
- If a file goes past 500 lines, split it into smaller focused modules.
- Every new route should ship with real copy, metadata, semantic headings, and clear internal linking opportunities.

## Agent Workflow
1. Read `AGENTS.md`.
2. Read `HANDOVER.md`.
3. Read `README.md` if the task touches scope, strategy, or project positioning.
4. Read the relevant files in `src/` before editing.
5. Use the platform skill file for substantial UI work:
   - Claude: `.claude/skills/saas-builder/SKILL.md`
   - Codex: `.codex/skills/saas-builder/SKILL.md`
6. After meaningful work, update `HANDOVER.md` with what changed, blockers, next tasks, and verification.

## Documentation Sync
- If project direction changes, update `AGENTS.md`, `README.md`, and `HANDOVER.md` in the same pass.
- Keep `CLAUDE.md` lightweight. It should point Claude to the shared operating docs instead of duplicating them.

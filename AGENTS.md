<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Modern AI SaaS Starter (Production Rules)

## 1. Core Philosophy
- **User Overrides**: These rules are professional defaults. Direct user instructions in your prompt ALWAYS take precedence. If the user asks for a "loose," "rounded," or "colorful" design, deviate from these defaults immediately.
- **Precision over Flair**: Build production-ready, high-density interfaces. No "floppy" or over-designed AI layouts (unless requested).
- **Linear-Style Hierarchy**: Calm, high-contrast hierarchy with breathable but tight spacing.
- **No-Compromise MVP**: We never sacrifice UI quality for speed. MVPs must maintain 100% perfection in layout, sizing, and typography from the first version.
- **Zero Placeholders**: Use real, benefit-driven copy. One primary job per section.

## 2. Design System & Constraints
### Typography (Inter / Geist)
- **Scale**: 12px (Tiny), 14px (UI), 16px (Body), 24px (Heading), 48px+ (Hero).
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold). Use sparingly.
- **Leading**: Tight for headings (1.1-1.2), readable for body (1.5-1.6).

### Spacing & Layout
- **The 4px Rule**: All spacing (padding, margin, gap) MUST be multiples of 4px (1rem = 16px). No magic numbers.
- **Density**: Favor dense, scannable information over excessive white space.
- **Grid**: Use 12-column layout for desktop; single column and stacked for mobile.

### Visual Style (Material Feel)
- **Borders**: Use `border-border/50` instead of heavy shadows. 
- **Edges**: Subtle rounding (0.5rem - 0.75rem). No hyper-rounded "pill" shapes for cards.
- **Colors**: Oklch-based. Neutrals (background/foreground) + 1 tactical accent.

## 3. Engineering Standards
- **Component Strategy**: Flat folder structure in `src/components`. Avoid deep nesting.
- **Server-First**: Use Next.js Server Components by default. Use `"use client"` only for interactivity.
- **Clean Patterns**: Immutable data, functional components, hooks over logic-in-render.
- **File Limit**: If a file exceeds 500 lines, proactively split it into focused modules (hooks, utils, components).

## 4. Narrative Composition
Every page must tell a story:
1. **Hero**: Bold promise + hook (The "Brand Strength Test").
2. **Context**: Supporting imagery or stats.
3. **Features/Proof**: Benefit-driven details + social proof.
4. **Final CTA**: Urgent, clear action.

## 5. Agent Workflows
- **Claude Code**: Refer to `.claude/skills/saas-builder/SKILL.md` for feature implementation.
- **Gemini CLI**: Refer to `.gemini/commands/saas-builder.toml`.
- **Codex CLI**: Refer to `.codex/skills/saas-builder/SKILL.md`.

---
@.claude/skills/saas-builder/SKILL.md

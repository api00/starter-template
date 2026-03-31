# Modern AI SaaS Starter

A premium, minimalist Next.js 16 starter template optimized for high-velocity AI-driven software development.

## 🚀 Features

- **Next.js 16 (App Router)** — Leveraging the latest React 19 features (use, transitions, Server Components).
- **Tailwind CSS v4** — Ultra-fast, modern CSS utility framework with oklch design tokens.
- **shadcn/ui** — Beautiful, accessible primitives designed with Radix UI.
- **AI-Native Setup** — Organized folder structure and `AGENTS.md` rules specifically for AI coding agents.
- **Strict TypeScript** — Type safety by default across the entire stack.
- **Minimalist Aesthetic** — High density, calm hierarchy, and smooth micro-animations.

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```bash
src/
  app/              # Routes and layouts
  components/       # UI components and primitives
  hooks/            # Custom React hooks
  lib/              # Shared utilities (cn, etc.)
  types/            # TypeScript definitions
public/
  images/           # Static image assets
  seo/              # Favicons and OG images
scripts/            # Maintenance and sync scripts
```

## 🤖 AI Workflow

This template includes an `AGENTS.md` file that acts as a blueprint for AI coding assistants. It helps them understand the tech stack conventions and design principles of the project.

- **Sync Rules**: Run `bash scripts/sync-agent-rules.sh` to update platform-specific instruction files (Cursor, Claude, etc.).

## 📜 License

MIT

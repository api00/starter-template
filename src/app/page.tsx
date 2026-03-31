import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center sm:px-12 md:px-24">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 blur-3xl" />

      <div className="flex max-w-4xl flex-col items-center gap-8">
        {/* Badge */}
        <div className="inline-flex cursor-default items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-medium text-blue-400 backdrop-blur-sm transition-all hover:bg-blue-500/10 dark:border-blue-500/20 dark:bg-blue-500/10">
          <Sparkles className="h-3 w-3" />
          <span>v1.0 is now live</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Build the next <span className="text-blue-500">AI SaaS</span> faster than ever.
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl">
          The ultimate Next.js 16 starter template for AI-driven development. 
          Everything you need to launch a premium SaaS in days, not weeks.
        </p>

        {/* CTA Buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center gap-2 rounded-xl bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center rounded-xl border border-border bg-transparent px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:bg-muted/50"
          >
            Star on GitHub
          </a>
        </div>

        {/* Feature Grid Brief */}
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-8 text-left sm:grid-cols-3">
          <div className="flex flex-col gap-2 p-6 rounded-2xl border border-border/50 bg-muted/20 backdrop-blur-sm">
            <h3 className="font-semibold text-foreground">Next.js 16</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">App Router, React 19, and the latest server-side features.</p>
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-2xl border border-border/50 bg-muted/20 backdrop-blur-sm">
            <h3 className="font-semibold text-foreground">Tailwind v4</h3>
             <p className="text-sm text-muted-foreground whitespace-pre-wrap">Modern CSS, Oklch colors, and ultra-fast build times.</p>
          </div>
          <div className="flex flex-col gap-2 p-6 rounded-2xl border border-border/50 bg-muted/20 backdrop-blur-sm">
            <h3 className="font-semibold text-foreground">AI-Ready</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">Folder structure optimized for AI coding assistants.</p>
          </div>
        </div>
      </div>

      <footer className="mt-32 w-full border-t border-border/50 py-12 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Modern AI SaaS Starter. Built for developers.
      </footer>
    </main>
  );
}

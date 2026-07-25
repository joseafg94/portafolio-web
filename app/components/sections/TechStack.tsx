"use client";

import { useI18n } from "@/lib/i18n/context";

const STACK = [
  {
    name: "Next.js",
    description: "App Router, Server Components",
    icon: "▲",
    color: "text-zinc-100",
  },
  {
    name: "TypeScript",
    description: "Strict mode, zero `any`",
    icon: "TS",
    color: "text-blue-400",
  },
  {
    name: "Tailwind CSS",
    description: "v4, utility-first styling",
    icon: "⚡",
    color: "text-cyan-400",
  },
  {
    name: "Supabase",
    description: "Postgres, Auth, RLS, Realtime",
    icon: "◆",
    color: "text-emerald-400",
  },
  {
    name: "Vercel",
    description: "Edge deployment, analytics",
    icon: "▲",
    color: "text-zinc-300",
  },
  {
    name: "Resend",
    description: "Transactional email via API",
    icon: "✉",
    color: "text-indigo-400",
  },
  {
    name: "Framer Motion",
    description: "Production-grade animations",
    icon: "◉",
    color: "text-pink-400",
  },
  {
    name: "Zod",
    description: "Runtime schema validation",
    icon: "⬡",
    color: "text-amber-400",
  },
] as const;

export default function TechStack() {
  const { t } = useI18n();

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.techStack.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{t.techStack.sectionSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {STACK.map((tech) => (
          <div
            key={tech.name}
            className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 px-5 py-4 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-300"
          >
            <span
              className={`font-mono text-lg font-bold w-8 text-center shrink-0 ${tech.color} group-hover:scale-110 transition-transform duration-200`}
            >
              {tech.icon}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-zinc-100 truncate">{tech.name}</p>
              <p className="text-[10px] text-zinc-500 truncate mt-0.5">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

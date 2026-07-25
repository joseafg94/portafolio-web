"use client";

import { useI18n } from "@/lib/i18n/context";
import { Zap } from "lucide-react";

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-4">
            {t.about.sectionTitle}
          </h2>
          <p className="text-zinc-500 text-sm font-mono uppercase tracking-wider mb-8">
            {t.about.sectionSubtitle}
          </p>
          <p className="text-zinc-300 leading-relaxed mb-5 text-sm">{t.about.body}</p>
          <p className="text-zinc-400 leading-relaxed text-sm">{t.about.bodyTwo}</p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-zinc-900/60 border border-zinc-800 px-5 py-3">
            <Zap size={16} className="text-emerald-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-300 italic">{t.about.tagline}</span>
          </div>
        </div>

        {/* Right: Stats / Visual Block */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { value: "1", label: "Live SaaS Product", sub: "Meniva in production" },
            { value: "5wk", label: "Fastest Delivery", sub: "Full SaaS MVP" },
            { value: "100%", label: "TypeScript", sub: "Strict mode, no any" },
            { value: "RLS", label: "Security Model", sub: "Supabase Row Level" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors duration-300"
            >
              <p className="text-2xl font-extrabold text-emerald-400">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold text-zinc-200">{stat.label}</p>
              <p className="mt-0.5 text-[10px] font-mono text-zinc-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

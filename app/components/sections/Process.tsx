"use client";

import { useI18n } from "@/lib/i18n/context";

const CONNECTOR_COLORS = [
  "from-emerald-500/40 to-indigo-500/20",
  "from-indigo-500/40 to-emerald-500/20",
  "from-emerald-500/40 to-indigo-500/20",
];

export default function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.process.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{t.process.sectionSubtitle}</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical connector line (desktop) */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/30 via-indigo-500/20 to-transparent hidden md:block" />

        <ol className="space-y-12">
          {t.process.steps.map((step, index) => (
            <li key={step.number} className="relative flex gap-8 group">
              {/* Step number bubble */}
              <div className="relative flex-shrink-0 flex items-start">
                <div className="h-16 w-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 group-hover:border-emerald-500/40 transition-colors duration-300">
                  <span className="font-mono text-lg font-extrabold text-emerald-400">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  {index < t.process.steps.length - 1 && (
                    <div className={`hidden md:block h-px flex-1 max-w-[60px] bg-gradient-to-r ${CONNECTOR_COLORS[index] ?? "from-zinc-800"}`} />
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

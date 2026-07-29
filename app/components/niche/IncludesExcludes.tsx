"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function IncludesExcludes({ data }: Props) {
  const { locale, t } = useI18n();
  const { includes, excludes } = data;

  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* ── Includes ── */}
          <div>
            <h2 className="mb-8 flex items-center gap-2 text-xl font-bold text-zinc-100">
              <span className="text-emerald-400" aria-hidden="true">
                ✓
              </span>
              {t.nicheUi.sectionIncludes}
            </h2>
            <ul className="space-y-3" role="list">
              {includes.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:border-emerald-500/20"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-400"
                  >
                    ✓
                  </span>
                  <div>
                    <p className="mb-0.5 text-sm font-semibold text-zinc-100">
                      {item.title[locale]}
                    </p>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {item.description[locale]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Excludes ── */}
          <div>
            <h2 className="mb-8 flex items-center gap-2 text-xl font-bold text-zinc-500">
              <span className="text-zinc-600" aria-hidden="true">
                ✕
              </span>
              {t.nicheUi.sectionExcludes}
            </h2>
            <ul className="space-y-3" role="list">
              {excludes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-sm text-zinc-700"
                  >
                    ✕
                  </span>
                  <span className="text-sm text-zinc-600 line-through">
                    {item[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

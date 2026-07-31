"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function NicheExcludes({ data }: Props) {
  const { locale, t } = useI18n();
  const { excludes } = data;

  if (!excludes || excludes.length === 0) return null;

  return (
    <section className="bg-zinc-950 py-16 border-t border-zinc-900">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-10 backdrop-blur-sm">
          <h2 className="mb-6 flex items-center justify-center gap-2 text-xl font-bold text-zinc-400 text-center sm:text-2xl">
            <span className="text-zinc-500" aria-hidden="true">
              ✕
            </span>
            {t.nicheUi.sectionExcludes}
          </h2>

          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {excludes.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-zinc-800/40 bg-zinc-950/40 p-3"
              >
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex-shrink-0 text-xs text-zinc-600 font-mono"
                >
                  ✕
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 line-through leading-relaxed">
                  {item[locale]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function IncludesExcludes({ data }: Props) {
  const { locale, t } = useI18n();
  const { includes } = data;

  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/30 py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
            {t.nicheUi.sectionIncludes}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-between rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-all duration-200 hover:border-emerald-500/30 hover:bg-zinc-900/90"
            >
              <div>
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-xs font-bold text-emerald-400">
                  ✓
                </div>
                <h3 className="mb-2 text-base font-semibold text-zinc-100">
                  {item.title[locale]}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-400">
                  {item.description[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function PainSection({ data }: Props) {
  const { locale } = useI18n();
  const { painSection } = data;

  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/40 py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-14 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
          {painSection.heading[locale]}
        </h2>

        <ul className="grid gap-3 sm:grid-cols-2" role="list">
          {painSection.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur-sm transition-colors hover:border-zinc-700"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex-shrink-0 text-base leading-none text-red-400"
              >
                ✕
              </span>
              <span className="text-sm leading-relaxed text-zinc-300">
                {bullet[locale]}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing line callout */}
        <div className="mt-12 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-5 text-center">
          <p className="text-base font-semibold leading-relaxed text-emerald-300 sm:text-lg">
            {painSection.closingLine[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

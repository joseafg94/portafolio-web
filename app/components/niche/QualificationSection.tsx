"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function QualificationSection({ data }: Props) {
  const { locale } = useI18n();
  const qualification = data.qualificationSection;

  if (!qualification) return null;

  return (
    <section className="bg-zinc-950 py-20 border-t border-zinc-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
          {qualification.heading[locale]}
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* For You Column */}
          <div className="rounded-2xl border border-emerald-500/30 bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-sm shadow-lg shadow-emerald-500/5">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-emerald-400">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-400">
                ✓
              </span>
              {qualification.forYouHeading[locale]}
            </h3>
            <ul className="space-y-4" role="list">
              {qualification.forYouBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] font-bold text-emerald-400">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                    {bullet[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You Column */}
          <div className="rounded-2xl border border-red-500/20 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-red-400/90">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-sm font-bold text-red-400">
                ✕
              </span>
              {qualification.notForYouHeading[locale]}
            </h3>
            <ul className="space-y-4" role="list">
              {qualification.notForYouBullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 text-[10px] font-bold text-red-400">
                    ✕
                  </span>
                  <span className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {bullet[locale]}
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

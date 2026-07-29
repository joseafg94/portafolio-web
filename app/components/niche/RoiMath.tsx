"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function RoiMath({ data }: Props) {
  const { locale } = useI18n();
  const { roiMath, primaryCtaHref } = data;

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative accent line */}
        <div
          aria-hidden="true"
          className="mx-auto mb-10 h-px w-24 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent"
        />

        <h2 className="mb-8 text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
          {roiMath.heading[locale]}
        </h2>

        <div className="mb-10 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 text-left backdrop-blur-sm sm:p-12">
          <p className="whitespace-pre-line text-base leading-relaxed text-zinc-300 sm:text-lg">
            {roiMath.copy[locale]}
          </p>
        </div>

        <a
          id="niche-roi-cta"
          href={primaryCtaHref}
          className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 text-base font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300"
        >
          {roiMath.ctaText[locale]}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>
    </section>
  );
}

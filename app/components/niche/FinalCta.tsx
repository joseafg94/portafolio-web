"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";
import ShinyText from "@/app/components/reactbits/ShinyText";
import Magnet from "@/app/components/reactbits/Magnet";

interface Props {
  data: NicheLandingData;
}

export default function FinalCta({ data }: Props) {
  const { locale } = useI18n();
  const { finalCta, availabilityBadge, primaryCtaHref, contactEmail } = data;

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-28">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(16,185,129,0.1)_0%,transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Scarcity badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 backdrop-blur-sm">
          <span
            aria-hidden="true"
            className="h-2 w-2 flex-shrink-0 rounded-full bg-red-400 animate-pulse"
          />
          <ShinyText
            text={availabilityBadge[locale]}
            speed={6}
            className="text-sm font-semibold text-red-400"
          />
        </div>

        <h2 className="mb-6 text-3xl font-black leading-[1.1] tracking-tight text-zinc-100 sm:text-4xl lg:text-5xl">
          {finalCta.heading[locale]}
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400 whitespace-pre-line">
          {finalCta.copy[locale]}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnet>
            <a
              id="niche-final-cta-primary"
              href={primaryCtaHref}
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-10 py-4 text-base font-bold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 cursor-pointer"
            >
              {finalCta.ctaPrimary[locale]}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Magnet>
          <a
            id="niche-final-cta-secondary"
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-100 cursor-pointer"
          >
            {finalCta.ctaSecondary[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}

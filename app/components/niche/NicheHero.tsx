"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";
import AnimatedHeadline from "@/app/components/ui/AnimatedHeadline";
import ShinyText from "@/app/components/reactbits/ShinyText";
import Magnet from "@/app/components/reactbits/Magnet";

interface Props {
  data: NicheLandingData;
}

export default function NicheHero({ data }: Props) {
  const { locale, t } = useI18n();
  const { hero, nicheName, nicheEmoji, primaryCtaHref } = data;

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-zinc-950 flex items-center justify-center">
      {/* Radial ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(16,185,129,0.07)_0%,transparent_70%)]"
      />
      {/* Subtle grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-28 text-center">
        {/* Niche badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 mb-10 backdrop-blur-sm">
          <span role="img" aria-label={nicheName[locale]}>
            {nicheEmoji}
          </span>
          <ShinyText
            text={`${t.nicheUi.forPrefix} ${nicheName[locale]}`}
            speed={6}
            className="text-xs font-semibold font-mono"
          />
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1]">
          <AnimatedHeadline
            text={hero.headline[locale]}
          />
        </h1>

        {/* Subheadline */}
        <p className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom motion-safe:duration-700 motion-safe:delay-200 mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl whitespace-pre-line">
          {hero.subheadline[locale]}
        </p>

        {/* CTAs */}
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 motion-safe:delay-300 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnet>
            <a
              id="niche-hero-cta-primary"
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-8 py-4 text-base font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-emerald-500/35 cursor-pointer"
            >
              {hero.ctaPrimary[locale]}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </Magnet>
          <a
            id="niche-hero-cta-secondary"
            href="#offer"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-500 hover:text-zinc-100 cursor-pointer"
          >
            {hero.ctaSecondary[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useI18n } from "@/lib/i18n/context";
import DecryptedText from "@/app/components/reactbits/DecryptedText";
import ShinyText from "@/app/components/reactbits/ShinyText";
import Magnet from "@/app/components/reactbits/Magnet";

export default function Hero() {
  const { t } = useI18n();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[85vh]">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[150px]" />

      {/* Availability Badge */}
      <div className="inline-flex items-center rounded-full bg-zinc-900/80 px-4 py-1.5 text-xs font-medium ring-1 ring-inset ring-zinc-800 mb-8 backdrop-blur-sm">
        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <ShinyText text={t.hero.badge} speed={6} className="font-mono" />
      </div>

      {/* Headline H1 with DecryptedText effect */}
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1] text-zinc-100">
        <DecryptedText text={t.hero.title} speed={55} delay={200} />
      </h1>

      {/* Subheadline */}
      <p className="mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl leading-relaxed">
        {t.hero.subtitle}
      </p>

      {/* Call to Actions */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
        {/* Primary CTA (Magnet) */}
        <Magnet onClick={() => handleScroll("contact")}>
          <button className="w-full sm:w-auto rounded-xl bg-emerald-500 px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10 cursor-pointer">
            {t.hero.ctaPrimary}
          </button>
        </Magnet>

        {/* Secondary CTA */}
        <button
          onClick={() => handleScroll("work")}
          className="w-full sm:w-auto rounded-xl border border-zinc-800 bg-zinc-900/30 px-7 py-4 text-sm font-semibold text-zinc-300 hover:text-zinc-100 hover:border-zinc-700 transition-colors cursor-pointer"
        >
          {t.hero.ctaSecondary}
        </button>
      </div>
    </section>
  );
}

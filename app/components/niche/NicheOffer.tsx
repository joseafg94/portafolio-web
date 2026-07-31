"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";
import ShinyText from "@/app/components/reactbits/ShinyText";
import Magnet from "@/app/components/reactbits/Magnet";

interface Props {
  data: NicheLandingData;
}

export default function NicheOffer({ data }: Props) {
  const { locale, t } = useI18n();
  const { offer, primaryCtaHref, hero } = data;

  const spotsTotal = 3;
  const spotsTaken = 1;
  const spotsRemaining = spotsTotal - spotsTaken;

  const limitedBadgeText =
    locale === "es"
      ? "⏳ Oportunidad Limitada — Tarifa Founding Partner"
      : "⏳ Limited Opportunity — Founding Partner Rate";

  const spotsTakenText =
    locale === "es"
      ? `${spotsTaken} de ${spotsTotal} cupos tomados • ${spotsRemaining} disponibles`
      : `${spotsTaken} of ${spotsTotal} spots taken • ${spotsRemaining} remaining`;

  return (
    <section id="offer" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Banner Container with thick emerald border and distinct gradient */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-500/80 bg-gradient-to-b from-emerald-950/40 via-zinc-900/90 to-zinc-950 p-8 sm:p-12 shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-500/20">
          
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-emerald-500/20 blur-3xl"
          />

          {/* Limited Time ShinyText Badge */}
          <div className="relative mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-4 py-1.5 backdrop-blur-sm shadow-inner shadow-emerald-500/10">
              <ShinyText
                text={limitedBadgeText}
                speed={4}
                className="text-xs sm:text-sm font-semibold font-mono text-emerald-300"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="relative mb-3 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
            {offer.heading[locale]}
          </h2>
          <p className="relative mb-8 text-center text-base leading-relaxed text-zinc-400">
            {offer.subheading[locale]}
          </p>

          {/* Visual Spots Counter Box */}
          <div className="relative mb-10 rounded-2xl border border-emerald-500/30 bg-zinc-950/70 p-5 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="block text-xs uppercase tracking-wider font-semibold text-emerald-400 mb-0.5">
                  {locale === "es" ? "Disponibilidad Limitada" : "Limited Availability"}
                </span>
                <span className="text-sm font-bold text-zinc-200">
                  {spotsTakenText}
                </span>
              </div>

              {/* Spots Graphic: Pills */}
              <div className="flex items-center gap-2">
                {[...Array(spotsTotal)].map((_, idx) => {
                  const isTaken = idx < spotsTaken;
                  return (
                    <div
                      key={idx}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={`h-3.5 w-9 rounded-full transition-all duration-300 ${
                          isTaken
                            ? "bg-zinc-700 border border-zinc-600 opacity-60"
                            : "bg-emerald-400 shadow-md shadow-emerald-500/50 animate-pulse"
                        }`}
                      />
                      <span className="text-[10px] font-mono text-zinc-400">
                        {isTaken
                          ? locale === "es"
                            ? "Tomado"
                            : "Taken"
                          : idx === spotsTaken
                            ? locale === "es"
                              ? "Tu cupo"
                              : "Next"
                            : locale === "es"
                              ? "Libre"
                              : "Open"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Price Block with Strong Anchoring */}
          <div className="relative mb-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 text-center">
            <span className="block text-xs uppercase tracking-wider font-bold text-zinc-400 mb-2">
              {locale === "es" ? "Precio Early Partner Especial" : "Early Partner Special Rate"}
            </span>
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-5xl font-black tracking-tight leading-none text-emerald-400 sm:text-6xl drop-shadow-sm">
                {offer.price}
              </span>
              <span className="mt-2 text-base text-zinc-500 line-through font-medium">
                {t.services.regularPrefix} {offer.regularPrice}
              </span>
            </div>
          </div>

          {/* Offer copy */}
          <p className="relative mx-auto mb-10 max-w-lg text-center leading-relaxed text-zinc-300 whitespace-pre-line">
            {offer.offerCopy[locale]}
          </p>

          {/* CTA */}
          <div className="relative flex justify-center">
            <Magnet>
              <a
                id="niche-offer-cta"
                href={primaryCtaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-10 py-4 text-base font-bold text-zinc-950 shadow-xl shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-emerald-500/40 cursor-pointer"
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
          </div>

          {/* Delivery time */}
          <p className="relative mt-6 text-center font-mono text-sm text-zinc-400">
            ⚡ {offer.deliveryTime[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

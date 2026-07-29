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

  return (
    <section id="offer" className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-1.5 backdrop-blur-sm">
            <ShinyText
              text={offer.badgeText[locale]}
              speed={6}
              className="text-xs font-semibold font-mono text-indigo-400"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/80 p-8 shadow-2xl shadow-emerald-500/5 ring-1 ring-emerald-500/10 sm:p-12">
          {/* Heading */}
          <h2 className="mb-3 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
            {offer.heading[locale]}
          </h2>
          <p className="mb-10 text-center text-base leading-relaxed text-zinc-400">
            {offer.subheading[locale]}
          </p>

          {/* Price */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="text-5xl font-black leading-none text-emerald-400 sm:text-6xl">
              {offer.price}
            </span>
            <span className="text-sm text-zinc-500 line-through">
              {t.services.regularPrefix} {offer.regularPrice}
            </span>
          </div>

          {/* Offer copy */}
          <p className="mx-auto mb-10 max-w-lg text-center leading-relaxed text-zinc-300 whitespace-pre-line">
            {offer.offerCopy[locale]}
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Magnet>
              <a
                id="niche-offer-cta"
                href={primaryCtaHref}
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-10 py-4 text-base font-bold text-zinc-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 cursor-pointer"
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
          <p className="mt-6 text-center font-mono text-sm text-zinc-500">
            ⚡ {offer.deliveryTime[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}

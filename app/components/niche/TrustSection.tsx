"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function TrustSection({ data }: Props) {
  const { locale } = useI18n();
  const { trust } = data;

  return (
    <section className="border-y border-zinc-800/60 bg-zinc-900/40 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
          {trust.heading[locale]}
        </h2>

        <ul className="mb-12 space-y-3" role="list">
          {trust.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-colors hover:border-zinc-700"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 flex-shrink-0 text-lg leading-none"
              >
                🛡️
              </span>
              <span className="text-sm leading-relaxed text-zinc-300">
                {bullet[locale]}
              </span>
            </li>
          ))}
        </ul>

        {/* Closing line */}
        <p className="text-center text-base font-semibold text-zinc-200">
          {trust.closingLine[locale]}
        </p>
      </div>
    </section>
  );
}

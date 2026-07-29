"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function NicheFaq({ data }: Props) {
  const { locale, t } = useI18n();
  const { faq } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-zinc-950 py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-black tracking-tight text-zinc-100 sm:text-4xl">
          {t.faq.sectionTitle}
        </h2>

        <div className="space-y-2" role="list">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                role="listitem"
                className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50"
              >
                <button
                  id={`niche-faq-toggle-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-zinc-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
                  aria-expanded={isOpen}
                  aria-controls={`niche-faq-answer-${i}`}
                >
                  <span className="pr-4 text-sm font-semibold text-zinc-100">
                    {item.question[locale]}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex-shrink-0 text-lg text-zinc-400 transition-transform duration-200 motion-safe:transition-transform ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`niche-faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`niche-faq-toggle-${i}`}
                    className="px-6 pb-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200"
                  >
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.answer[locale]}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

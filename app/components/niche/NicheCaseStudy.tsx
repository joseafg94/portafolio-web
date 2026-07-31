"use client";

import { useI18n } from "@/lib/i18n/context";
import type { NicheLandingData } from "@/types/niche-landing";

interface Props {
  data: NicheLandingData;
}

export default function NicheCaseStudy({ data }: Props) {
  const { locale } = useI18n();
  const caseStudy = data.caseStudy;

  if (!caseStudy) return null;

  const isDemo = caseStudy.badge === "demo";
  const badgeLabel = isDemo
    ? locale === "es"
      ? "Demo / Prototipo Interactivo"
      : "Interactive Demo Prototype"
    : locale === "es"
      ? "Caso Real / Cliente Activo"
      : "Live Client Case Study";

  return (
    <section className="bg-zinc-950 py-20 border-t border-zinc-900">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-sm">
          {/* Header & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                isDemo
                  ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isDemo ? "bg-amber-400" : "bg-emerald-400"
                }`}
              />
              {badgeLabel}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-4">
            {caseStudy.title[locale]}
          </h3>
          <p className="text-base text-zinc-300 sm:text-lg leading-relaxed mb-8">
            {caseStudy.description[locale]}
          </p>

          {/* Metrics Grid */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {caseStudy.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-800/80 bg-zinc-950/50 p-4"
                >
                  <p className="text-2xl font-black text-emerald-400 sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-zinc-400 mt-1 sm:text-sm">
                    {metric.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Video Player */}
          {caseStudy.demoVideo && (
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
              <video
                className="w-full h-auto aspect-video object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                {caseStudy.demoVideo.webm && (
                  <source src={caseStudy.demoVideo.webm} type="video/webm" />
                )}
                <source src={caseStudy.demoVideo.mp4} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

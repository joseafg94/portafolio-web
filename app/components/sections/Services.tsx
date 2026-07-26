"use client";

import { useI18n } from "@/lib/i18n/context";
import { services } from "@/lib/services";
import { Check, X } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const { t, locale } = useI18n();

  const handleSelect = (serviceId: string) => {
    onSelectService(serviceId);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.services.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          {t.services.sectionSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all hover:bg-zinc-900/60 duration-300"
          >
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20 mb-3">
                  {service.spotsLeft} {t.services.spotsLeft}
                </span>
                <h3 className="text-xl font-bold text-zinc-100">{service.name[locale]}</h3>
                <p className="mt-2 text-sm text-zinc-400">{service.tagline[locale]}</p>
              </div>

              {/* Pricing */}
              <div className="mb-6 border-y border-zinc-800 py-6">
                <p className="text-xs text-zinc-500 line-through">
                  {t.services.regularPrefix} {service.regularPrice}
                </p>
                <p className="mt-1 text-3xl font-extrabold text-emerald-400">
                  {service.foundingPrice}
                </p>
                {service.retainerNote && (
                  <p className="mt-1 text-[10px] text-zinc-500 font-mono leading-relaxed">
                    {service.retainerNote[locale]}
                  </p>
                )}
                {service.foundingNotice && (
                  <p className="mt-2 text-[11px] text-emerald-500/80 font-mono leading-relaxed">
                    ✦ {service.foundingNotice[locale]}
                  </p>
                )}
                <p className="mt-1 text-xs text-zinc-400 font-mono">
                  {t.services.deliveryPrefix} {service.deliveryTime}
                </p>
              </div>

              {/* Inclusions */}
              <div className="mb-8">
                <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
                  {t.services.includes}
                </h4>
                <ul className="space-y-3">
                  {service.includes.map((inc, i) => (
                    <li key={i} className="flex items-start text-xs text-zinc-300">
                      <Check className="mr-2 h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{inc[locale]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              {service.excludes.length > 0 && (
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                    {t.services.excludes}
                  </h4>
                  <ul className="space-y-3">
                    {service.excludes.map((exc, i) => (
                      <li key={i} className="flex items-start text-xs text-zinc-500">
                        <X className="mr-2 h-4 w-4 text-zinc-700 shrink-0 mt-0.5" />
                        <span>{exc[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => handleSelect(service.id)}
              className="mt-6 w-full rounded-xl bg-zinc-800 py-3 text-xs font-bold text-zinc-100 hover:bg-emerald-500 hover:text-zinc-950 transition-all cursor-pointer"
            >
              {service.ctaLabel[locale]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

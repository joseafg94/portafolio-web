"use client";

import { useI18n } from "@/lib/i18n/context";
import ContactForm from "./ContactForm";
import { Mail, Calendar } from "lucide-react";

interface ContactProps {
  selectedService: string;
}

export default function Contact({ selectedService }: ContactProps) {
  const { t } = useI18n();

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Copy & Direct Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              {t.contact.sectionTitle}
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {/* Email link */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{t.contact.emailLabel2}</p>
                <a href="mailto:hello@kvasirlabs.com" className="text-sm font-semibold text-zinc-200 hover:text-emerald-400 transition-colors">
                  hello@kvasirlabs.com
                </a>
              </div>
            </div>

            {/* Calendly Secondary Link */}
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{t.contact.callLabel}</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm font-semibold text-zinc-400 hover:text-zinc-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {t.contact.callCTA}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Contact Form */}
        <div className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800/80 rounded-2xl p-8">
          <ContactForm selectedService={selectedService} />
        </div>
      </div>
    </section>
  );
}

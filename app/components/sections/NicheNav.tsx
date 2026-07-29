"use client";

import { useI18n } from "@/lib/i18n/context";
import type { LocaleString } from "@/types/project";

interface Props {
  nicheName: LocaleString;
  nicheEmoji: string;
}

export default function NicheNav({ nicheName, nicheEmoji }: Props) {
  const { locale, setLocale, t } = useI18n();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + niche badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="/"
              className="font-mono text-lg font-bold tracking-wider text-zinc-100 hover:text-emerald-400 transition-colors"
            >
              KVASIR<span className="text-emerald-400">LABS</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-400">
              <span role="img" aria-label={nicheName[locale]}>
                {nicheEmoji}
              </span>
              {t.nicheUi.forPrefix} {nicheName[locale]}
            </span>
          </div>

          {/* Language selector */}
          <div className="flex items-center space-x-1 rounded-full border border-zinc-800 bg-zinc-900/50 p-1">
            <button
              onClick={() => setLocale("en")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                locale === "en"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-label="Set language to English"
            >
              EN
            </button>
            <button
              onClick={() => setLocale("es")}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                locale === "es"
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
              aria-label="Establecer idioma a Español"
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

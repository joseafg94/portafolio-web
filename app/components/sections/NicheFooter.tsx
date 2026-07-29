"use client";

import { useI18n } from "@/lib/i18n/context";
import type { LocaleString } from "@/types/project";

interface Props {
  contactEmail: string;
  availabilityBadge: LocaleString;
}

export default function NicheFooter({ contactEmail, availabilityBadge }: Props) {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Brand */}
          <span className="font-mono text-sm font-bold tracking-wider text-zinc-100">
            KVASIR<span className="text-emerald-400">LABS</span>
          </span>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400 animate-pulse"
            />
            <span className="text-xs font-semibold text-red-400">
              {availabilityBadge[locale]}
            </span>
          </div>

          {/* Contact email */}
          <a
            href={`mailto:${contactEmail}`}
            className="text-sm text-zinc-400 transition-colors hover:text-emerald-400"
          >
            {contactEmail}
          </a>
        </div>

        <p className="mt-8 text-center text-xs font-mono text-zinc-700">
          © {new Date().getFullYear()} Kvasir Labs. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

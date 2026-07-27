"use client";

import { useI18n } from "@/lib/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-mono text-sm font-bold tracking-wider text-zinc-100">
              KVASIR<span className="text-emerald-400">LABS</span>
            </span>
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Kvasir Labs. {t.footer.rights}
            </p>
          </div>

          {/* Contact Email & Socials */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:hello@kvasirlabs.com"
              className="text-sm text-zinc-300 hover:text-emerald-400 transition-colors"
            >
              hello@kvasirlabs.com
            </a>
            <div className="flex space-x-4 text-xs">
              <a href="#" className="hover:text-zinc-100 transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-zinc-100 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-8 border-t border-zinc-900 pt-6 text-center">
          <p className="text-xs text-zinc-600 font-mono max-w-md mx-auto">
            {t.footer.privacy}
          </p>
        </div>
      </div>
    </footer>
  );
}

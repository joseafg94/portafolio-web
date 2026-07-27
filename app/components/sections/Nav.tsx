"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n/context";
import { Menu, X, Globe } from "lucide-react";

export default function Nav() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-mono text-lg font-bold tracking-wider text-zinc-100">
              KVASIR<span className="text-emerald-400">LABS</span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions: Lang Selector & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Language Selector (Always visible) */}
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 focus:outline-none md:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {isOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 md:hidden motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-top motion-safe:duration-200">
          <div className="space-y-1 px-2 pb-4 pt-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2.5 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export default function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.faq.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">{t.faq.sectionSubtitle}</p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto divide-y divide-zinc-900">
        {t.faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index}>
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 rounded-md group"
                aria-expanded={isOpen}
              >
                <span
                  className={`text-sm font-semibold leading-snug transition-colors duration-200 ${
                    isOpen ? "text-emerald-400" : "text-zinc-100 group-hover:text-zinc-50"
                  }`}
                >
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={`shrink-0 transition-colors duration-200 ${
                    isOpen ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                >
                  <Plus size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-zinc-400">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

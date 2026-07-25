"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "./en";
import { es } from "./es";

export type Locale = "en" | "es";
export type Dictionary = typeof en;

interface I18nContextType {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Load language preference from localStorage if available
  useEffect(() => {
    const savedLocale = localStorage.getItem("preferred-locale") as Locale;
    if (savedLocale === "en" || savedLocale === "es") {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("preferred-locale", newLocale);
  };

  const t = locale === "en" ? en : es;

  return (
    <I18nContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}

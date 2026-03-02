import { createContext, useContext, useState, ReactNode } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

export type Lang = "fr" | "en";

const translations: Record<Lang, typeof fr> = { fr, en: en as typeof fr };

function resolve(obj: unknown, keys: string[]): unknown {
  let cur = obj;
  for (const k of keys) {
    if (typeof cur !== "object" || cur === null) return undefined;
    cur = (cur as Record<string, unknown>)[k];
  }
  return cur;
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  ta: <T>(key: string) => T[];
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  const t = (key: string): string => {
    const val = resolve(translations[lang], key.split("."));
    return typeof val === "string" ? val : key;
  };

  const ta = <T,>(key: string): T[] => {
    const val = resolve(translations[lang], key.split("."));
    return Array.isArray(val) ? (val as T[]) : [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}

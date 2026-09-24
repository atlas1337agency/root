import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, Translations, translations } from "../translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "atlas1337-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL search params first (great for SEO crawler links like ?lang=ar)
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get("lang") as Language;
      if (urlLang && ["en", "fr", "es", "ar"].includes(urlLang)) {
        return urlLang;
      }
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved && ["en", "fr", "es", "ar"].includes(saved)) {
        return saved;
      }
    }
    return "en";
  });

  const dir: "ltr" | "rtl" = language === "ar" ? "rtl" : "ltr";
  const t = translations[language];

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", language);
    root.setAttribute("dir", dir);
    localStorage.setItem(STORAGE_KEY, language);

    // Dynamic Title & Meta for strong SEO
    if (language === "ar") {
      document.title = "ATLAS 1337 | تمكين الشركات بالذكاء الاصطناعي وتطوير الويب";
    } else if (language === "fr") {
      document.title = "ATLAS 1337 | Propulsez Votre Entreprise avec l'IA & le Web";
    } else if (language === "es") {
      document.title = "ATLAS 1337 | Impulsa Tu Negocio con IA y Desarrollo Web";
    } else {
      document.title = "ATLAS 1337 | Empowering Businesses with AI & Automation";
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

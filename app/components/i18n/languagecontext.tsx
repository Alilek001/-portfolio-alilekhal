"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { dictionary, Dict, Lang } from "./translations";

interface LanguageContextValue {
  lang: Lang;
  t: Dict;
  toggleLang: () => void;
}

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext<LanguageContextValue>({
  lang: "es",
  t: dictionary.es,
  toggleLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Español por defecto. Se recuerda la elección del visitante en este navegador.
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") setLang(saved);
    } catch {
      // localStorage no disponible: se queda en español
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionary[lang].htmlLang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((current) => {
      const next: Lang = current === "es" ? "en" : "es";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignorar
      }
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({ lang, t: dictionary[lang], toggleLang }),
    [lang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

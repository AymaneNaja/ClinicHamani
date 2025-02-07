"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

const languages = {
  en: "English",
  fr: "Français",
  ar: "العربية"
}

const LanguageContext = createContext<{
  language: keyof typeof languages
  setLanguage: (lang: keyof typeof languages) => void
}>({
  language: "en",
  setLanguage: () => {}
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<keyof typeof languages>(() => {
    // Vérifier si une langue est déjà stockée
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as keyof typeof languages) || detectBrowserLanguage()
    }
    return "en"
  })

  // Sauvegarder la langue sélectionnée dans localStorage
   useEffect(() => {
    // Move the initialization logic to useEffect to run only on client-side
    const savedLanguage = localStorage.getItem("language") as keyof typeof languages
    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = detectBrowserLanguage()
      setLanguage(browserLang)
    }
  }, [])
  // Détecter la langue du navigateur (par défaut "en" si non supportée)
  function detectBrowserLanguage(): keyof typeof languages {
    const browserLang = navigator.language.split("-")[0] as keyof typeof languages
    return languages[browserLang] ? browserLang : "en"
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

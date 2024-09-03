import { initReactI18next } from "react-i18next"

import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Backend from "i18next-http-backend"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en-US",
    supportedLngs: ["en-US", "pt-BR"],
    debug: process.env.NODE_ENV === "production" ? false : true,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';  
import uztranslate from "../src/locales/uz/translation.json"
import rutranslate from "../src/locales/ru/translation.json"
import entranslate from "../src/locales/en/translation.json"

const resources = {
    en: {
      translation: entranslate,
    },
    uz: {
      translation: uztranslate,
    },
    ru: {
      translation: rutranslate,
    },
  };
i18n
  .use(HttpBackend)  
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",  
    interpolation: {
      escapeValue: false,  
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;

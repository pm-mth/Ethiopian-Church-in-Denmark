import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './en.json';
import am from './am.json';

i18n
  .use(LanguageDetector) // Automatically detect user's language
  .use(initReactI18next) // Bind i18n to react-i18next
  .init({
    resources: {
      en: { translation: en },
      am: { translation: am },
    },
    fallbackLng: 'en', // Fallback language if user's language is not available
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
    detection: {
      order: ['localStorage', 'navigator'], // Language detection order
      caches: ['localStorage'], // Cache the user's language in localStorage
    },
  });

export default i18n;

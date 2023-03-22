import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';
import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  de: { translation: de },
};

export const defaultNS = 'translation';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    fallbackLng: 'ru',
    supportedLngs: ['en', 'ru', 'de'],
    ns: ['translation'],
    defaultNS,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;

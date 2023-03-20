import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';
import en from './locales/en.json';
import ge from './locales/ge.json';

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  ge: { translation: ge },
};

export const defaultNS = 'translation';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'ru',
    supportedLngs: ['en', 'ru', 'ge'],
    ns: ['translation'],
    defaultNS,
    load: 'languageOnly',
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next'
import ruTranslation from "./locales/ru/translation.json"
import enTranslation from "./locales/en/translation.json"

i18n
  .use(initReactI18next)
  .init({
    resources: {
        ru: {
            translation: ruTranslation,
          },
        en: {
            translation: enTranslation,
          },
    },
    lng: 'ru', // Set the default language
    fallbackLng: 'ru', // Fallback language if a translation is missing
    interpolation: {
      escapeValue: false, // React already escapes variables
    },
  });

  export default i18n;
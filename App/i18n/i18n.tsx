import { I18n } from 'i18n-js';
import { findBestLanguageTag } from "react-native-localize";
import en from './locales/en';
import fr from './locales/fr'

const translations = {
  en: en,
  fr: fr
}

const i18n = new I18n(translations);
const bestLanguage = findBestLanguageTag(["en", "fr"]);
console.log(bestLanguage)
i18n.defaultLocale = "en"
i18n.locale = bestLanguage?.languageTag ?? "en";
 
export default i18n;
// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// importe aqui todos os seus JSONs de tradução:
import enHistory from "./locales/enus/history.json";
import ptbrHistory from "./locales/ptbr/history.json";
import enNavbar   from './locales/enus/navbar.json';
import ptbrNavbar from './locales/ptbr/navbar.json';
import enPortfolio from "./locales/enus/portfolio.json";
import ptPortfolio from "./locales/ptbr/portfolio.json";
import enAbout from "./locales/enus/about.json";
import ptAbout from "./locales/ptbr/about.json";
import enPublications from "./locales/enus/publications.json";
import ptPublications from "./locales/ptbr/publications.json";
import enContact from "./locales/enus/contact.json";
import ptContact from "./locales/ptbr/contact.json";  

i18n
  .use(LanguageDetector) // detecta idioma via localStorage/navigator
  .use(initReactI18next) // conecta ao React
  .init({
    resources: {
      en: {
        history: enHistory,
        navbar: enNavbar,
        portfolio: enPortfolio,
        about: enAbout,
        publications: enPublications,
        contact: enContact,
      },
      ptBR: {
        history: ptbrHistory,
        navbar: ptbrNavbar, 
        portfolio: ptPortfolio,
        about: ptAbout,
        publications: ptPublications,
        contact: ptContact,
      },
    },
    fallbackLng: "en",
    ns: ["navbar", "history", "portfolio", "about", "publications", "contact"],
    defaultNS: "navbar",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

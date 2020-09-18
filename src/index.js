import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_fr from "./locale/fr/translation.json";
import common_en from "./locale/en/translation.json";
import common_it from "./locale/it/translation.json";
import common_ru from "./locale/ru/translation.json";
import common_es from "./locale/es/translation.json";
import common_pl from "./locale/pl/translation.json";
import detector from "i18next-browser-languagedetector";
import App from "./App";

i18next.use(detector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  detection: {
    lookupLocalStorage: "language",
  },
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    fr: {
      common: common_fr,
    },
    es: {
      common: common_es,
    },
    pl: {
      common: common_pl,
    },
    it: {
      common: common_it,
    },
    ru: {
      common: common_ru,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

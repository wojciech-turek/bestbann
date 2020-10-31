import React from "react";
import ReactDOM from "react-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
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

const history = createBrowserHistory();

const trackingId = "UA-73653343-2";
ReactGA.initialize(trackingId);

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

i18next.use(detector).init({
  interpolation: { escapeValue: false },
  detection: {
    lookupLocalStorage: "language",
  },
  fallbackLng: "en",
  resources: {
    en: {
      common: common_en,
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
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById("root")
);

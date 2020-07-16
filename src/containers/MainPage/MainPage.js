import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import MainSection from "./MainSection/MainSection";
import AboutUs from "./AboutUs/AboutUs";

import { useTranslation } from "react-i18next";

import classes from "./MainPage.module.css";
import Products from "./Products/Products";

export default function MainPage() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.Main}>
      <HeroBanner />
      <MainSection
        title={t("mainSections.aboutUs.title")}
        content={<AboutUs />}
      />
      <MainSection
        title={t("mainSections.products.title")}
        content={<Products />}
      />
      <MainSection title={t("mainSections.wmud.title")} />
    </div>
  );
}

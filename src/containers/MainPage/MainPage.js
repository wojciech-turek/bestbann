import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import MainSection from "./MainSection/MainSection";

import { useTranslation } from "react-i18next";

import classes from "./MainPage.module.css";

export default function MainPage() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.Main}>
      <HeroBanner />
      <MainSection title={t("mainSections.aboutUs.title")} content={"text"} />
      <MainSection title={t("mainSections.products.title")} />
      <MainSection title={t("mainSections.wmud.title")} />
    </div>
  );
}

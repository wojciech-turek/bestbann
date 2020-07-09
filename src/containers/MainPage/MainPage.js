import React from "react";
import HeroBanner from "./HeroBanner/HeroBanner";
import { useTranslation } from "react-i18next";

import classes from "./MainPage.module.css";

export default function MainPage() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.Main}>
      <HeroBanner />
      <h1>{t("title")}</h1>
    </div>
  );
}

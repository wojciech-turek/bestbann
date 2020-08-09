import React, { useEffect } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainSection from "../../components/MainSection/MainSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhatMUD from "../../components/WhatMUD/WhatMUD";
import { useTranslation } from "react-i18next";

import classes from "./MainPage.module.css";
import Products from "../../components/Products/Products";

export default function MainPage() {
  useEffect(() => {
    document.title = "BestBann - Home";
  }, []);
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
      <MainSection
        title={t("mainSections.whatMUD.title")}
        content={<WhatMUD />}
      />
    </div>
  );
}

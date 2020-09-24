import React, { useEffect } from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainSection from "../../components/MainSection/MainSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhatMUD from "../../components/WhatMUD/WhatMUD";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
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
      <CookieConsent
        location="bottom"
        buttonText={t("cookie.button")}
        cookieName="myAwesomeCookieName2"
        style={{
          background: "rgba(0,0,0,0.8)",
          color: "#fff",
          fontFamily: "Montserrat",
          textAlign: "left",
          borderTop: "1px solid gray",
        }}
        buttonStyle={{ color: "#222", fontSize: "14px", height: 40 }}
        expires={150}
        acceptOnScroll={true}
      >
        {t("cookie.text")}
      </CookieConsent>
    </div>
  );
}

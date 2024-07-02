import { Fade } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import AboutUs from "../../components/AboutUs/AboutUs";
import AdditionalSection from "../../components/AdditionalSection/AdditionalSection";
import CookieBanner from "../../components/CookieBanner/CookieBanner";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainSection from "../../components/MainSection/MainSection";
import Products from "../../components/Products/Products";
import WhatMUD from "../../components/WhatMUD/WhatMUD";
import SEO from "../../utils/SEO";
import classes from "./MainPage.module.css";

function MainPage() {
  const cookies = new Cookies();
  let cookiesAcc = cookies.get("cookieAcc");
  const setCookiesAcc = () => {
    cookies.set("cookieAcc", true, { path: "/" });
  };

  const { t } = useTranslation("common");
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Main}>
        <SEO title={t("menu.mainPage")} />
        <HeroBanner />
        <MainSection
          title={t("mainSections.aboutUs.title")}
          content={<AboutUs />}
        />
        <AdditionalSection
          title={t("mainSections.products.title")}
          content={<Products />}
        />
        <AdditionalSection
          title={t("mainSections.whatMUD.title")}
          content={<WhatMUD />}
        />
        {cookiesAcc === undefined ? (
          <CookieBanner setCookiesAcc={setCookiesAcc} />
        ) : null}
      </div>
    </Fade>
  );
}

export default MainPage;

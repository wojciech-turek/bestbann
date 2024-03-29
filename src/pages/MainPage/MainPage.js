import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MainSection from "../../components/MainSection/MainSection";
import AboutUs from "../../components/AboutUs/AboutUs";
import WhatMUD from "../../components/WhatMUD/WhatMUD";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";
import classes from "./MainPage.module.css";
import Products from "../../components/Products/Products";
import { Fade } from "@material-ui/core";
import Cookies from "universal-cookie";
import SEO from "../../utils/SEO";
import AdditionalSection from "../../components/AdditionalSection/AdditionalSection";

function MainPage(props) {
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
            sameSite="none"
            cookieSecurity={true}
            buttonStyle={{ color: "#222", fontSize: "14px", height: 40 }}
            expires={150}
            onAccept={() => setCookiesAcc(true)}
          >
            {t("cookie.text")}
          </CookieConsent>
        ) : null}
      </div>
    </Fade>
  );
}

export default MainPage;

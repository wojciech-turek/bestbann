// components/CookieBanner.js

import Cookie from "js-cookie";
import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslation } from "react-i18next";
import classes from "./CookieBanner.module.css";

const CookieBanner = ({ setCookiesAcc }) => {
  const [savedPreferences, setSavedPreferences] = useState(false);
  const { t } = useTranslation("common");
  const [preferences, setPreferences] = useState({
    analytics: true,
    marketing: true,
    functional: true,
  });

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true, functional: true });
    Cookie.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
    setCookiesAcc();
  };

  const handleRejectAll = () => {
    setPreferences({ analytics: false, marketing: false, functional: false });
    Cookie.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
    setCookiesAcc();
  };

  const handlePreferences = () => {
    Cookie.set("cookieConsent", JSON.stringify(preferences), { expires: 365 });
    setCookiesAcc();
    setSavedPreferences(true);
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  if (savedPreferences) {
    return null;
  }

  return (
    <CookieConsent
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "100vw",
        flexDirection: "column",
        background: "rgba(0,0,0,0.9)",
        color: "#fff",
        fontFamily: "Montserrat",
        textAlign: "left",
        borderTop: "1px solid gray",
      }}
      contentStyle={{
        display: "flex",
        maxHeight: "auto",
        maxWidth: "100vw",
        flexDirection: "column",
        textWrap: "wrap",
      }}
      location="bottom"
      onAccept={handleAcceptAll}
      onDecline={handleRejectAll}
      enableDeclineButton
      declineButtonStyle={{
        background: "#e03838",
        borderRadius: "5px",
        padding: "0.5rem 1rem",
        width: 180,
        margin: 0,
      }}
      buttonStyle={{
        background: "#027a0a",
        borderRadius: "5px",
        color: "white",
        width: 180,
        padding: "0.5rem 1rem",
      }}
      buttonText={t("cookie.button")}
      declineButtonText={t("cookie.decline")}
      sameSite="none"
    >
      <div className={classes.wrapper}>
        <p className={classes.cookieParagraph}>{t("cookie.info")}</p>
        <p className={classes.cookieParagraph}> {t("cookie.preferences")}</p>
      </div>
      <div className={classes.cookiePreferences}>
        <label>
          <input
            type="checkbox"
            name="analytics"
            checked={preferences.analytics}
            onChange={handlePreferenceChange}
          />
          {t("cookie.analytics")}
        </label>
        <label>
          <input
            type="checkbox"
            name="marketing"
            checked={preferences.marketing}
            onChange={handlePreferenceChange}
          />
          {t("cookie.marketing")}
        </label>
        <label>
          <input
            type="checkbox"
            name="functional"
            className={classes.inputCheckbox}
            checked={preferences.functional}
            onChange={handlePreferenceChange}
          />
          {t("cookie.functional")}
        </label>
        <button
          className={classes.savePreferencesBtn}
          onClick={handlePreferences}
        >
          {t("cookie.save")}
        </button>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;

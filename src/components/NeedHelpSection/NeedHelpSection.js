import React from "react";
import classes from "./NeedHelpSection.module.css";
import CSImage from "../../assets/csimage2.png";
import MessengerSVG from "../../assets/messenger.svg";
import WhatsappSVG from "../../assets/whatsapp.svg";
import { useTranslation } from "react-i18next";

export default function NeedHelpSection() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.Container}>
      <img src={CSImage} alt="Customer Service" className={classes.CSImage} />
      <h2 className={classes.sideTitle}>{t("needHelp.title")}</h2>
      <p>{t("needHelp.ourCS")}</p>
      <p>
        {t("needHelp.wholesale")}
        <br />
        <span className={classes.email}>
          <strong>
            <a href="mailto:office@bestbann.com">office@bestbann.com</a>
          </strong>
        </span>
      </p>
      <p>
        {t("needHelp.individual")}
        <br />
        <span className={classes.email}>
          <strong>
            <a href="https://bestbannshop.eu/" target="blank" alt="store link">
              www.bestbannshop.eu
            </a>
          </strong>
        </span>
      </p>
      <p>{t("needHelp.message")}</p>
      <br />
      <div className={classes.socialIcons}>
        <a href="http://m.me/bestbann" target="blank" alt="messenger contact">
          <img
            className={classes.socialContact}
            src={MessengerSVG}
            alt="Messenger Icon"
          />
        </a>
        <a
          href="https://wa.me/+48692933069"
          target="blank"
          alt="whatsapp contact"
        >
          <img
            className={classes.socialContact}
            src={WhatsappSVG}
            alt="whatsapp Icon"
          />
        </a>
      </div>
    </div>
  );
}

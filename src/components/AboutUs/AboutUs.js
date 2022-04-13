import React from "react";
import madeInEuImg from "../../assets/madeineu.png";
import qualityImg from "../../assets/quality.png";
import classes from "./AboutUs.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Trans, useTranslation } from "react-i18next";

export default function AboutUs(props) {
  const { t } = useTranslation("common");
  return (
    <ScrollAnimation animateIn="animate__fadeInRight" animateOnce={true}>
      <div className={classes.sectionContainer}>
        <img
          src={madeInEuImg}
          alt="Made in Europe"
          className={classes.AboutUsImg}
        />
        <div>
          <Trans>
            <p className={classes.aboutUsParagraph}>
              {t("mainSections.aboutUs.content1")}
            </p>
            <p className={classes.aboutUsParagraph}>
              {t("mainSections.aboutUs.content2")}
            </p>
            <p className={classes.aboutUsParagraph}>
              {t("mainSections.aboutUs.content3")}
            </p>
          </Trans>
        </div>
        <img
          src={qualityImg}
          alt="Made in Europe"
          className={classes.AboutUsImg}
        />
      </div>
    </ScrollAnimation>
  );
}

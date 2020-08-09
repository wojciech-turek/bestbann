import React from "react";
import madeInEuImg from "../../assets/madeineu.png";
import qualityImg from "../../assets/quality.png";
import classes from "./AboutUs.module.css";

import { Trans, useTranslation } from "react-i18next";

export default function AboutUs(props) {
  const { t } = useTranslation("common");
  return (
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
        </Trans>
      </div>
      <img
        src={qualityImg}
        alt="Made in Europe"
        className={classes.AboutUsImg}
      />
    </div>
  );
}

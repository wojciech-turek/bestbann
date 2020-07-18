import React from "react";
import classes from "./WhatMUD.module.css";
import rattanImg from "../../../assets/rattanMaterial.jpg";
import certificateImg from "../../../assets/certificate.png";
import tailoredImg from "../../../assets/tailored.jpg";

import { useTranslation, Trans } from "react-i18next";

export default function WhatMUD() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.WMUDCategory}>
        <h3>{t("mainSections.whatMUD.material.header")}</h3>
        <Trans>
          <div>{t("mainSections.whatMUD.material.content")}</div>
        </Trans>
        <img className={classes.WMUDImg} src={rattanImg} alt="Natural Rattan" />
      </div>
      <div className={classes.WMUDCategory}>
        <h3>{t("mainSections.whatMUD.certificate.header")}</h3>
        <Trans>
          <div>{t("mainSections.whatMUD.certificate.inAccrodance")}</div>
          <ul>
            <li>- {t("mainSections.whatMUD.certificate.point1")}</li>
            <li>- {t("mainSections.whatMUD.certificate.point2")}</li>
          </ul>
        </Trans>
        <img
          className={classes.WMUDImg}
          src={certificateImg}
          alt="Certificates"
        />
      </div>
      <div className={classes.WMUDCategory}>
        <h3>{t("mainSections.whatMUD.tailored.header")}</h3>
        <Trans>
          <div>{t("mainSections.whatMUD.tailored.content")}</div>
        </Trans>
        <img
          className={classes.WMUDImg}
          src={tailoredImg}
          alt="Tailored Baskets"
        />
      </div>
    </div>
  );
}

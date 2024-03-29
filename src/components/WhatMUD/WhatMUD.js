import React from "react";
import Img from "react-cool-img";
import classes from "./WhatMUD.module.css";
import rattanImg from "../../assets/rattanMaterialCompressed.jpg";
import certificateImg from "../../assets/certificateSmall.png";
import certificateImgBig from "../../assets/certificates.pdf";
import tailoredImg from "../../assets/tailoredCompressed.jpg";
import { useTranslation, Trans } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function WhatMUD() {
  const { t } = useTranslation("common");

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.WMUDCategory}>
        <ScrollAnimation animateIn="animate__fadeInUp" animateOnce={true}>
          <h3 className={classes.itemTitle}>
            {t("mainSections.whatMUD.material.header")}
          </h3>
          <Trans>
            <div>{t("mainSections.whatMUD.material.content")}</div>
          </Trans>
          <div className={classes.ImgWrapper}>
            <Img
              className={classes.WMUDImg}
              src={rattanImg}
              alt="Natural Rattan"
            />
          </div>
        </ScrollAnimation>
      </div>

      <div className={classes.WMUDCategory}>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          delay={250}
          animateOnce={true}
        >
          <h3 className={classes.itemTitle}>
            {t("mainSections.whatMUD.certificate.header")}
          </h3>
          <Trans>
            <div>{t("mainSections.whatMUD.certificate.inAccrodance")}</div>
            <ul>
              <li>- {t("mainSections.whatMUD.certificate.point1")}</li>
              <li>- {t("mainSections.whatMUD.certificate.point2")}</li>
            </ul>
          </Trans>

          <div className={classes.ImgWrapper}>
            <img
              className={classes.WMUDImg}
              src={certificateImg}
              alt="Certificates"
            />
          </div>

          <a
            className={classes.downloadLink}
            href={certificateImgBig}
            download="BestBann Certificate"
          >
            {t("mainSections.whatMUD.certificate.downloadCert")}
          </a>
        </ScrollAnimation>
      </div>

      <div className={classes.WMUDCategory}>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          delay={500}
          animateOnce={true}
        >
          <h3 className={classes.itemTitle}>
            {t("mainSections.whatMUD.tailored.header")}
          </h3>
          <Trans>
            <div>{t("mainSections.whatMUD.tailored.content")}</div>
          </Trans>
          <div className={classes.ImgWrapper}>
            <img
              className={classes.WMUDImg}
              src={tailoredImg}
              alt="Tailored Baskets"
            />
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}

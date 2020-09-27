import React from "react";
import classes from "./PrivacyPolicy.module.css";
import { Fade } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
export default function PrivacyPolicy() {
  const { t } = useTranslation("common");
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Container}>
        <h1 className={classes.header}>{t("privacyPolicy.title")}</h1>
        <div className={classes.paragraph}>
          <p>
            <strong>{t("privacyPolicy.intro")}</strong>
          </p>
          <p>{t("privacyPolicy.dataProtection")}</p>
          <p>{t("privacyPolicy.point1")}</p>
          <p>{t("privacyPolicy.point1text1")}</p>
          <p>{t("privacyPolicy.point2")}</p>
          <p>{t("privacyPolicy.point2text1")}</p>
          <p>{t("privacyPolicy.point2text2")}</p>
          <p>{t("privacyPolicy.point2list.listHeader")}</p>
          <ul>
            <li>{t("privacyPolicy.point2list.listp1")}</li>
            <li>{t("privacyPolicy.point2list.listp2")}</li>
            <li>{t("privacyPolicy.point2list.listp3")}</li>
            <li>{t("privacyPolicy.point2list.listp4")}</li>
            <li>{t("privacyPolicy.point2list.listp5")}</li>
            <li>{t("privacyPolicy.point2list.listp6")}</li>
            <li>{t("privacyPolicy.point2list.listp7")}</li>
            <li>{t("privacyPolicy.point2list.listp8")}</li>
            <li>{t("privacyPolicy.point2list.listp9")}</li>
            <li>{t("privacyPolicy.point2list.listp10")}</li>
          </ul>
          <p>{t("privacyPolicy.point3")}</p>
          <p>{t("privacyPolicy.point3text1")}</p>
          <p>{t("privacyPolicy.point3text2")}</p>
          <p>{t("privacyPolicy.point3text3")}</p>
          <p>{t("privacyPolicy.point4")}</p>
          <p>{t("privacyPolicy.point4text1")}</p>
          <p>{t("privacyPolicy.point4text2")}</p>
          <p>{t("privacyPolicy.point4text3")}</p>
          <p>{t("privacyPolicy.point4text4")}</p>
          <p>{t("privacyPolicy.point5")}</p>
          <p>{t("privacyPolicy.point5list.listHeader")}</p>
          <ul>
            <li>
              <p>{t("privacyPolicy.point5list.listp1")}</p>
              <p>{t("privacyPolicy.point5list.listp1text")}</p>
            </li>
            <li>
              <p>{t("privacyPolicy.point5list.listp2")}</p>
              <p>{t("privacyPolicy.point5list.listp2text")}</p>
            </li>
            <li>
              <p>{t("privacyPolicy.point5list.listp3")}</p>
              <p>{t("privacyPolicy.point5list.listp3text")}</p>
            </li>
            <li>
              <p>{t("privacyPolicy.point5list.listp4")}</p>
              <p>{t("privacyPolicy.point5list.listp4text")}</p>
            </li>
            <li>
              <p>{t("privacyPolicy.point5list.listp5")}</p>
              <p>{t("privacyPolicy.point5list.listp5text")}</p>
            </li>
            <li>
              <p>{t("privacyPolicy.point5list.listp6")}</p>
              <p>{t("privacyPolicy.point5list.listp6text")}</p>
            </li>
          </ul>
          <p>{t("privacyPolicy.point6")}</p>
          <p>{t("privacyPolicy.point6text1")}</p>
          <p>{t("privacyPolicy.point6text2")}</p>
          <p>{t("privacyPolicy.point6text3")}</p>
          <p>{t("privacyPolicy.point7")}</p>
          <p>{t("privacyPolicy.point7text1")}</p>
          <p>{t("privacyPolicy.point8")}</p>
          <p>{t("privacyPolicy.point8text1")}</p>
          <p>{t("privacyPolicy.point8text2")}</p>
          <p>{t("privacyPolicy.point9")}</p>
          <ul>
            <li>{t("privacyPolicy.point9list.listp1")}</li>
            <li>{t("privacyPolicy.point9list.listp2")}</li>
            <li>{t("privacyPolicy.point9list.listp3")}</li>
          </ul>
          <p>
            <strong>{t("privacyPolicy.outro")}</strong>
          </p>
        </div>
      </div>
    </Fade>
  );
}

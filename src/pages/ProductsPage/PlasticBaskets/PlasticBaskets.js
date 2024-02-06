import React from "react";
import classes from "./BreadProofing.module.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import bambooBigOblong from "../../../assets/imgs/bamboo2.jpeg";
import bambooBigRound from "../../../assets/imgs/bamboo1.jpeg";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";
import { Link } from "react-router-dom";
export default function PlasticBaskets() {
  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: bambooBigRound,
      alt: "Big Round Bamboo Basket",
      btnTxt: t("baskets.round"),
      link: t("links.plasticRound"),
    },
    {
      pathToImg: bambooBigOblong,
      alt: "Big Oblong Bamboo Basket",
      btnTxt: t("baskets.oblong"),
      link: t("links.plasticOblong"),
    },
  ];

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.plastic")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.plastic")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("productsPage.plastic.description.paragraph1")}
            {t("productsPage.plastic.description.paragraph2")}
            {t("productsPage.plastic.description.paragraph3")}
            {t("productsPage.plastic.description.paragraph4")}
            <ul className={classes.Regulations}>
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point1")}
              </li>
              <p />
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point2")}
              </li>
            </ul>
            {t("productsPage.plastic.description.paragraph5")}

            {t("productsPage.plastic.description.paragraph6")}
            {t("productsPage.plastic.description.paragraph7")}
            <strong>{t("productsPage.plastic.description.warning")}</strong>
          </div>
        </Trans>
        <div className={classes.ImagesWrap}>
          {productsImages.map((el) => (
            <div className={classes.product} key={el.btnTxt}>
              <Link to={el.link}>
                <img
                  src={el.pathToImg}
                  className={classes.Image}
                  alt={el.alt}
                />
                <div className={classes.SeeMoreBtn}>
                  <span>{el.btnTxt}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

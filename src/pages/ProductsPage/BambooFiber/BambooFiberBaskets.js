import React from "react";
import classes from "./BreadProofing.module.css";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import bambooBigOblong from "../../../assets/bambooBigOblong.jpg";
import bambooBigRound from "../../../assets/bambooBigRound.jpg";
import bambooSmallRound from "../../../assets/bambooSmallRound.jpg";
import bambooSmallOblong from "../../../assets/bambooSmallOblong.jpg";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";
import { Link } from "react-router-dom";
export default function WoodenBakingForms() {
  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: bambooBigRound,
      alt: "Big Round Bamboo Basket",
      btnTxt: t("baskets.round"),
      link: t("links.bambooRound"),
    },
    {
      pathToImg: bambooBigOblong,
      alt: "Big Oblong Bamboo Basket",
      btnTxt: t("baskets.oblong"),
      link: t("links.bambooOblong"),
    },
    {
      pathToImg: bambooSmallRound,
      alt: "Small Round Bamboo Basket",
      btnTxt: t("baskets.roundSmall"),
      link: t("links.bambooRound"),
    },
    {
      pathToImg: bambooSmallOblong,
      alt: "Small Oblong Bamboo Basket",
      btnTxt: t("baskets.oblongSmall"),
      link: t("links.bambooOblong"),
    },
  ];

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.bambooFiber")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.bambooFiber")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("productsPage.bambooFiber.description.paragraph1")}
            {t("productsPage.bambooFiber.description.paragraph2")}
            {t("productsPage.bambooFiber.description.paragraph3")}
            {t("productsPage.bambooFiber.description.paragraph4")}
            {t("productsPage.bambooFiber.description.paragraph5")}
            <ul className={classes.Regulations}>
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point1")}
              </li>
              <p />
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point2")}
              </li>
            </ul>
            {t("productsPage.bambooFiber.description.paragraph6")}
            {t("productsPage.bambooFiber.description.paragraph7")}
            {t("productsPage.bambooFiber.description.paragraph8")}
            {t("productsPage.bambooFiber.description.warning")}
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

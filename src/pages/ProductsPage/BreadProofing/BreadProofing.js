import React from "react";
import classes from "./BreadProofing.module.css";
import baguetteImg from "../../../assets/bgsnowySmallOptimized.jpg";
import ovalImg from "../../../assets/ovboksnowySmallOptimized.jpg";
import roboksImg from "../../../assets/roboksnowySmallOptimized.jpg";
import longImg from "../../../assets/loboksnowySmallOptimized.jpg";
import rominiImg from "../../../assets/rominiSmallOptimized.jpg";
import squareLongImg from "../../../assets/slxsboknowySmallOptimized.jpg";
import squareImg from "../../../assets/sqxsboknoweSmallOptimized.jpg";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";

export default function Products() {
  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: roboksImg,
      alt: "Round Basket",
      btnTxt: t("baskets.round"),
      link: t("links.roundBaskets"),
    },
    {
      pathToImg: longImg,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oblong"),
      link: t("links.oblongBaskets"),
    },
    {
      pathToImg: ovalImg,
      alt: "Oval Basket",
      btnTxt: t("baskets.oval"),
      link: t("links.ovalBaskets"),
    },
    {
      pathToImg: baguetteImg,
      alt: "Baguette Shaped Basket",
      btnTxt: t("baskets.baguette"),
      link: t("links.baguetteBaskets"),
    },
    {
      pathToImg: rominiImg,
      alt: "Mini Basket",
      btnTxt: t("baskets.mini"),
      link: t("links.miniBaskets"),
    },
    {
      pathToImg: squareImg,
      alt: "Square Basket",
      btnTxt: t("baskets.square"),
      link: t("links.squareBaskets"),
    },
    {
      pathToImg: squareLongImg,
      alt: "Big with wooden base Basket",
      btnTxt: t("baskets.bigWoodenBase"),
      link: t("links.bigSlicedBaskets"),
    },
  ];
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.rattan")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.rattan")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            <h2>{t("productsPage.breadproofing.title")}</h2>
            {t("productsPage.breadproofing.details")}
            
            <h2>{t("productsPage.breadproofing.why.title")}</h2>
            {t("productsPage.breadproofing.why.description")}

            <h2>{t("productsPage.breadproofing.select.title")}</h2>
            {t("productsPage.breadproofing.select.description")}

            <h2>{t("productsPage.breadproofing.quality.title")}</h2>
            {t("productsPage.breadproofing.quality.description")}

            <h2>{t("productsPage.breadproofing.preparationBeforeUsage.title")}</h2>
            {t("productsPage.breadproofing.preparationBeforeUsage.description")}

            <h2>{t("productsPage.breadproofing.preparation.title")}</h2>
            {t("productsPage.breadproofing.preparation.description")}

            <h2>{t("productsPage.breadproofing.takingCareOfBaskets.title")}</h2>
            {t("productsPage.breadproofing.takingCareOfBaskets.description")}

            <h2>{t("productsPage.breadproofing.breadBasketOffer.title")}</h2>
            {t("productsPage.breadproofing.breadBasketOffer.description")}

            <h2>{t("productsPage.breadproofing.orderBreadProofingBaskets.title")}</h2>
            {t("productsPage.breadproofing.orderBreadProofingBaskets.description")}
            
            {t("productsPage.breadproofing.description.paragraph1")}
            {t("productsPage.breadproofing.description.paragraph2")}
            {t("productsPage.breadproofing.description.paragraph3")}
            <ul className={classes.Regulations}>
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point1")}
              </li>
              <p />
              <li className={classes.Regulation}>
                - {t("mainSections.whatMUD.certificate.point2")}
              </li>
            </ul>
            {t("productsPage.breadproofing.description.paragraph4")}
            {t("productsPage.withliners.description.warning")}
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

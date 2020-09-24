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

export default function Products() {
  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: roboksImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.round"),
      link: "/products/breadproofingbaskets/round",
    },
    {
      pathToImg: longImg,
      alt: "Oblong Basket",
      btnTxt: t("productsPage.buttons.oblong"),
      link: "/products/breadproofingbaskets/oblong",
    },
    {
      pathToImg: ovalImg,
      alt: "Oval Basket",
      btnTxt: t("productsPage.buttons.oval"),
      link: "/products/breadproofingbaskets/oval",
    },
    {
      pathToImg: baguetteImg,
      alt: "Baguette Shaped Basket",
      btnTxt: t("productsPage.buttons.baguette"),
      link: "/products/breadproofingbaskets/baguette",
    },
    {
      pathToImg: rominiImg,
      alt: "Mini Basket",
      btnTxt: t("productsPage.buttons.mini"),
      link: "/products/breadproofingbaskets/mini",
    },
    {
      pathToImg: squareImg,
      alt: "Square Basket",
      btnTxt: t("productsPage.buttons.square"),
      link: "/products/breadproofingbaskets/square",
    },
    {
      pathToImg: squareLongImg,
      alt: "Big with wooden base Basket",
      btnTxt: t("productsPage.buttons.bigWoodenBase"),
      link: "/products/breadproofingbaskets/long",
    },
  ];
  return (
    <div className={classes.ContentWrapper}>
      <h1 className={classes.sectionTitle}>
        {t("mainSections.products.breadProofing")}
      </h1>
      <Trans>
        <div className={classes.ParagraphWrap}>
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
              <img src={el.pathToImg} className={classes.Image} alt={el.alt} />
              <div className={classes.SeeMoreBtn}>
                <span>{el.btnTxt}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

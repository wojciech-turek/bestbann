import React, { useEffect } from "react";
import classes from "./ProductsPage.module.css";
import baguetteImg from "../../assets/bgsnowySmallOptimized.jpg";
import ovalImg from "../../assets/ovboksnowySmallOptimized.jpg";
import roboksImg from "../../assets/roboksnowySmallOptimized.jpg";
import longImg from "../../assets/loboksnowySmallOptimized.jpg";
import rominiImg from "../../assets/rominiSmallOptimized.jpg";
import squareLongImg from "../../assets/slxsboknowySmallOptimized.jpg";
import squareImg from "../../assets/sqxsboknoweSmallOptimized.jpg";

import { Trans, useTranslation } from "react-i18next";

export default function Products() {
  useEffect(() => {
    document.title = "BestBann - Products";
  }, []);

  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: baguetteImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.baguette"),
    },
    {
      pathToImg: ovalImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.oval"),
    },
    {
      pathToImg: roboksImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.round"),
    },
    {
      pathToImg: longImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.oblong"),
    },
    {
      pathToImg: rominiImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.mini"),
    },
    {
      pathToImg: squareLongImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.bigWoodenBase"),
    },
    {
      pathToImg: squareImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.square"),
    },
  ];

  return (
    <div className={classes.ContentWrapper}>
      <h1 className={classes.sectionTitle}>
        {t("mainSections.products.breadProofing")}
      </h1>
      <Trans>
        <div className={classes.ParagraphWrap}>
          {t("productsPage.description.paragraph1")}
          {t("productsPage.description.paragraph2")}
          {t("productsPage.description.paragraph3")}
          <ul className={classes.Regulations}>
            <li className={classes.Regulation}>
              - {t("mainSections.whatMUD.certificate.point1")}
            </li>
            <p />
            <li className={classes.Regulation}>
              - {t("mainSections.whatMUD.certificate.point2")}
            </li>
          </ul>
          {t("productsPage.description.paragraph4")}
        </div>
      </Trans>
      <div className={classes.ImagesWrap}>
        {productsImages.map((el) => (
          <div className={classes.product} key={el.btnTxt}>
            <img src={el.pathToImg} className={classes.Image} alt={el.alt} />
            <div className={classes.SeeMoreBtn}>
              <span>{el.btnTxt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

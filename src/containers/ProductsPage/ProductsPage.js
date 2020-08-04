import React, { useEffect } from "react";
import classes from "./ProductsPage.module.css";
import roundImg from "../../assets/OvBaskets.png";

import { Trans, useTranslation } from "react-i18next";

export default function Products() {
  useEffect(() => {
    document.title = "BestBann - Products";
  }, []);

  const { t } = useTranslation("common");

  const productsImages = [
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Round" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Oblong" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Oval" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Square" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Baguette" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Big Sliced Bread" },
    { pathToImg: roundImg, alt: "Round Basket", btnTxt: "Mini Basket" },
  ];

  return (
    <div className={classes.ContentWrapper}>
      <h1 className={classes.sectionTitle}>Bread proofing baskets</h1>
      <Trans>
        {t("productsPage.description.paragraph1")}
        {t("productsPage.description.paragraph2")}
        {t("productsPage.description.paragraph3")}
        <ul>
          <li>- {t("mainSections.whatMUD.certificate.point1")}</li>
          <li>- {t("mainSections.whatMUD.certificate.point2")}</li>
        </ul>
        {t("productsPage.description.paragraph4")}
      </Trans>
      <div className="imageWrap">
        {productsImages.map((el) => (
          <div className="productCat" key={el.btnTxt}>
            <img src={el.pathToImg} alt={el.alt} />
            <button>{el.btnTxt}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

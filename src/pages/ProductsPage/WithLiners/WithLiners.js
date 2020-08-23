import React, { useEffect } from "react";
import classes from "./WithLiners.module.css";
import ovalImg from "../../../assets/linersoval.jpg";
import roungImg from "../../../assets/linersround.jpg";
import longImg from "../../../assets/linersoblong.jpg";

import { Trans, useTranslation } from "react-i18next";

export default function Products() {
  useEffect(() => {
    document.title = "BestBann - Products";
  }, []);

  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: ovalImg,
      alt: "Oblong Basket",
      btnTxt: t("productsPage.buttons.oval"),
    },
    {
      pathToImg: roungImg,
      alt: "Oval Basket",
      btnTxt: t("productsPage.buttons.round"),
    },
    {
      pathToImg: longImg,
      alt: "Round Basket",
      btnTxt: t("productsPage.buttons.oblong"),
    },
  ];

  return (
    <div className={classes.ContentWrapper}>
      <h1 className={classes.sectionTitle}>
        {t("mainSections.products.withLiners")}
      </h1>
      <Trans>
        <div className={classes.ParagraphWrap}>
          {t("productsPage.withliners.description.paragraph1")}
          {t("productsPage.withliners.description.paragraph2")}
          {t("productsPage.withliners.description.paragraph3")}
          {t("productsPage.withliners.description.paragraph4")}
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

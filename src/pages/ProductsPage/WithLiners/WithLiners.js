import React, { useEffect } from "react";
import classes from "./WithLiners.module.css";
import ovalImg from "../../../assets/linersoval.jpg";
import roungImg from "../../../assets/linersround.jpg";
import longImg from "../../../assets/linersoblong.jpg";

import { Trans, useTranslation } from "react-i18next";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Products() {
  useEffect(() => {
    document.title = "BestBann - Products";
  }, []);

  const { t } = useTranslation("common");
  const productsImages = [
    {
      pathToImg: ovalImg,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oval"),
      link: "/products/breadproofingbaskets/oval",
    },
    {
      pathToImg: roungImg,
      alt: "Round Basket",
      btnTxt: t("baskets.round"),
      link: "/products/breadproofingbaskets/round",
    },
    {
      pathToImg: longImg,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oblong"),
      link: "/products/breadproofingbaskets/oblong",
    },
  ];

  return (
    <Fade in={true} timeout={500}>
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

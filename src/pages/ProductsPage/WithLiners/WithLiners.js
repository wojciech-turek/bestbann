import React from "react";
import classes from "./WithLiners.module.css";
import ovalImg from "../../../assets/linersoval.jpg";
import roungImg from "../../../assets/linersround.jpg";
import longImg from "../../../assets/linersoblong.jpg";
import { Trans, useTranslation } from "react-i18next";
import { Fade } from "@material-ui/core";
import { Link } from "react-router-dom";
import SEO from "../../../utils/SEO";

export default function Products() {
  const { t } = useTranslation("common");
  const productsImages = [
    {
      pathToImg: ovalImg,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oval"),
      link: t("links.ovalBaskets"),
    },
    {
      pathToImg: roungImg,
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
  ];

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title= {t("mainSections.products.withLiners")} />
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

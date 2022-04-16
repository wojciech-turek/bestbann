import React from "react";
import classes from "./CorkBaskets.module.css";
import round from "../../../assets/imgs/IMG_0027.JPG";
import oblong from "../../../assets/imgs/IMG_0033.JPG";
import oval from "../../../assets/imgs/IMG_0030.JPG";
import rectangular from "../../../assets/imgs/IMG_0034.JPG";
import baguette from "../../../assets/imgs/IMG_0010.JPG";
import engraved from "../../../assets/imgs/IMG_0023.JPG";
import korek1 from "../../../assets/videos/korek1.mp4";
import ciasto1 from "../../../assets/videos/ciasto1.mp4";
import loader from "../../../assets/videos/200w.gif";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";

export default function Products() {
  const { t } = useTranslation("common");

  const productsImages = [
    {
      pathToImg: round,
      alt: "Round Basket",
      btnTxt: t("baskets.round"),
      link: t("links.corkRound"),
    },
    {
      pathToImg: oblong,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oblong"),
      link: t("links.corkOblong"),
    },
    {
      pathToImg: oval,
      alt: "Oval Basket",
      btnTxt: t("baskets.oval"),
      link: t("links.corkOval"),
    },
    {
      pathToImg: rectangular,
      alt: "Rectangular Basket",
      btnTxt: t("baskets.rectangular"),
      link: t("links.corkRectangular"),
    },
    {
      pathToImg: baguette,
      alt: "Baguette Shaped Basket",
      btnTxt: t("baskets.baguette"),
      link: t("links.corkBaguette"),
    },
    {
      pathToImg: engraved,
      alt: "Engraved Basket",
      btnTxt: t("baskets.engraved"),
      link: t("links.corkEngraved"),
    },
  ];
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.cork")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.cork")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("productsPage.cork.description.paragraph1")}
            {t("productsPage.cork.description.paragraph2")}
            {t("productsPage.cork.description.paragraph3")}
            {t("productsPage.cork.description.paragraph4")}
            {t("productsPage.cork.description.warning")}
          </div>
        </Trans>
        <div className={classes.videoWrapper}>
          <video
            poster={loader}
            src={korek1}
            loop
            autoPlay
            muted
            preload="auto"
          ></video>
        </div>
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
        <div className={classes.videoWrapper}>
          <video
            poster={loader}
            src={ciasto1}
            loop
            autoPlay
            muted
            preload="auto"
          ></video>
        </div>
      </div>
    </Fade>
  );
}
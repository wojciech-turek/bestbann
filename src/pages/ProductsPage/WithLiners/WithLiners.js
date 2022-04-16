import React from "react";
import classes from "./WithLiners.module.css";
import img1 from "../../../assets/imgs/IMG_0014.jpeg";
import img2 from "../../../assets/imgs/IMG_0018.jpeg";
import img3 from "../../../assets/imgs/IMG_0013.jpeg";
import { Trans, useTranslation } from "react-i18next";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";

export default function Products() {
  const { t } = useTranslation("common");
  const productsImages = [
    {
      pathToImg: img2,
      alt: "Round Basket",
      btnTxt: t("baskets.round"),
      link: t("links.roundBaskets"),
    },
    {
      pathToImg: img3,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oblong"),
      link: t("links.oblongBaskets"),
    },
    {
      pathToImg: img1,
      alt: "Oblong Basket",
      btnTxt: t("baskets.oval"),
      link: t("links.ovalBaskets"),
    },
  ];

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.liners")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.liners")}
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
              <img src={el.pathToImg} className={classes.Image} alt={el.alt} />
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

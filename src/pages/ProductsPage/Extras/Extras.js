import React from "react";
import classes from "./WoodenBakingForms.module.css";
import { useTranslation } from "react-i18next";
import engravedf1 from "../../../assets/videos/engravedf1.mp4";
import engravedf2 from "../../../assets/videos/engravedf2.mp4";
import img1 from "../../../assets/imgs/IMG_0019.JPG";
import img2 from "../../../assets/imgs/IMG_0020.jpeg";
import img4 from "../../../assets/imgs/IMG_0021.jpeg";
import img3 from "../../../assets/imgs/IMG_0022.jpeg";
import { Trans } from "react-i18next";
import { Fade } from "@material-ui/core";
import SEO from "../../../utils/SEO";
export default function WoodenBakingForms() {
  const { t } = useTranslation("common");

  const products = [
    {
      pathToImg: engravedf1,
      alt: "Engraved Basket",
      type: "video",
    },
    {
      pathToImg: engravedf2,
      alt: "Engraved Basket",
      type: "video",
    },
    {
      pathToImg: img1,
      alt: "Engraved Basket",
    },
    {
      pathToImg: img2,
      alt: "Engraved Basket",
    },
    {
      pathToImg: img3,
      alt: "Engraved Basket",
    },
    {
      pathToImg: img4,
      alt: "Engraved Basket",
    },
  ];

  return (
    <Fade in={true} timeout={500}>
      <div className={classes.ContentWrapper}>
        <SEO title={t("mainSections.products.engraved")} />
        <h1 className={classes.sectionTitle}>
          {t("mainSections.products.engraved")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("productsPage.engraved.description.paragraph1")}
            {t("productsPage.engraved.description.paragraph2")}
            {t("productsPage.engraved.description.paragraph3")}
            {t("productsPage.engraved.description.paragraph4")}
            <strong> {t("productsPage.engraved.description.warning")}</strong>
          </div>
        </Trans>
        <div className={classes.FlexContainer}>
          {products.map((el) => (
            <div className={classes.itemsFlexContainer} key={el.alt}>
              {el.type === "video" ? (
                <video
                  autoPlay
                  muted
                  loop
                  className={classes.basketImage}
                  src={el.pathToImg}
                  alt="Round bamboo fiber basket"
                />
              ) : (
                <img
                  src={el.pathToImg}
                  alt={el.alt}
                  className={classes.basketImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

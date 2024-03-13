import React from "react";
import classes from "./BreadBasketsPage.module.css";
import { Fade } from "@material-ui/core";
import { Trans, useTranslation } from "react-i18next";
import SEO from "../../utils/SEO";
import MainSection from "../../components/MainSection/MainSection";
import Products from "../../components/Products/Products";

export default function BreadBasketsPage() {
  const { t } = useTranslation("common");
  return (
    <Fade in={true} timeout={500}>
    <>
      <div className={classes.ContentWrapper}>
        <SEO title={t("breadBasketsPage.title")} />
        <h1 className={classes.sectionTitle}>
          {t("breadBasketsPage.title")}
        </h1>
        <Trans>
          <div className={classes.ParagraphWrap}>
            {t("breadBasketsPage.description")}
            
            <h2>{t("breadBasketsPage.fashionForHomemade.title")}</h2>
            {t("breadBasketsPage.fashionForHomemade.description")}

            <h2>{t("breadBasketsPage.whichBasket.title")}</h2>
            {t("breadBasketsPage.whichBasket.paragraph1")}
            {t("breadBasketsPage.whichBasket.paragraph2")}

            <h2>{t("breadBasketsPage.mainUseOfBaskets.title")}</h2>
            {t("breadBasketsPage.mainUseOfBaskets.description")}

            <h2>{t("breadBasketsPage.beforeUsing.title")}</h2>
            {t("breadBasketsPage.beforeUsing.description")}

            <h2>{t("breadBasketsPage.breadBaking.title")}</h2>
            {t("breadBasketsPage.breadBaking.description")}

            <h2>{t("breadBasketsPage.highQuality.title")}</h2>
            {t("breadBasketsPage.highQuality.description")}

            <h2>{t("breadBasketsPage.extensiveOffer.title")}</h2>
            {t("breadBasketsPage.extensiveOffer.description")}

            <h2>{t("breadBasketsPage.buyBreadRisingBaskets.title")}</h2>
            {t("breadBasketsPage.buyBreadRisingBaskets.description")}

          </div>
        </Trans>
      </div>
      <div className={classes.productsSection}>

      <MainSection
        title={t("mainSections.products.title")}
        content={<Products />}
        />
      </div>
    </>
    </Fade>
  );
}

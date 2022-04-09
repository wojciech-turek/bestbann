import React from "react";
import breadProofingImg from "../../assets/ovboksnowySmallProgressive.jpg";
import woodenBaseImg from "../../assets/Bamboo-fiber-plastic-bannetons.jpg";
import withLinersImg from "../../assets/withLinersOptimized1.jpg";
import woodenBakingImg from "../../assets/woodenBakingFormOptimized.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import ProductsCategory from "../../components/ProductsCategory/ProductsCatergory";
import { useTranslation } from "react-i18next";
import classes from "./Products.module.css";

export default function Products(props) {
  const { t } = useTranslation("common");

  const productCategories = [
    {
      title: t("mainSections.products.breadProofing"),
      imgSrc: breadProofingImg,
      btnTxt: t("mainSections.products.button"),
      destination: t("links.breadProofing"),
      delay: 0,
    },
    {
      title: t("mainSections.products.bambooFiber"),
      imgSrc: woodenBaseImg,
      btnTxt: t("mainSections.products.button"),
      destination: t("links.bambooFiber"),
      delay: 200,
    },
    {
      title: t("mainSections.products.withLiners"),
      imgSrc: withLinersImg,
      btnTxt: t("mainSections.products.button"),
      destination: t("links.withLiners"),
      delay: 400,
    },
    {
      title: t("mainSections.products.woodenBakingForm"),
      imgSrc: woodenBakingImg,
      btnTxt: t("mainSections.products.button"),
      destination: t("links.woodenBakingForms"),
      delay: 600,
    },
  ];
  let productSections = productCategories.map((sect) => (
    <ScrollAnimation
      animateIn="animate__fadeInUp"
      delay={sect.delay}
      animateOnce={true}
      key={sect.delay}
    >
      <ProductsCategory
        title={sect.title}
        imgSrc={sect.imgSrc}
        btnTxt={sect.btnTxt}
        key={sect.title}
        destination={sect.destination}
      />
    </ScrollAnimation>
  ));
  return <div className={classes.sectionContainer}>{productSections}</div>;
}

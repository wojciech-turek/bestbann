import React from "react";
import rattan from "../../assets/imgs/IMG_0001.JPG";
import cork from "../../assets/imgs/IMG_0009.JPG";
import bamboo from "../../assets/imgs/IMG_0005.JPG";
import plastic from "../../assets/imgs/IMG_0003.JPG";
import engraved from "../../assets/imgs/IMG_0019.JPG";
import liners from "../../assets/imgs/IMG_0002.JPG";
import ScrollAnimation from "react-animate-on-scroll";
import ProductsCategory from "../../components/ProductsCategory/ProductsCatergory";
import { useTranslation } from "react-i18next";
import classes from "./Products.module.css";

export default function Products(props) {
  const { t } = useTranslation("common");

  const productCategories = [
    {
      title: t("mainSections.products.rattan"),
      imgSrc: rattan,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.rattanLink"),
      delay: 0,
    },
    {
      title: t("mainSections.products.cork"),
      imgSrc: cork,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.corkLink"),
      delay: 200,
    },
    {
      title: t("mainSections.products.bamboo"),
      imgSrc: bamboo,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.bambooLink"),
      delay: 400,
    },
    {
      title: t("mainSections.products.plastic"),
      imgSrc: plastic,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.plasticLink"),
      delay: 600,
    },
    {
      title: t("mainSections.products.engraved"),
      imgSrc: engraved,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.engravedLink"),
      delay: 800,
    },
    {
      title: t("mainSections.products.liners"),
      imgSrc: liners,
      btnTxt: t("mainSections.products.button"),
      destination: t("mainSections.products.linersLink"),
      delay: 1000,
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

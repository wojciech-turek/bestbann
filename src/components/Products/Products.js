import React from "react";
import breadProofingImg from "../../assets/OvBaskets.png";
import woodenBaseImg from "../../assets/sqxsboknowe.png";
import withLinersImg from "../../assets/withLiners.jpg";
import woodenBakingImg from "../../assets/woodenBakingForm.png";
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
      destination: "breadproofingbaskets",
      delay: 0,
    },
    {
      title: t("mainSections.products.woodenBase"),
      imgSrc: woodenBaseImg,
      btnTxt: t("mainSections.products.button"),
      destination: "breadproofingbaskets",
      delay: 200,
    },
    {
      title: t("mainSections.products.withLiners"),
      imgSrc: withLinersImg,
      btnTxt: t("mainSections.products.button"),
      destination: "basketswithliners",
      delay: 400,
    },
    {
      title: t("mainSections.products.woodenBakingForm"),
      imgSrc: woodenBakingImg,
      btnTxt: t("mainSections.products.button"),
      destination: "woodenbakingforms",
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

import React from "react";
import classes from "./NavProducts.module.css";
import breadProofingImg from "../../../assets/NavProducts/OvBasketsTransparentOptimized.jpg";
import woodenBaseImg from "../../../assets/NavProducts/boodenbakingformsOptimized.jpg";
import withLinersImg from "../../../assets/NavProducts/linerstransparent1Optimized.jpg";
import bambooBaskets from "../../../assets/NavProducts/bambooBaskets.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavProducts() {
  const { t } = useTranslation("common");
  const productCategories = [
    {
      title: t("mainSections.products.breadProofing"),
      imgSrc: breadProofingImg,
      linkDest: t("links.breadProofing"),
    },
    {
      title: t("mainSections.products.breadProofing"),
      imgSrc: breadProofingImg,
      linkDest: t("links.breadProofing"),
    },
    {
      title: t("mainSections.products.bambooFiber"),
      imgSrc: bambooBaskets,
      linkDest: t("links.bambooFiber"),
    },
    {
      title: t("mainSections.products.bambooFiber"),
      imgSrc: bambooBaskets,
      linkDest: t("links.bambooFiber"),
    },
    {
      title: t("mainSections.products.woodenBakingForm"),
      imgSrc: woodenBaseImg,
      linkDest: t("links.woodenBakingForms"),
    },
    {
      title: t("mainSections.products.withLiners"),
      imgSrc: withLinersImg,
      linkDest: t("links.withLiners"),
    },
  ];

  let productSections = productCategories.map((sect) => (
    <NavLink
      exact
      key={sect.title}
      className={classes.Product}
      to={sect.linkDest}
      activeClassName={classes.active}
    >
      <img
        className={classes.ProductImage}
        src={sect.imgSrc}
        alt={sect.title}
      />
      <p className={classes.ProductText}>{sect.title.toUpperCase()}</p>
    </NavLink>
  ));
  return <div className={classes.Container}>{productSections}</div>;
}

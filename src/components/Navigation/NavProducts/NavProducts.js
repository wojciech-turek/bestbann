import React from "react";
import classes from "./NavProducts.module.css";
import breadProofingImg from "../../../assets/OvBasketsTransparent.jpg";
import woodenBaseImg from "../../../assets/OvBasketsTransparent.jpg";
import withLinersImg from "../../../assets/linerstransparent1.jpg";
import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function NavProducts() {
  const { t } = useTranslation("common");
  const productCategories = [
    {
      title: t("mainSections.products.breadProofing"),
      imgSrc: breadProofingImg,
      btnTxt: t("mainSections.products.button"),
      linkDest: "/products/breadproofingbaskets",
    },
    {
      title: t("mainSections.products.woodenBase"),
      imgSrc: woodenBaseImg,
      btnTxt: t("mainSections.products.button"),
      linkDest: "/products/woodenbase",
    },
    {
      title: t("mainSections.products.withLiners"),
      imgSrc: withLinersImg,
      btnTxt: t("mainSections.products.button"),
      linkDest: "/products/basketswithliners",
    },
  ];

  let productSections = productCategories.map((sect) => (
    <NavLink
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
      <p>{sect.title.toUpperCase()}</p>
    </NavLink>
  ));
  return <div className={classes.Container}>{productSections}</div>;
}

import React from "react";
import classes from "./NavProducts.module.css";
import rattan from "../../../assets/imgs/Rattan.png";
import cork from "../../../assets/imgs/Korek.png";
import bamboo from "../../../assets/imgs/Bambus.png";
import plastic from "../../../assets/imgs/Plastik.png";
import engraved from "../../../assets/imgs/Grawer.png";
import liners from "../../../assets/imgs/Liners.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NavProducts() {
  const { t } = useTranslation("common");
  const productCategories = [
    {
      title: t("mainSections.products.rattan"),
      imgSrc: rattan,
      linkDest: t("mainSections.products.rattanLink"),
    },
    {
      title: t("mainSections.products.cork"),
      imgSrc: cork,
      linkDest: t("mainSections.products.corkLink"),
    },
    {
      title: t("mainSections.products.bamboo"),
      imgSrc: bamboo,
      linkDest: t("mainSections.products.bambooLink"),
    },
    {
      title: t("mainSections.products.plastic"),
      imgSrc: plastic,
      linkDest: t("mainSections.products.plasticLink"),
    },
    {
      title: t("mainSections.products.engraved"),
      imgSrc: engraved,
      linkDest: t("mainSections.products.engravedLink"),
    },
    {
      title: t("mainSections.products.liners"),
      imgSrc: liners,
      linkDest: t("mainSections.products.linersLink"),
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
      <p className={classes.ProductText}>{sect.title}</p>
    </NavLink>
  ));
  return <div className={classes.Container}>{productSections}</div>;
}

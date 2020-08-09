import React from "react";
import classes from "./NavProducts.module.css";
import breadProofingImg from "../../../assets/OvBasketsTransparent.jpg";
import woodenBaseImg from "../../../assets/OvBasketsTransparent.jpg";
import withLinersImg from "../../../assets/OvBasketsTransparent.jpg";

import { useTranslation } from "react-i18next";

export default function NavProducts() {
  const { t } = useTranslation("common");
  const productCategories = [
    {
      title: t("mainSections.products.breadProofing"),
      imgSrc: breadProofingImg,
      btnTxt: t("mainSections.products.button"),
    },
    {
      title: t("mainSections.products.woodenBase"),
      imgSrc: woodenBaseImg,
      btnTxt: t("mainSections.products.button"),
    },
    {
      title: t("mainSections.products.withLiners"),
      imgSrc: withLinersImg,
      btnTxt: t("mainSections.products.button"),
    },
  ];

  let productSections = productCategories.map((sect) => (
    <div key={sect.title} className={classes.Product}>
      <img
        className={classes.ProductImage}
        src={sect.imgSrc}
        alt={sect.title}
      />
      <p>{sect.title.toUpperCase()}</p>
    </div>
  ));
  return <div className={classes.Container}>{productSections}</div>;
}

import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { useTranslation } from "react-i18next";

export default function NavigationItems() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.NavItems}>
      <NavigationItem link="/">{t("menu.mainPage")}</NavigationItem>
      <NavigationItem link="/products">{t("menu.products")}</NavigationItem>
      <NavigationItem link="/about">{t("menu.aboutUs")}</NavigationItem>
      <NavigationItem link="/contact">{t("menu.contact")}</NavigationItem>
    </div>
  );
}

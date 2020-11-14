import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function NavigationItems(props) {
  const { t } = useTranslation("common");
  const navRoutes = [
    { link: `/${i18next.language}`, name: "Home", txt: "menu.mainPage" },
    { link: "/products", name: "Products", txt: "menu.products" },
    { link: t("links.aboutUs"), name: "About", txt: "menu.aboutUs" },
    { link: t("links.contact"), name: "Contact", txt: "menu.contact" },
  ];

  let navMobItems = navRoutes.map((el) => (
    <NavigationItem key={el.name} link={el.link} id={el.txt}>
      {t(el.txt)}
    </NavigationItem>
  ));

  let navItems = !props.sideOpen ? navMobItems : null;
  return <div className={classes.NavItems}>{navItems}</div>;
}

import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";
import { useTranslation } from "react-i18next";

export default function NavigationItems(props) {
  const { t } = useTranslation("common");
  const navRoutes = [
    { link: "/bestbann", name: "Home", txt: "menu.mainPage" },
    { link: "/products", name: "Products", txt: "menu.products" },
    { link: "/about", name: "About", txt: "menu.aboutUs" },
    { link: "/contact", name: "Contact", txt: "menu.contact" },
  ];

  let navMobItems = navRoutes.map((el) => (
    <NavigationItem key={el.name} link={el.link}>
      {t(el.txt)}
    </NavigationItem>
  ));

  let navItems = !props.sideOpen ? navMobItems : null;
  return <div className={classes.NavItems}>{navItems}</div>;
}

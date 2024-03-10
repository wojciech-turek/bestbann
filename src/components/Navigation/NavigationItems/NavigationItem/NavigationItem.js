import React, { useContext } from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import { ProductBarShown } from "../../../../containers/Navigation/Navigation";
import { useTranslation } from "react-i18next";

export default function NavigationItem(props) {
  const { t } = useTranslation("common");
  const productsBarShown = useContext(ProductBarShown);

  return (
    <NavLink
      className={classes.NavItem}
      to={props.link}
      exact={props.link !== t("links.breadBaskets") ? true : false}
      id={props.id}
      activeClassName={classes.active}
      onMouseEnter={
        props.link === t("links.breadBaskets")
          ? () => productsBarShown.setProductsBarShown(true)
          : null
      }
      onMouseOver={
        props.link !== t("links.breadBaskets")
          ? () => productsBarShown.setProductsBarShown(false)
          : null
      }
    >
      {props.children}
    </NavLink>
  );
}

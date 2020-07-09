import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationItem(props) {
  const { t } = useTranslation("common");
  return (
    <NavLink
      className={classes.NavItem}
      exact
      to={props.link}
      activeClassName={classes.active}
    >
      {t(props.children).toUpperCase()}
    </NavLink>
  );
}

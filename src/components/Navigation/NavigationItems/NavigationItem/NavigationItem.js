import React, { useContext } from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import { ProductBarShown } from "../../../../containers/Navigation/Navigation";

export default function NavigationItem(props) {
  const productsBarShown = useContext(ProductBarShown);
  return (
    <NavLink
      className={classes.NavItem}
      exact
      to={props.link}
      activeClassName={classes.active}
      onMouseEnter={
        window.innerWidth >= 1024
          ? props.link === "/products"
            ? () => productsBarShown.setProductsBarShown(true)
            : null
          : null
      }
      onMouseOver={
        window.innerWidth >= 1024
          ? props.link === "/about"
            ? () => productsBarShown.setProductsBarShown(false)
            : null
          : null
      }
    >
      {props.children}
    </NavLink>
  );
}

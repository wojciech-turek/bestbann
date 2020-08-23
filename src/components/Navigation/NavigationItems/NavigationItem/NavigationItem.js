import React, { useContext } from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
import { ProductBarShown } from "../../../../containers/Navigation/Navigation";

export default function NavigationItem(props) {
  const productsBarShown = useContext(ProductBarShown);

  const navClickHandler = (event) => {
    if (event.target.text === "Products") {
      event.preventDefault();
    }
  };

  return (
    <NavLink
      className={classes.NavItem}
      to={props.link}
      onClick={navClickHandler}
      activeClassName={classes.active}
      onMouseEnter={
        props.link === "/products"
          ? () => productsBarShown.setProductsBarShown(true)
          : null
      }
      onMouseOver={
        props.link === "/about"
          ? () => productsBarShown.setProductsBarShown(false)
          : null
      }
    >
      {props.children}
    </NavLink>
  );
}

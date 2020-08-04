import React from "react";
import classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationItem(props) {
  return (
    <NavLink
      className={classes.NavItem}
      exact
      to={props.link}
      activeClassName={classes.active}
      onClick={() => props.setSideOpen(false)}
    >
      {props.children}
    </NavLink>
  );
}

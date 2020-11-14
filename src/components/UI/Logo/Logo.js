import React from "react";
import classes from "./Logo.module.css";
import bestBannLogo from "../../../assets/logo-small.png";
import { NavLink } from "react-router-dom";
import i18next from "i18next";

export default function Logo(props) {
  return (
    <div className={classes.Logo}>
      <NavLink to={`/${i18next.language}`}>
        <img
          src={bestBannLogo}
          alt="Best Bann Logo"
          style={{ width: props.width }}
        />
      </NavLink>
    </div>
  );
}

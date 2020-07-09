import React from "react";
import classes from "./Logo.module.css";
import bestBannLogo from "../../assets/logo-small.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <NavLink to="/">
        <img src={bestBannLogo} alt="Best Bann Logo" />
      </NavLink>
    </div>
  );
}

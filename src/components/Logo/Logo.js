import React from "react";
import classes from "./Logo.module.css";
import bestBannLogo from "../../assets/logo-small.png";

export default function Logo() {
  return (
    <div className={classes.Logo}>
      <img src={bestBannLogo} alt="Best Bann Logo" />
    </div>
  );
}

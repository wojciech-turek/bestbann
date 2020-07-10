import React from "react";
import classes from "./HeroBanner.module.css";
import Logo from "../../../components/Logo/Logo";

export default function HeroBanner() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBanner}></div>
      <div className={classes.LogoBanner}>
        <Logo height="10%" />
      </div>
    </div>
  );
}

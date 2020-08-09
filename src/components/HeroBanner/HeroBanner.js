import React from "react";
import classes from "./HeroBanner.module.css";
import Logo from "../UI/Logo/Logo";

export default function HeroBanner() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBanner}>
        <div className={classes.LogoBanner}>
          <Logo width="100%" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";

export default function Toolbar() {
  return (
    <div className={classes.toolbar}>
      <NavigationItems flow="row" />
      <LanguageOptions />
    </div>
  );
}

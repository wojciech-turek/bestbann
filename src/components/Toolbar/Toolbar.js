import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";

export default function Toolbar() {
  return (
    <div className={classes.toolbar}>
      <Logo />
      <NavigationItems />
      <LanguageOptions />
    </div>
  );
}

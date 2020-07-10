import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";

export default function Toolbar(props) {
  return (
    <div className={classes.toolbar}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Hamburger} onClick={() => props.clicked(true)}>
        Menu
      </div>
      <div className={classes.navItems}>
        <NavigationItems />
      </div>
      <LanguageOptions />
    </div>
  );
}

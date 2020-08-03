import React, { useState } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import Hamburger from "../Navigation/Hamburger/Hamburger";

export default function Toolbar(props) {
  const [toolbarShown, setToolbarShown] = useState(true);

  let toolbarClasses = [classes.toolbar];
  let prevScrollpos = window.pageYOffset;

  if (toolbarShown) {
    toolbarClasses = [classes.toolbar];
  } else {
    toolbarClasses = [classes.toolbar, classes.toolbarHidden];
  }

  window.onscroll = function () {
    setToolbarShown(true);
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos >= 500) {
      if (prevScrollpos > currentScrollPos) {
        setToolbarShown(true);
      } else {
        setToolbarShown(false);
      }
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div className={toolbarClasses.join(" ")}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <div className={classes.Hamburger}>
        <Hamburger open={props.open} clicked={props.clicked} />
      </div>
      <div className={classes.navItems}>
        <NavigationItems />
      </div>
      <LanguageOptions loading={props.loading} setLoading={props.setLoading} />
    </div>
  );
}

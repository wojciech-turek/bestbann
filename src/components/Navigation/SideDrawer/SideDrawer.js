import React from "react";

import NavigationItems from "../../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let drawerClasses = null;

  if (props.open) {
    drawerClasses = [classes.SideDrawer, classes.Open];
  } else {
    drawerClasses = [classes.SideDrawer, classes.Closed];
  }

  return (
    <div className={drawerClasses.join(" ")}>
      <Logo height="8%" />
      <nav className={classes.navSide}>
        <NavigationItems setSideOpen={(bool) => props.setSideOpen(bool)} />
      </nav>
    </div>
  );
};

export default SideDrawer;

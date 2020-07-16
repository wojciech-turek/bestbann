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
      <div
        className={classes.Closer}
        onClick={() => props.clicked(!props.open)}
      >
        X
      </div>
      <Logo height="8%" />
      <nav className={classes.navSide}>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;

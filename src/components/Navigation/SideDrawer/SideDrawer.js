import React from "react";
import Logo from "../../UI/Logo/Logo";
import classes from "./SideDrawer.module.css";
import MobileNavigationItems from "../NavigationItems/MobileNavigationItems/MobileNavigationItems";

const SideDrawer = (props) => {
  let drawerClasses = null;

  if (props.open) {
    drawerClasses = [classes.SideDrawer, classes.Open];
  } else {
    drawerClasses = [classes.SideDrawer, classes.Closed];
  }

  return (
    <div className={drawerClasses.join(" ")}>
      <Logo width="160px" />
      <div className={classes.Divider}></div>
      <nav className={classes.navSide}>
        <MobileNavigationItems
          open={props.open}
          setSideOpen={props.setSideOpen}
        />
      </nav>
    </div>
  );
};

export default SideDrawer;

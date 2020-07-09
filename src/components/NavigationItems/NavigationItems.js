import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

export default function NavigationItems() {
  return (
    <div className={classes.NavItems}>
      <NavigationItem link="/">Main Page</NavigationItem>
      <NavigationItem link="/products">Products</NavigationItem>
      <NavigationItem link="/about">About Us</NavigationItem>
      <NavigationItem link="/contact">Contact</NavigationItem>
    </div>
  );
}

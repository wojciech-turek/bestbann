import React from "react";
import classes from "./Backdrop.module.css";

export default function Backdrop(props) {
  return props.sideOpen || props.productsBarShown ? (
    <div
      className={classes.Backdrop}
      onClick={() => props.clicked(false)}
      onMouseEnter={
        props.productsBarShown ? () => props.setProductsBarShown(false) : null
      }
    ></div>
  ) : null;
}

import React from "react";
import classes from "./ProductsCategory.module.css";

export default function ProductsCatergory(props) {
  return (
    <div className={classes.ProductsCategory}>
      <h3>{props.title}</h3>
      <img
        className={classes.ProductsImg}
        src={props.imgSrc}
        alt={props.title + "Image"}
      />
      <button>{props.btnTxt}</button>
    </div>
  );
}

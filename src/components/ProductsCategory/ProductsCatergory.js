import React from "react";
import classes from "./ProductsCategory.module.css";

export default function ProductsCatergory(props) {
  let paragraph = null;
  let btn = null;
  if (props.paragTxt) {
    paragraph = <p>{props.paragTxt}</p>;
  }
  if (props.btnTxt) {
    btn = <button className={classes.SeeMoreBtn}>{props.btnTxt}</button>;
  }
  return (
    <div className={classes.ProductsCategory}>
      <h3 className={classes.ProductsTitle}>{props.title}</h3>
      {paragraph}
      <img
        className={classes.ProductsImg}
        src={props.imgSrc}
        alt={props.title + "Image"}
      />
      {btn}
    </div>
  );
}

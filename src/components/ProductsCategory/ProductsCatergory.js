import React from "react";
import classes from "./ProductsCategory.module.css";
import { Link } from "react-router-dom";

export default function ProductsCatergory(props) {
  let paragraph = null;
  let btn = null;
  if (props.paragTxt) {
    paragraph = <p>{props.paragTxt}</p>;
  }
  if (props.btnTxt) {
    btn = (
      <Link to={`/products/${props.destination}`}>
        <button className={classes.SeeMoreBtn}>{props.btnTxt}</button>
      </Link>
    );
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

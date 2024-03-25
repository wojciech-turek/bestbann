import React from "react";
import classes from "./ProductsCategory.module.css";
import { Link } from "react-router-dom";

export default function ProductsCatergory(props) {
  let paragraph = null;
  if (props.paragTxt) {
    paragraph = <p>{props.paragTxt}</p>;
  }
  return (
    <div className={classes.ProductsCategory}>
      <h3 className={classes.ProductsTitle}>{props.title}</h3>
      {paragraph}
      <Link rel="canonical" to={props.destination}>
        <img
          className={classes.ProductsImg}
          src={props.imgSrc}
          alt={props.title}
        />
        <div className={classes.SeeMoreBtn}>{props.btnTxt}</div>
      </Link>
    </div>
  );
}

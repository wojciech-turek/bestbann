import React, { useEffect } from "react";
import classes from "./ProductsPage.module.css";

export default function Products() {
  useEffect(() => {
    document.title = "BestBann - Products";
  }, []);
  return <div className={classes.Content}>This products Page</div>;
}

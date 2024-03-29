import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../../UI/LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import NavProducts from "../NavProducts/NavProducts";

export default function Toolbar(props) {
  let toolbarClasses = [classes.toolbar];
  let prevScrollpos = window.pageYOffset;
  let productBarClasses = [classes.ProductsBar];

  if (props.toolbarShown) {
    toolbarClasses = [classes.toolbar];
  } else {
    toolbarClasses = [classes.toolbar, classes.toolbarHidden];
  }

  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      props.setToolbarShown(true);
    }
    if (currentScrollPos >= 50) {
      if (prevScrollpos > currentScrollPos) {
        props.setToolbarShown(true);
      } else {
        if (props.toolbarShown !== false && props.open !== true) {
          props.setToolbarShown(false);
          props.setProductsBarShown(false);
        }
      }
    }
    prevScrollpos = currentScrollPos;
  };
  if (!props.productsBarShown) {
    productBarClasses = [classes.ProductsBar, classes.ProductsBarSlideUp];
  } else {
    productBarClasses = [classes.ProductsBar, classes.ProductsBarSlideDown];
  }

  return (
    <>
      <div className={toolbarClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo width={130} />
        </div>
        <div className={classes.Hamburger}>
          <Hamburger open={props.open} clicked={props.clicked} />
        </div>
        <div className={classes.navItems}>
          <NavigationItems
            sideOpen={props.open}
            setSideOpen={(bool) => props.setSideOpen(bool)}
            setProductsBarShown={props.setProductsBarShown}
          />
        </div>
        <div className={classes.languageOptionsContainer}>
          <LanguageOptions
            loading={props.loading}
            setLoading={props.setLoading}
          />
        </div>
      </div>
      <div className={productBarClasses.join(" ")}>
        <NavProducts />
      </div>
    </>
  );
}

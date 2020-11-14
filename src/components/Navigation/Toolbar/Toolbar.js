import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import LanguageOptions from "../../UI/LanguageOptions/LanguageOptions";
import classes from "./Toolbar.module.css";
import Logo from "../../UI/Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import NavProducts from "../NavProducts/NavProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export default function Toolbar(props) {
  const { t } = useTranslation("common");
  let toolbarClasses = [classes.toolbar];
  let prevScrollpos = window.pageYOffset;
  let productBarClasses = [classes.ProductsBar];

  if (props.toolbarShown) {
    toolbarClasses = [classes.toolbar];
  } else {
    toolbarClasses = [classes.toolbar, classes.toolbarHidden];
  }

  const shoppingCartIcon = (
    <FontAwesomeIcon className={classes.Icon} icon={faShoppingCart} />
  );

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

        <div className={classes.shopNowBtn}>
          <a
            className={classes.storeLink}
            href="https://bestbannshop.eu/en_US/index"
            target="blank"
            alt="store"
          >
            <span className={classes.cart}>
              {shoppingCartIcon}
              <span className={classes.cartTxt}>{t("cart.visit")}</span>
            </span>
            <span className={classes.btnTxtAreaTake}>{t("cart.go")}</span>
          </a>
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

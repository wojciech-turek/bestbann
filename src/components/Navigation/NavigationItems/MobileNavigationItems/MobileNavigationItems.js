import React, { useState } from "react";
import classes from "./MobileNavigationItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faInfoCircle,
  faPhone,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function MobileNavigationItems(props) {
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  const navClickHandler = (event) => {
    console.log(event.target.text);
    console.log(event.target);
    if (event.target.text === "Products") {
      event.preventDefault();
      setSecondaryOpen(!secondaryOpen);
    } else {
      props.setSideOpen(false);
      setSecondaryOpen(false);
    }
  };

  const homeIcon = <FontAwesomeIcon className={classes.Icon} icon={faHome} />;
  const productsIcon = <FontAwesomeIcon className={classes.Icon} icon={faTh} />;
  const infoIcon = (
    <FontAwesomeIcon className={classes.Icon} icon={faInfoCircle} />
  );
  const phoneIcon = <FontAwesomeIcon className={classes.Icon} icon={faPhone} />;
  const ListerIcon = (
    <FontAwesomeIcon className={classes.SmallIcon} icon={faCaretRight} />
  );
  return (
    <div className={classes.MobNavContainer}>
      <ul className={classes.MainList}>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/bestbann"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {homeIcon}Main Page
          </NavLink>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/products"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {productsIcon}Products
          </NavLink>
        </li>
        <li>
          <ul
            className={
              secondaryOpen
                ? classes.ProductsSecondaryListOpen
                : classes.ProductsSecondaryListClosed
            }
          >
            <li className={classes.secondaryListItem}>
              {ListerIcon}
              <span className={classes.ItemText}>All Products</span>
            </li>
            <li className={classes.secondaryListItem}>
              {ListerIcon}
              <span className={classes.ItemText}>Bread Proofing Baskets</span>
              <ul className={classes.ProductsTertiaryList}>
                <li>All</li>
                <li>Round</li>
                <li>Oblong</li>
                <li>Square</li>
                <li>Flat Round</li>
                <li>Baguette</li>
                <li>Big Sliced Bread</li>
                <li>Mini Basket</li>
              </ul>
            </li>
            <li className={classes.secondaryListItem}>
              {ListerIcon}
              <span className={classes.ItemText}>Wooden Base Baskets</span>
            </li>
            <li className={classes.secondaryListItem}>
              {ListerIcon}
              <span className={classes.ItemText}>Baskets with liners</span>
            </li>
          </ul>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/about"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {infoIcon}About Us
          </NavLink>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/contact"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {phoneIcon}Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

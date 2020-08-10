import React, { useState } from "react";
import classes from "./MobileNavigationItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faInfoCircle,
  faPhone,
  faCaretRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export default function MobileNavigationItems(props) {
  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const [tertiaryBreadProofingOpen, setTertiaryBreadProofingOpen] = useState(
    false
  );

  const navClickHandler = (event) => {
    if (event.target.text === "Products") {
      event.preventDefault();
      setSecondaryOpen(!secondaryOpen);
    } else {
      props.setSideOpen(false);
      setSecondaryOpen(false);
    }
  };

  const teriaryNavClickHandler = (event) => {
    setTertiaryBreadProofingOpen(!tertiaryBreadProofingOpen);
  };

  const homeIcon = <FontAwesomeIcon className={classes.Icon} icon={faHome} />;
  const productsIcon = <FontAwesomeIcon className={classes.Icon} icon={faTh} />;
  const infoIcon = (
    <FontAwesomeIcon className={classes.Icon} icon={faInfoCircle} />
  );
  const phoneIcon = <FontAwesomeIcon className={classes.Icon} icon={faPhone} />;
  const ListerIconRight = (
    <FontAwesomeIcon className={classes.SmallIcon} icon={faCaretRight} />
  );
  const ListerIconDown = (
    <FontAwesomeIcon className={classes.SmallIcon} icon={faCaretDown} />
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
            to="/products/breadproofingbaskets"
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
              {tertiaryBreadProofingOpen ? ListerIconDown : ListerIconRight}
              <span
                className={classes.ItemText}
                onClick={teriaryNavClickHandler}
              >
                Bread Proofing Baskets
              </span>
            </li>
            <li>
              <ul
                className={
                  tertiaryBreadProofingOpen
                    ? classes.ProductsTertiaryListOpen
                    : classes.ProductsTertiaryListClosed
                }
              >
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
              {ListerIconRight}
              <span className={classes.ItemText}>Wooden Base Baskets</span>
            </li>
            <li className={classes.secondaryListItem}>
              {ListerIconRight}
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

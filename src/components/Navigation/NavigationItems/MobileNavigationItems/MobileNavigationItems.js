import React, { useState } from "react";
import classes from "./MobileNavigationItems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTh,
  faInfoCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: 0,
    margin: 0,
    boxShadow: "none",
    fontSize: 18,
  },
  expanded: {
    margin: 0,
  },
  accordionContent: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  expandIcon: {
    padding: 0,
  },
}));

const useStyles1 = makeStyles(() => ({
  root: {
    paddingLeft: 8,
    margin: 0,
    boxShadow: "none",
    fontSize: 16,
  },
  expanded: {
    margin: 0,
  },
  accordionContent: {
    fontSize: 14,
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
  },
  expandIcon: {
    padding: 0,
  },
  "@global": {
    ".MuiAccordion-root:before": {
      opacity: 0,
    },
  },
}));

export default function MobileNavigationItems(props) {
  const styles = useStyles();
  const styles1 = useStyles1();

  const { t } = useTranslation("common");

  const [secondaryOpen, setSecondaryOpen] = useState(false);
  const [tertiaryBreadProofingOpen, setTertiaryBreadProofingOpen] = useState(
    false
  );

  const navClickHandler = (event) => {
    if (event.target.text === "Products") {
      event.preventDefault();
      setSecondaryOpen(!secondaryOpen);
      if (tertiaryBreadProofingOpen) {
        setTertiaryBreadProofingOpen(false);
      }
    } else if (
      event.target.text === "Main Page" ||
      event.target.text === "About Us" ||
      event.target.text === "Contact"
    ) {
      props.setSideOpen(false);
      setSecondaryOpen(false);
    }
  };
  const homeIcon = (
    <FontAwesomeIcon
      className={classes.Icon}
      icon={faHome}
      onClick={() => props.setSideOpen(false)}
    />
  );
  const productsIcon = (
    <FontAwesomeIcon
      className={classes.Icon}
      icon={faTh}
      onClick={() => props.setSideOpen(true)}
    />
  );
  const infoIcon = (
    <FontAwesomeIcon
      className={classes.Icon}
      icon={faInfoCircle}
      onClick={() => props.setSideOpen(false)}
    />
  );
  const phoneIcon = (
    <FontAwesomeIcon
      className={classes.Icon}
      icon={faPhone}
      onClick={() => props.setSideOpen(false)}
    />
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
            {homeIcon}
            {t("menu.mainPage")}
          </NavLink>
        </li>
        <li>
          <Accordion
            square
            classes={{
              root: styles.root,
              expanded: styles.expanded,
            }}
          >
            <AccordionSummary
              classes={{ root: styles.root }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <NavLink
                to="/products"
                onClick={navClickHandler}
                className={classes.InactiveLink}
                activeClassName={classes.linkActive}
              >
                {productsIcon}
                {t("menu.products")}
              </NavLink>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionContent}>
              <Accordion square className={styles1.root}>
                <AccordionSummary
                  className={styles1.root}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Bread Proofing Baskets
                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    <li>
                      <NavLink
                        to="/products/breadproofingbaskets"
                        activeClassName={classes.active}
                      >
                        All
                      </NavLink>
                    </li>
                    <li>Round</li>
                    <li>Oblong</li>
                    <li>Square</li>
                    <li>Flat Round</li>
                    <li>Baguette</li>
                    <li>Big Sliced Bread</li>
                    <li>Mini Basket</li>
                  </ul>
                </AccordionDetails>
              </Accordion>
              <Accordion square className={styles1.root}>
                <AccordionSummary
                  className={styles1.root}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Wooden Base Baskets
                </AccordionSummary>
                <AccordionDetails>to be filled</AccordionDetails>
              </Accordion>
              <Accordion square className={styles1.root}>
                <AccordionSummary
                  className={styles1.root}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Baskets with liners
                </AccordionSummary>
                <AccordionDetails>to be filled</AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/about"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {infoIcon}
            {t("menu.aboutUs")}
          </NavLink>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/contact"
            onClick={navClickHandler}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
          >
            {phoneIcon}
            {t("menu.contact")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

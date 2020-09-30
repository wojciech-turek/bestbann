import React from "react";
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
    padding: 0,
    paddingLeft: 12,
    paddingRight: 8,
    margin: 0,
    boxShadow: "none",
    fontSize: 16,
  },
  expanded: {
    margin: -16,
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

  const homeIcon = <FontAwesomeIcon className={classes.Icon} icon={faHome} />;
  const productsIcon = (
    <FontAwesomeIcon
      className={classes.Icon}
      icon={faTh}
      onClick={() => props.setSideOpen(true)}
    />
  );
  const infoIcon = (
    <FontAwesomeIcon className={classes.Icon} icon={faInfoCircle} />
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
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
            onClick={() => props.setSideOpen(false)}
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
                className={classes.InactiveLink}
                activeClassName={classes.linkActive}
                onClick={(e) => e.preventDefault()}
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
                  <NavLink
                    to="/products/breadproofingbaskets"
                    activeClassName={classes.active}
                  >
                    Bread Proofing Baskets
                  </NavLink>
                </AccordionSummary>
                <AccordionDetails className={styles1.root}>
                  <ul className={classes.SecondaryList}>
                    <li>
                      <NavLink
                        exact
                        to="/products/breadproofingbaskets"
                        activeClassName={classes.active}
                      >
                        All
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        exact
                        to="/products/breadproofingbaskets/round"
                        activeClassName={classes.active}
                      >
                        Round
                      </NavLink>
                    </li>
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
                <AccordionDetails className={styles1.root}>
                  to be filled
                </AccordionDetails>
              </Accordion>
              <Accordion
                square
                style={{ marginBottom: 16, minHeight: 40 }}
                classes={{ root: styles1.root, expanded: styles1.expanded }}
              >
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
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
            onClick={() => props.setSideOpen(false)}
          >
            {infoIcon}
            {t("menu.aboutUs")}
          </NavLink>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to="/contact"
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
            onClick={() => props.setSideOpen(false)}
          >
            {phoneIcon}
            {t("menu.contact")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

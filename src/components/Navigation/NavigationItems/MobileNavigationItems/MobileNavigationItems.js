import React from "react";
import classes from "./MobileNavigationItems.module.css";
// import { useRouter } from 'next/router';
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

export default function MobileNavigationItems(props) {
  const styles = useStyles();

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
            to={t("links.home")}
            exact={props.link !== "/products" ? true : false}
            className={classes.InactiveLink}
            activeClassName={classes.linkActive}
            onClick={() => props.setSideOpen(false)}
          >
            {homeIcon}
            {t("menu.mainPage")}
          </NavLink>
        </li>
        <li className={classes.PrimaryItem}>
          <Accordion
            square
            classes={{
              root: styles.root,
              expanded: styles.expanded,
            }}
          >
            <AccordionSummary
              className={classes.accordionSummary}
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
              <div className={classes.secondaryList}>
                <NavLink
                  to={t("mainSections.products.breadBasket")}
                  onClick={() => props.setSideOpen(false)}
                  exact={props.link !== "/products" ? true : false}
                  activeClassName={classes.active}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("menu.products")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.rattanLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.rattan")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.corkLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.cork")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.bambooLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.bamboo")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.plasticLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.plastic")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.engravedLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.engraved")}
                  </div>
                </NavLink>
                <NavLink
                  to={t("mainSections.products.linersLink")}
                  activeClassName={classes.active}
                  onClick={() => props.setSideOpen(false)}
                >
                  <div className={classes.listItem}>
                    <span className={classes.listIcon}>⁕</span>
                    {t("mainSections.products.liners")}
                  </div>
                </NavLink>
              </div>
            </AccordionDetails>
          </Accordion>
        </li>
        <li className={classes.PrimaryItem}>
          <NavLink
            to={t("links.aboutUs")}
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
            to={t("links.contact")}
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

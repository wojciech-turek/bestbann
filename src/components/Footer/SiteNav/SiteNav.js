import React from "react";
import { Link } from "react-router-dom";
import classes from "./SiteNav.module.css";
import { useTranslation } from "react-i18next";

export default function SiteNav() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.SiteNav}>
      <p className={classes.SectionTitle}>{t("footer.siteMap")}</p>
      <nav>
        <ul className={classes.footerNav}>
          <li>
            <Link to="/bestbann">{t("menu.mainPage")}</Link>
          </li>
          <li>
            <Link to="/products/breadproofingbaskets">
              {t("mainSections.products.breadProofing")}
            </Link>
          </li>
          <li>
            <Link to="/products/woodenbakingforms">
              {t("mainSections.products.woodenBakingForm")}
            </Link>
          </li>
          <li>
            <Link to="/products/basketswithliners">
              {t("mainSections.products.withLiners")}
            </Link>
          </li>
          <li>
            <Link to="/about">{t("menu.aboutUs")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("menu.contact")}</Link>
          </li>
          <li>
            <Link to="/privacypolicy">{t("privacyPolicy.title")}</Link>
          </li>
          <li>
            <Link to="/legalnotice">Impressum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

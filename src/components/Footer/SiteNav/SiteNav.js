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
            <Link to={t("links.home")}>{t("menu.mainPage")}</Link>
          </li>
          <li>
            <Link to={t("links.breadProofing")}>
              {t("mainSections.products.breadProofing")}
            </Link>
          </li>
          <li>
            <Link to={t("links.woodenBakingForms")}>
              {t("mainSections.products.woodenBakingForm")}
            </Link>
          </li>
          <li>
            <Link to={t("links.withLiners")}>
              {t("mainSections.products.withLiners")}
            </Link>
          </li>
          <li>
            <Link to={t("links.aboutUs")}>{t("menu.aboutUs")}</Link>
          </li>
          <li>
            <Link to={t("links.contact")}>{t("menu.contact")}</Link>
          </li>
          <li>
            <Link to={t("links.privacyPolicy")}>{t("privacyPolicy.title")}</Link>
          </li>
          <li>
            <Link to={t("links.impressum")}>Impressum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

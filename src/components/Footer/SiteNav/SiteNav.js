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
            <Link rel="canonical" to={t("links.home")}>{t("menu.mainPage")}</Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.rattanLink")}>
              {t("mainSections.products.rattan")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.corkLink")}>
              {t("mainSections.products.cork")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.bambooLink")}>
              {t("mainSections.products.bamboo")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.plasticLink")}>
              {t("mainSections.products.plastic")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.engravedLink")}>
              {t("mainSections.products.engraved")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("mainSections.products.linersLink")}>
              {t("mainSections.products.liners")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("links.breadBaskets")}>{t("menu.products")}</Link>
          </li>
          <li>
            <Link rel="canonical" to={t("links.aboutUs")}>{t("menu.aboutUs")}</Link>
          </li>
          <li>
            <Link rel="canonical" to={t("links.contact")}>{t("menu.contact")}</Link>
          </li>
          <li>
            <Link rel="canonical" to={t("links.privacyPolicy")}>
              {t("privacyPolicy.title")}
            </Link>
          </li>
          <li>
            <Link rel="canonical" to={t("links.impressum")}>Legal notice</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

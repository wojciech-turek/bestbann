import React from "react";
import classes from "./ContactPage.module.css";
import { Trans, useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../components/UI/Logo/Logo";
import { Fade } from "@material-ui/core";
import SEO from "../../utils/SEO";

export default function ContactPage() {
  const { t } = useTranslation("common");
  const emailIcon = (
    <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
  );
  const homeIcon = <FontAwesomeIcon icon={faHome} className={classes.icon} />;
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhoneSquare} className={classes.icon} />
  );
  return (
    <Fade in={true} timeout={500}>
      <div className={classes.Container}>
        <SEO title={t("menu.contact")} />
        <h1 className={classes.header}>{t("menu.contact")}</h1>
        <div className={classes.paragraph}>
          <Trans>{t("contact.text")}</Trans>
        </div>
        <div className={classes.CompanyInfo}>
          <div className={classes.section}>
            {homeIcon}
            <p>
              <strong>{t("footer.companyInfo.office")}</strong>
            </p>
          </div>
          <Logo width={160} />
          <p className={classes.paragraph}>
            <strong>Weronika Pozłutko</strong>
          </p>
          <p className={classes.paragraph}>
            <strong>{t("footer.companyInfo.street")}</strong>Sapiehy 21
          </p>
          <p className={classes.paragraph}>
            <strong>{t("footer.companyInfo.city")}</strong>Kraków 31-644
          </p>
          <p className={classes.paragraph}>Poland</p>
          <p className={classes.paragraph}>TAX ID No. PL7382058254</p>
        </div>
        <div className={classes.ContactInfo}>
          <div className={classes.section}>
            {emailIcon}
            <p>
              <strong>{t("footer.contact.email")}</strong>
            </p>
          </div>
          <a href="mailto:office@bestbann.com" className={classes.paragraph}>
            office@bestbann.com
          </a>
          <a href="mailto:shop@bestbann.com" className={classes.paragraph}>
            shop@bestbann.com
          </a>
          <div className={classes.section}>
            {phoneIcon}
            <p>
              <strong>{t("footer.contact.telephone")}</strong>
            </p>
          </div>
          <a href="tel:+48123072877" className={classes.paragraph}>
            +48 12 307 28 77
          </a>
          <a href="tel:+48692933069" className={classes.paragraph}>
            +48 692 933 069
          </a>
        </div>
        {/* <ContactForm /> */}
      </div>
    </Fade>
  );
}

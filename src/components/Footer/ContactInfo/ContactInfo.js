import React from "react";
import classes from "./ContactInfo.module.css";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.ContactInfo}>
      <p className={classes.SectionTitle}>{t("footer.contact.title")}</p>
      <p>
        <strong>{t("footer.contact.email")}</strong>
      </p>
      <a href="mailto:office@bestbann.com" className={classes.link}>
        office@bestbann.com
      </a>
      <a href="mailto:shop@bestbann.com" className={classes.link}>
        shop@bestbann.com
      </a>
      <p>
        <strong>{t("footer.contact.telephone")}</strong>
      </p>
      <a href="tel:+48123072877" className={classes.link}>
        +48 12 307 28 77
      </a>
      <a href="tel:+48692933069" className={classes.link}>
        +48 692 933 069
      </a>
    </div>
  );
}

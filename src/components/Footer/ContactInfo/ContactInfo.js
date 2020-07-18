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
      <p>office@bestbann.com</p>
      <p>shop@bestbann.com</p>
      <p>
        <strong>{t("footer.contact.telephone")}</strong>
      </p>
      <p>+48 12 307 28 77</p>
      <p>+48 692 933 069</p>
    </div>
  );
}

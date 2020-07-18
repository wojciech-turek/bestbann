import React from "react";
import classes from "./CompanyInfo.module.css";

import { useTranslation } from "react-i18next";

export default function CompanyInfo() {
  const { t } = useTranslation("common");
  return (
    <div className={classes.CompanyInfo}>
      <p className={classes.SectionTitle}>{t("footer.companyInfo.title")}</p>
      <p>
        <strong>{t("footer.companyInfo.office")}</strong>
      </p>
      <p>BESTBANN</p>
      <p>Weronika Pozłutko</p>
      <p>{t("footer.companyInfo.street")}Sapiehy 21</p>
      <p>{t("footer.companyInfo.city")}Kraków 31-644</p>
      <p>Poland</p>
    </div>
  );
}

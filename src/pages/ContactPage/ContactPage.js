import React from "react";
import classes from "./ContactPage.module.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactPage() {
  const emailIcon = (
    <FontAwesomeIcon icon={faEnvelope} className={classes.icon} />
  );
  const homeIcon = <FontAwesomeIcon icon={faHome} className={classes.icon} />;
  const phoneIcon = (
    <FontAwesomeIcon icon={faPhoneSquare} className={classes.icon} />
  );
  const { t } = useTranslation("common");
  return (
    <div className={classes.Container}>
      <h1 className={classes.header}>Contact</h1>
      <p className={classes.paragraph}>
        We are available to answer your questions and quotation requests from
        Monday to Friday in the regular business hours. We do our best to reply
        within 24 hours, if your matter is urgent do not hesitate to call us on
        the below numbers (Polish or English).
      </p>
      <p className={classes.paragraph}>We accept emails in any languange.</p>
      <div className={classes.CompanyInfo}>
        <div className={classes.section}>
          <p>
            <strong>
              {homeIcon}
              {t("footer.companyInfo.office")}
            </strong>
          </p>
        </div>
        <p className={classes.paragraph}>BESTBANN</p>
        <p className={classes.paragraph}>Weronika Pozłutko</p>
        <p className={classes.paragraph}>
          {t("footer.companyInfo.street")}Sapiehy 21
        </p>
        <p className={classes.paragraph}>
          {t("footer.companyInfo.city")}Kraków 31-644
        </p>
        <p className={classes.paragraph}>Poland</p>
      </div>
      <div className={classes.ContactInfo}>
        <div className={classes.section}>
          <p>
            <strong>
              {emailIcon}
              {t("footer.contact.email")}
            </strong>
          </p>
        </div>
        <p className={classes.paragraph}>office@bestbann.com</p>
        <p className={classes.paragraph}>shop@bestbann.com</p>
        <div className={classes.section}>
          <p>
            <strong>
              {phoneIcon}
              {t("footer.contact.telephone")}
            </strong>
          </p>
        </div>
        <p className={classes.paragraph}>+48 12 307 28 77</p>
        <p className={classes.paragraph}>+48 692 933 069</p>
      </div>
      <ContactForm />
    </div>
  );
}

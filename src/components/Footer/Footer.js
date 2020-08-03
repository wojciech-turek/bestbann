import React from "react";
import classes from "./Footer.module.css";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import ContactInfo from "./ContactInfo/ContactInfo";

export default function Footer() {
  return (
    <>
      <div className={classes.FooterContainer}>
        <CompanyInfo />
        <ContactInfo />
        <div className={classes.SiteLinks}></div>
        <div className={classes.ContactInfo}></div>
        <div className={classes.SocialIcons}></div>
      </div>

      <div className={classes.FooterCopyright}>
        Copyright© 2020{" "}
        <a href="https:/www.wojciechturek.com" target="blank" rel="noopener">
          Wojciech Turek
        </a>
      </div>
    </>
  );
}

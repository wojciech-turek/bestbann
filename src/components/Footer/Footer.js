import React from "react";
import classes from "./Footer.module.css";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import ContactInfo from "./ContactInfo/ContactInfo";
import SiteNav from "./SiteNav/SiteNav";

export default function Footer() {
  return (
    <>
      <div className={classes.FooterContainer}>
        <CompanyInfo />
        <ContactInfo />
        <SiteNav />
        <div className={classes.SiteLinks}></div>
        <div className={classes.ContactInfo}></div>
        <div className={classes.SocialIcons}></div>
      </div>

      <div className={classes.FooterCopyright}>
        Copyright© {new Date().getFullYear()}{" "}
        <a href="https://www.wojciechturek.com" target="blank">
          Wojciech Turek
        </a>
      </div>
    </>
  );
}

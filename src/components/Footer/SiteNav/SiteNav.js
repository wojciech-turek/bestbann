import React from "react";
import classes from "./SiteNav.module.css";

export default function SiteNav() {
  return (
    <div className={classes.ContactInfo}>
      <p className={classes.SectionTitle}>Mapa Strony</p>
      <nav>
        <ul className={classes.footerNav}>
          <li>Strona główna</li>
          <li>Produkty</li>
          {/* <ul className={classes.innerFooterNav}>
            <li>Kosze do wyrastania chleba</li>
            <li>Kosze z materiałowymi poszewkami</li>
            <li>Drewniane foremki do pieczenia chleba</li>
          </ul> */}
          <li>O nas</li>
          <li>Kontakt</li>
          <li>Polityka Prywatności</li>
          <li>Imperssum</li>
        </ul>
      </nav>
    </div>
  );
}

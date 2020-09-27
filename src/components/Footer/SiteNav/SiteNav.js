import React from "react";
import { Link } from "react-router-dom";
import classes from "./SiteNav.module.css";

export default function SiteNav() {
  return (
    <div className={classes.SiteNav}>
      <p className={classes.SectionTitle}>Mapa Strony</p>
      <nav>
        <ul className={classes.footerNav}>
          <li>Strona główna</li>
          <li>Kosze do wyrastania chleba</li>
          <li>Drewniane formeki do pieczenia</li>
          <li>Kosze z materiałowymi poszewkami</li>
          <li>O nas</li>
          <li>Kontakt</li>
          <li>
            <Link to="/privacypolicy">Polityka Prywatności</Link>
          </li>
          <li>
            <Link to="/legalnotice">Impressum</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

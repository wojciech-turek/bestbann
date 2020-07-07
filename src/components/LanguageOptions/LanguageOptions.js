import React from "react";
import LanguageOption from "./LanguageOption/LanguageOption";
import classes from "./LanguageOptions.module.css";

export default function LanguageOptions() {
  const langs = ["fr", "en", "ru", "es", "it", "pl"];
  const options = langs.map((opt) => {
    return <LanguageOption key={opt} lang={opt} />;
  });

  return <div className={classes.languages}>{options}</div>;
}

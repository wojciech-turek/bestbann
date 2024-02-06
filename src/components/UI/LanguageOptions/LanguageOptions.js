import React from "react";
import LanguageOption from "./LanguageOption/LanguageOption";
import classes from "./LanguageOptions.module.css";

export default function LanguageOptions(props) {
  const langs = ["fr", "en", "es", "it", "pl"];
  const options = langs.map((opt) => {
    return (
      <LanguageOption
        key={opt}
        lang={opt}
        loading={props.loading}
        setLoading={props.setLoading}
      />
    );
  });

  return <div className={classes.languages}>{options}</div>;
}

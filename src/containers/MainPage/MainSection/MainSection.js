import React from "react";
import classes from "./MainSection.module.css";

export default function MainSection(props) {
  return (
    <div className={classes.SectionTitle}>
      <h2>{props.title}</h2>
    </div>
  );
}

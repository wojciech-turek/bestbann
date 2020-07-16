import React from "react";
import classes from "./MainSection.module.css";

export default function MainSection(props) {
  return (
    <>
      <div>
        <h2 className={classes.SectionTitle}>{props.title}</h2>
        {props.content}
      </div>
    </>
  );
}

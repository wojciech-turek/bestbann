import React from "react";
import classes from "./Hamburger.module.css";

export default function Hamburger(props) {
  let bar1Styles = [classes.bar1];
  let bar2Styles = [classes.bar2];
  let bar3Styles = [classes.bar2];
  if (props.open) {
    bar1Styles.push(classes.changeBar1);
    bar2Styles.push(classes.changeBar2);
    bar3Styles.push(classes.changeBar3);
  }
  console.log(props.open);
  return (
    <div
      className={classes.container}
      onClick={() => props.clicked(!props.open)}
    >
      <div className={bar1Styles.join(" ")}></div>
      <div className={bar2Styles.join(" ")}></div>
      <div className={bar3Styles.join(" ")}></div>
    </div>
  );
}

import React from "react";
import classes from "./MainSection.module.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function MainSection(props) {
  return (
    <>
      <div>
        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce={true}>
          <h2 className={classes.SectionTitle}>{props.title}</h2>
        </ScrollAnimation>
        {props.content}
      </div>
    </>
  );
}

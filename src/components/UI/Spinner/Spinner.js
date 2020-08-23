import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import classes from "./Spinner.module.css";

function Spinner(props) {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      1.8,
      { opacity: 0, x: 80, ease: Power3.easeOut },
      0.2
    );

    setTimeout(() => {
      TweenMax.to(app, 0.5, { css: { opacity: 0 } });
    }, 700);
    setTimeout(() => {
      props.setLoading(false);
    }, 1000);
  }, [props]);

  return (
    <div className={classes.Spinner} ref={(el) => (app = el)}>
      <header className={classes.SpinnerHeader}>
        <div className={classes.circleContainer}>
          <div ref={(el) => (circle = el)} className={classes.circle}></div>
          <div ref={(el) => (circleRed = el)} className={classes.circle}></div>
          <div ref={(el) => (circleBlue = el)} className={classes.circle}></div>
        </div>
      </header>
    </div>
  );
}

export default Spinner;

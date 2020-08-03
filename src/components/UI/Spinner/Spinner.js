import React, { useRef, useEffect, useState } from "react";
import { TweenMax, Power3 } from "gsap";

import classes from "./Spinner.module.css";

function Spinner(props) {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  let [toggleExpand, setExpand] = useState(false);

  const handleExpand = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut,
    });
    setExpand(true);
  };

  const handleShrink = () => {
    TweenMax.to(circleRed, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut,
    });
    setExpand(false);
  };

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    TweenMax.staggerFrom(
      [circle, circleRed, circleBlue],
      1.8,
      { opacity: 0, x: 80, ease: Power3.easeOut },
      0.4
    );
    setTimeout(() => {
      props.setLoading(false);
    }, 1000);
  }, [props]);

  return (
    <div className={classes.Spinner} ref={(el) => (app = el)}>
      <header className={classes.SpinnerHeader}>
        <div className={classes.circleContainer}>
          <div ref={(el) => (circle = el)} className={classes.circle}></div>
          <div
            ref={(el) => (circleRed = el)}
            onClick={toggleExpand ? handleShrink : handleExpand}
            className={classes.circle}
            onMouseEnter={handleExpand}
            onMouseLeave={(e) => handleShrink(e)}
          ></div>
          <div ref={(el) => (circleBlue = el)} className={classes.circle}></div>
        </div>
      </header>
    </div>
  );
}

export default Spinner;

import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";

import classes from "./Spinner.module.css";

function Spinner(props) {
  let app = useRef(null);
  let circle = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    setTimeout(() => {
      TweenMax.to(circle, 0, { css: { opacity: 0 } });
      TweenMax.to(app, 0.2, { css: { opacity: 0 } });
    }, 700);
    setTimeout(() => {
      props.setLoading(false);
    }, 1000);
  }, [props]);

  return (
    <div className={classes.Spinner} ref={(el) => (app = el)}>
      <header className={classes.SpinnerHeader}>
        <div className={classes.circleContainer}>
          <p ref={(el) => (circle = el)} className={classes.circle}>
            Loading...
          </p>
        </div>
      </header>
    </div>
  );
}

export default Spinner;

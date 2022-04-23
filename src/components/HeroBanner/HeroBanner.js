import React from "react";
import classes from "./HeroBanner.module.css";
import Logo from "../UI/Logo/Logo";
import heroImage from "../../assets/herobannerProgressiveMobile.jpg";
import heroVideo from "../../assets/videos/all.mp4";

export default function HeroBanner() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBanner}>
        <div className={classes.LogoBanner}>
          <Logo width="100%" />
        </div>
        <div className={classes.videoOverlay}></div>
        <video
          poster={heroImage}
          src={heroVideo}
          autoPlay
          playsinline
          muted
          loop
          className={classes.video}
        />
      </div>
    </div>
  );
}

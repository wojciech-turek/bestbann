import React from "react";
import classes from "./HeroBanner.module.css";
import Logo from "../UI/Logo/Logo";
import heroImage from "../../assets/hero-poster.png";
import heroVideo from "../../assets/videos/home-video.webm";

export default function HeroBanner() {
  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBanner}>
        <div className={classes.LogoBanner}>
          <Logo width="100%" />
        </div>
        <video
          poster={heroImage}
          src={heroVideo}
          autoPlay
          playsInline
          muted
          loop
          className={classes.video}
        />
      </div>
    </div>
  );
}

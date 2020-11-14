import React from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

export default function SEO({ children, location, title, image }) {
  ReactGA.pageview(window.location.pathname);
  ReactGA.ga("send", "pageview", window.location.pathname);
  return (
    <Helmet titleTemplate={`Bestbann - %s`}>
      <title>{title}</title>
      {children}
    </Helmet>
  );
}

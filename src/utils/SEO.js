import React from "react";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

export default function SEO({ children, location, title, image }) {
  ReactGA.pageview(window.location.pathname);
  ReactGA.ga("send", "pageview", window.location.pathname);
  return (
    <Helmet titleTemplate={`Bestbann - %s`}>
      <title>{title}</title>
      {/* <!-- Google Tag Manager --> */}
      <script>
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-NJRJGJ")`}
      </script>
      {/* <!-- End Google Tag Manager --> */}
      {children}
    </Helmet>
  );
}

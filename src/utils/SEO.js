import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ children, location, title, image }) {
  return (
    <Helmet titleTemplate={`Bestbann - %s`}>
      <html lang="en" />
      <title>{title}</title>
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta
        name="description"
        content="We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
      />
      <meta property="od:url" content="http://www.noclegigorlice.pl" />
      <meta property="og:image" content="/logo192.png" />
      <meta property="og:title" content={`Bestbann - ${title}`} key="ogtitle" />
      <meta
        property="of:site_name"
        content="We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
        key="ogsitename"
      />
      <meta
        property="og:description"
        content="We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}

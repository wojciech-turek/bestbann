import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ children, location, description, title, image }) {
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
        content={
          "We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
        }
      />
      {location && <meta property="od:url" content={location.href} />}
      <meta property="og:image" content={image || "/logo192.png"} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="of:site_name"
        content="We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={
          description ||
          "We are a family-owned company with over 9-years’ of experience in food industry. We are manufacturing bread proofing baskets from natural rattan material, without any chemicals or bleaches."
        }
        key="ogdesc"
      />
      {children}
    </Helmet>
  );
}

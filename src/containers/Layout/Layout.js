import React, { useRef, lazy } from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MainPage from "../../pages/MainPage/MainPage";
import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";
import WoodenBakingForms from "../../pages/ProductsPage/Extras/Extras";
import Impressum from "../../pages/Legal/Impressum/Impressum";
import PrivacyPolicy from "../../pages/Legal/PrivacyPolicy/PrivacyPolicy";
import { useTranslation } from "react-i18next";

const BreadProofingBaskets = lazy(() =>
  import("../../pages/BasketPages/BreadproofingBaskets/BreadproofingBaskets")
);
const WithLiners = lazy(() =>
  import("../../pages/ProductsPage/WithLiners/WithLiners")
);

const PlasticBaskets = lazy(() =>
  import("../../pages/ProductsPage/PlasticBaskets/PlasticBaskets")
);

const Extras = lazy(() => import("../../pages/ProductsPage/Extras/Extras"));

const BreadProofing = lazy(() =>
  import("../../pages/ProductsPage/BreadProofing/BreadProofing")
);

const BambooFiberBaskets = lazy(() =>
  import("../../pages/ProductsPage/BambooFiber/BambooFiberBaskets")
);

const CorkBasketsTypes = lazy(() =>
  import("../../pages/BasketPages/CorkBaskets/Cork")
);

const CorkBaskets = lazy(() =>
  import("../../pages/ProductsPage/CorkBaskets/CorkBaskets")
);

const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));
const AboutUsPage = lazy(() => import("../../pages/AboutUsPage/AboutUsPage"));

const Layout = () => {
  const { t } = useTranslation("common");
  const nodeRef = useRef(null);
  const routes = [
    { path: `/pl`, name: "Home", Component: MainPage },
    { path: `/es`, name: "Home", Component: MainPage },
    { path: `/ru`, name: "Home", Component: MainPage },
    { path: `/fr`, name: "Home", Component: MainPage },
    { path: `/en`, name: "Home", Component: MainPage },
    { path: `/it`, name: "Home", Component: MainPage },
    {
      path: t("mainSections.products.rattanLink"),
      name: "Products - Bread Proofing Baskets",
      Component: BreadProofing,
    },
    {
      path: t("mainSections.products.linersLink"),
      name: "Products - Liners",
      Component: WithLiners,
    },
    {
      path: t("mainSections.products.plasticLink"),
      name: "Products - Polypropylene baskets",
      Component: PlasticBaskets,
    },
    {
      path: t("mainSections.products.corkLink"),
      name: "Products - Cork bread proofing baskets",
      Component: CorkBaskets,
    },
    {
      path: t("mainSections.products.engravedLink"),
      name: "Products - Baskets with engraved bottom",
      Component: Extras,
    },
    {
      path: t("mainSections.products.bambooLink"),
      name: "Products - Bamboo fiber plastic baskets",
      Component: BambooFiberBaskets,
    },
    { path: t("links.aboutUs"), name: "About", Component: AboutUsPage },
    { path: t("links.contact"), name: "Contact", Component: ContactPage },
    {
      path: t("links.roundBaskets"),
      name: "RoundBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.oblongBaskets"),
      name: "OblongBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.ovalBaskets"),
      name: "OvalBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.miniBaskets"),
      name: "MiniBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.bigSlicedBaskets"),
      name: "LongBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.squareBaskets"),
      name: "SquareBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.baguetteBaskets"),
      name: "BaguetteBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.bambooFiber"),
      name: "BambooBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.bambooRound"),
      name: "BambooBasketsRound",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.bambooOblong"),
      name: "BambooBasketsOblong",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.plasticRound"),
      name: "PlasticRound",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.plasticOblong"),
      name: "PlasticOblong",
      Component: BreadProofingBaskets,
    },
    {
      path: t("links.corkRound"),
      name: "CorkRound",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.corkOblong"),
      name: "CorkOblong",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.corkOval"),
      name: "CorkOval",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.corkRectangular"),
      name: "CorkRectangular",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.corkBaguette"),
      name: "CorkBaguette",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.corkEngraved"),
      name: "CorkEngraved",
      Component: CorkBasketsTypes,
    },
    {
      path: t("links.impressum"),
      name: "Legal Notice",
      Component: Impressum,
    },
    {
      path: t("links.privacyPolicy"),
      name: "Privacy Policy",
      Component: PrivacyPolicy,
    },
  ];

  let routeList = routes.map(({ path, Component, name }) => (
    <Route
      key={path}
      exact={true}
      path={path}
      nodeRef={nodeRef}
      render={(props) => <Component {...props} title={name} />}
    />
  ));

  const AnimatedSwitch = withRouter(({ location }) => (
    <Switch>
      {routeList}
      <Route render={() => <Redirect to={{ pathname: t("links.home") }} />} />
    </Switch>
  ));

  return (
    <>
      <Navigation />
      <ScrollToTop />
      {<AnimatedSwitch />}
      <Footer />
    </>
  );
};

export default withRouter(Layout);

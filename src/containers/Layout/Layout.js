import React, { useRef, lazy } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MainPage from "../../pages/MainPage/MainPage";
import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";
import WoodenBakingForms from "../../pages/ProductsPage/WoodenBakingForms/WoodenBakingForms";
import Impressum from "../../pages/Legal/Impressum/Impressum";
import PrivacyPolicy from "../../pages/Legal/PrivacyPolicy/PrivacyPolicy";
import { useTranslation } from "react-i18next";



const BreadProofingBaskets = lazy(() =>
  import("../../pages/BasketPages/BreadproofingBaskets/BreadproofingBaskets")
);
const WithLiners = lazy(() =>
  import("../../pages/ProductsPage/WithLiners/WithLiners")
);

const BreadProofing = lazy(() =>
  import("../../pages/ProductsPage/BreadProofing/BreadProofing")
);

const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));
const AboutUsPage = lazy(() => import("../../pages/AboutUsPage/AboutUsPage"));

const Layout = (props) => {
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
      path: t("links.breadProofing"),
      name: "Products - Bread Proofing Baskets",
      Component: BreadProofing,
    },
    {
      path:  t("links.withLiners"),
      name: "Products - Baskets with Liners",
      Component: WithLiners,
    },
    {
      path: t("links.woodenBakingForms"),
      name: "Products - Wooden Baking Forms",
      Component: WoodenBakingForms,
    },
    {
      path: t("links.engraved"),
      name: "Products - Wooden Baking Forms",
      Component: WoodenBakingForms,
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
      path: "/impressum",
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
      {/* <Route render={() => <Redirect to={{ pathname: t("links.home") }} />} /> */}
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

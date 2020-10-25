import React, { useRef, lazy } from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import MainPage from "../../pages/MainPage/MainPage";
import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";
import WoodenBakingForms from "../../pages/ProductsPage/WoodenBakingForms/WoodenBakingForms";
import Impressum from "../../pages/Legal/Impressum/Impressum";
import PrivacyPolicy from "../../pages/Legal/PrivacyPolicy/PrivacyPolicy";

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

const Layout = () => {
  const nodeRef = useRef(null);

  const routes = [
    { path: "/", name: "Home", Component: MainPage },
    {
      path: "/products/breadproofingbaskets",
      name: "Products - Bread Proofing Baskets",
      Component: BreadProofing,
    },
    {
      path: "/products/basketswithliners",
      name: "Products - Baskets with Liners",
      Component: WithLiners,
    },
    {
      path: "/products/woodenbakingforms",
      name: "Products - Wooden Baking Forms",
      Component: WoodenBakingForms,
    },
    { path: "/about", name: "About", Component: AboutUsPage },
    { path: "/contact", name: "Contact", Component: ContactPage },
    {
      path: "/products/breadproofingbaskets/round",
      name: "RoundBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/oblong",
      name: "OblongBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/oval",
      name: "OvalBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/mini",
      name: "MiniBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/long",
      name: "LongBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/square",
      name: "SquareBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/baguette",
      name: "BaguetteBaskets",
      Component: BreadProofingBaskets,
    },
    {
      path: "/legalnotice",
      name: "Legal Notice",
      Component: Impressum,
    },
    {
      path: "/privacypolicy",
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
      <Route render={() => <Redirect to={{ pathname: "/" }} />} />
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

export default Layout;

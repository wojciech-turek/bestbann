import React, { useRef } from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import Footer from "../../components/Footer/Footer";
import MainPage from "../../pages/MainPage/MainPage";

import BreadProofing from "../../pages/ProductsPage/BreadProofing/BreadProofing";
import WithLiners from "../../pages/ProductsPage/WithLiners/WithLiners";
import classes from "./Layout.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";
import ContactPage from "../../pages/ContactPage/ContactPage";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import { BreadproofingBaskets } from "../../pages/BasketPages/BreadproofingBaskets/BreadproofingBaskets";

const Layout = () => {
  const nodeRef = useRef(null);

  const routes = [
    { path: "/bestbann", name: "Home", Component: MainPage },
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
    { path: "/about", name: "About", Component: AboutUsPage },
    { path: "/contact", name: "Contact", Component: ContactPage },
    {
      path: "/products/breadproofingbaskets/round",
      name: "RoundBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/oblong",
      name: "OblongBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/oval",
      name: "OvalBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/mini",
      name: "MiniBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/long",
      name: "LongBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/square",
      name: "SquareBaskets",
      Component: BreadproofingBaskets,
    },
    {
      path: "/products/breadproofingbaskets/baguette",
      name: "BaguetteBaskets",
      Component: BreadproofingBaskets,
    },
  ];

  let routeList = routes.map(({ path, Component, name }) => (
    <Route
      key={path}
      exact
      path={path}
      nodeRef={nodeRef}
      render={(props) => <Component {...props} title={name} />}
    />
  ));

  const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames={{
          enter: classes.PageEnter,
          enterActive: classes.PageEnterActive,
          exit: classes.PageExit,
          exitActive: classes.PageExitActive,
        }}
        timeout={1000}
      >
        <Switch>
          {routeList}
          <Route render={() => <Redirect to={{ pathname: "/bestbann" }} />} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
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

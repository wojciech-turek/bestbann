import React, { useState, useRef } from "react";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import MainPage from "../MainPage/MainPage";
import ProductsPage from "../ProductsPage/ProductsPage";

import classes from "./Layout.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "../../components/UI/ScrollToTop/ScrollToTop";

const Layout = (props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const nodeRef = useRef(null);

  const routes = [
    { path: "/bestbann", name: "Home", Component: MainPage },
    { path: "/products", name: "Products", Component: ProductsPage },
    { path: "/about", name: "About", Component: MainPage },
    { path: "/contact", name: "Contact", Component: MainPage },
  ];

  let routeList = routes.map(({ path, Component }) => (
    <Route key={path} exact path={path} nodeRef={nodeRef}>
      <Component />
    </Route>
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
      {loading ? <Spinner setLoading={setLoading} loading={loading} /> : null}
      <SideDrawer open={sideOpen} setSideOpen={setSideOpen} />
      <Backdrop sideOpen={sideOpen} clicked={setSideOpen} />
      <Toolbar
        open={sideOpen}
        clicked={setSideOpen}
        loading={loading}
        setLoading={setLoading}
        setSideOpen={setSideOpen}
      />
      <ScrollToTop />
      {<AnimatedSwitch />}

      <Footer />
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import MainPage from "../MainPage/MainPage";
import ProductsPage from "../ProductsPage/ProductsPage";

const Layout = (props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? <Spinner setLoading={setLoading} loading={loading} /> : null}
      <SideDrawer open={sideOpen} />
      <Backdrop sideOpen={sideOpen} clicked={setSideOpen} />
      <Toolbar
        open={sideOpen}
        clicked={setSideOpen}
        loading={loading}
        setLoading={setLoading}
      />

      <Switch>
        <Route exact path="/bestbann">
          <MainPage />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
        <Route render={() => <Redirect to={{ pathname: "/bestbann" }} />} />
      </Switch>
      <Footer />
    </>
  );
};

export default Layout;

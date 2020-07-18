import React, { useState } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

const Layout = (props) => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <SideDrawer open={sideOpen} />
      <Backdrop sideOpen={sideOpen} clicked={setSideOpen} />
      <Toolbar open={sideOpen} clicked={setSideOpen} />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

import React, { useState } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <>
      <SideDrawer clicked={setSideOpen} open={sideOpen} />
      <Toolbar open={sideOpen} clicked={setSideOpen} />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";

const Layout = (props) => {
  return (
    <>
      <Toolbar />
      <div>Side Drawer, Backdrop</div>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;

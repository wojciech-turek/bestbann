import React, { useState } from "react";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export const ProductBarShown = React.createContext();

export default function Navigation() {
  const [sideOpen, setSideOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toolbarShown, setToolbarShown] = useState(true);
  const [productsBarShown, setProductsBarShown] = useState(false);

  return (
    <>
      {loading ? <Spinner setLoading={setLoading} loading={loading} /> : null}
      <SideDrawer open={sideOpen} setSideOpen={setSideOpen} />
      <Backdrop sideOpen={sideOpen} clicked={setSideOpen} />
      <ProductBarShown.Provider
        value={{ productsBarShown, setProductsBarShown }}
      >
        <Toolbar
          toolbarShown={toolbarShown}
          setToolbarShown={setToolbarShown}
          open={sideOpen}
          clicked={setSideOpen}
          loading={loading}
          setLoading={setLoading}
          setSideOpen={setSideOpen}
          productsBarShown={productsBarShown}
          setProductsBarShown={setProductsBarShown}
        />

        {productsBarShown ? (
          <Backdrop
            productsBarShown={productsBarShown}
            setProductsBarShown={setProductsBarShown}
          />
        ) : null}
      </ProductBarShown.Provider>
    </>
  );
}

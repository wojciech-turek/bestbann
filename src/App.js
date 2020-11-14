import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import ReactGA from "react-ga";
import Layout from "../src/containers/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Spinner from "./components/UI/Spinner/Spinner";


ReactGA.initialize("UA-73653343-2");
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);
ReactGA.ga("send", "pageview", window.location.pathname);

function App() {
  const [loading, setLoading] = useState(true);
  const { i18n } = useTranslation("common");
  useEffect(() => {
    setLoading(true)
    const changeLang = () => {
      i18n.changeLanguage(window.location.pathname[1]+window.location.pathname[2]);
  };
    changeLang()
  }, [i18n])
  return (
    <Router>
      <Suspense fallback={null}>
      {loading ? <Spinner setLoading={setLoading} loading={loading} /> : <Layout />}
        
      </Suspense>
    </Router>
  );
}

export default App;

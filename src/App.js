import React, { Suspense } from "react";
import "./App.css";
import ReactGA from "react-ga";
import Layout from "../src/containers/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

ReactGA.initialize("UA-73653343-2");
ReactGA.set({ page: window.location.pathname });
ReactGA.pageview(window.location.pathname);
ReactGA.ga("send", "pageview", window.location.pathname);

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Layout />
      </Suspense>
    </Router>
  );
}

export default App;

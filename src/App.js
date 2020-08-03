import React, { Suspense } from "react";
import "./App.css";
import Layout from "../src/containers/Layout/Layout";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <SimpleReactLightbox>
          <Layout />
        </SimpleReactLightbox>
      </Suspense>
    </Router>
  );
}

export default App;

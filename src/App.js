import React, { Suspense } from "react";
import "./App.css";
import Layout from "../src/containers/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Layout />
      </Suspense>
    </Router>
  );
}

export default App;

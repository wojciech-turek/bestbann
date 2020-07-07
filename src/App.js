import React, { Suspense } from "react";
import "./App.css";
import Layout from "../src/containers/Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";

function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <div className="App">
          <Layout>
            <MainPage />
          </Layout>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;

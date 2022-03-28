import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import routes from "../routes";
import AppFooter from "../../components/templates/layout/Footer";
import AppHeader from "../../components/templates/layout/Header";


const DefaultLayout = () => {
    return (
      <div className="App">
        <div className="app-body">
          <AppHeader/>
          <main className="main">
            <Routes>
              {routes.map((route, idx) => {
                return route.element ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={<route.element/>}
                  />
                ) : null;
              })}
            </Routes>
          </main>
          <AppFooter />
        </div>
      </div>
    );
};

export default DefaultLayout;

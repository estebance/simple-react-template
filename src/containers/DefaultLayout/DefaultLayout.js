import React, { Component, Suspense } from "react";
import { Redirect, BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import logo from "../../logo.svg";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="app-body">
          <AppHeader />
          <main className="main">
            <Routes>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    element={(props) => <route.element {...props} />}
                  />
                ) : null;
              })}
            </Routes>
          </main>
          <AppFooter />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;

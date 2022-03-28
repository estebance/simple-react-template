import React, { Component, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../../authRoutes";
import logo from "../../logo.svg";
import AppFooter from "../AppFooter/AppFooter";
import AppHeader from "../AppHeader/AppHeader";

class AuthLayout extends Component {
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
                    render={(props) => <route.component {...props} />}
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

export default AuthLayout;

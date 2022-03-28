import React, { useContext, useEffect } from "react";
import {
  HashRouter,
  BrowserRouter,
  Router,
  Route,
} from "react-router-dom";
import Navigator from "./navigation";
import { Provider } from "react-redux";
// import logo from "./logo.svg";
import "./App.scss";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;

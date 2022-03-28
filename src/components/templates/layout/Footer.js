import React, { Component, Suspense } from "react";
import "./Footer.scss";

const AppFooter = React.memo((props) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <span> Services </span>
      </footer>
    </React.Fragment>
  );
});

export default AppFooter;


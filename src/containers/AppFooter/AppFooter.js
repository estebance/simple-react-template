import React, { Component, Suspense } from "react";
import { Row, Col } from "react-bootstrap";
import "./AppFooter.scss";

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

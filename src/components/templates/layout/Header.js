import React, { Component, Suspense } from "react";
import { Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Header.scss";

const AppHeader = React.memo((props) => {
  return (
    <React.Fragment>
      <Navbar className="py-0 app-navbar" expand="lg">
        <Navbar.Brand href="/">Services</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Contact</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
          </Nav>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item href="/sign-in">Sign In</NavDropdown.Item>
            <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
});

export default AppHeader;


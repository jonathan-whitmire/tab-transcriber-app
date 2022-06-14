import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
    return (
      <Navbar variant="dark" bg="primary" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Tab-Transcriber</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" style={{ width: "100%" }}>
              <Nav.Link href="#home">Get Started</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              <Nav.Link href="#link">Contact Information</Nav.Link>
              <Nav.Link href="#link">Login</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavBar;
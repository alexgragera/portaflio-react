import React from "react";
import './navigation.css';
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="black" className="Navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="nav-item">Inicio</Nav.Link>
            <Nav.Link href="/proyectos" className="nav-item">Proyectos</Nav.Link>
            <Nav.Link href="/contacto" className="nav-item">Contacto</Nav.Link>
            <Nav.Link href="/newsletter" className="nav-item">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
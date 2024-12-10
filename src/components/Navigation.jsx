import React from "react";
import './navigation.css';
import { Nav, Navbar, Container } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar bg="black" className="Navbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Mi Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-item">Inicio</Link>
            <Link to="/proyectos" className="nav-item">Proyectos</Link>
            <Link to="/contacto" className="nav-item">Contacto</Link>
            <Link to="/newsletter" className="nav-item">Newsletter</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
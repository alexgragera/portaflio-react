import React from "react";
import './footer.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://github.com/alexgragera" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
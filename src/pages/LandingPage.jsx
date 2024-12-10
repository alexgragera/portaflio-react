import React from "react";
import './landingPage.css';
import { Container, Row, Col, Card } from "react-bootstrap";

export default function LandingPage() {
  return (
    <Container className="landing-page text-center">
      <Row className="my-5">
        <Col>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Bienvenido a Mi Portafolio</Card.Title>
              <Card.Text>
                Aquí encontrarás información sobre mis proyectos, estudios y objetivos profesionales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Mis Estudios</Card.Title>
              <Card.Text>
                - Educacion Secundaria Obligatoria.
                <br />
                - Grado Superior en Desarollo de aplicaciones web.
                <br />
                - Certificación en Desarrollo Web Full Stack por el Instituto DEF.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Card className="bg-dark text-white">
            <Card.Body>
              <Card.Title>Mis Objetivos</Card.Title>
              <Card.Text>
                - Convertirme en un desarrollador líder en el campo de la inteligencia artificial.
                <br />
                - Contribuir a proyectos de código abierto que impacten positivamente en la sociedad.
                <br />
                - Continuar aprendiendo y mejorando mis habilidades en desarrollo web y ciencia de datos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
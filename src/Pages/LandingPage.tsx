import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const LandingPage: React.FC = () => {
  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column text-white"
      style={{ backgroundColor: "#121212" }}
    >
      <Row className="flex-grow-1">
        {/* Sección Izquierda */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#1a1a40" }}
        >
          <h1 className="text-center">Planifica un viaje</h1>
          <p className="text-center">
            para ver las auroras boreales en Noruega
          </p>
        </Col>

        {/* Sección Derecha */}
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: "#000" }}
        >
          <h2 className="mb-4">Cómo comenzar</h2>
          <Button variant="primary" className="mb-3 px-4">
            Iniciar sesión
          </Button>
          <Button variant="primary" className="mb-4 px-4">
            Suscribirse
          </Button>
          <div className="text-muted small">
            Términos de uso | Política de privacidad
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;

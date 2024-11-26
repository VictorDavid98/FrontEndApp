import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactoSection: React.FC = () => {
  return (
    <div>
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "bold",
            color: "#ff8c00", // Naranjo
          }}
        >
          Contáctanos
        </h2>
        <Row>
          <Col xs={12} md={6}>
            <h4
              style={{
                color: "#ff8c00", // Naranjo
                marginBottom: "20px",
              }}
            >
              ¿Tienes dudas o comentarios?
            </h4>
            <p style={{ color: "#c4c4c4" }}>
              Escríbenos a través del formulario y nuestro equipo se pondrá en
              contacto contigo lo antes posible.
            </p>
            <p style={{ color: "#c4c4c4" }}>
              <strong>Email:</strong> contacto@asesoriasfitness.com
            </p>
            <p style={{ color: "#c4c4c4" }}>
              <strong>Teléfono:</strong> +56 9 1234 5678
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#c4c4c4" }}>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#c4c4c4" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="Tu email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ color: "#c4c4c4" }}>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tu mensaje" />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: "#ff8c00", // Naranjo
                  border: "none",
                  color: "white",
                  padding: "10px 20px",
                }}
              >
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactoSection;

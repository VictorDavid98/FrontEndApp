import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const TestimoniosSection: React.FC = () => {
  const testimonios = [
    {
      nombre: "María López",
      comentario:
        "Gracias a esta plataforma, logré mejorar mi condición física y alcanzar mis metas con un plan completamente personalizado. ¡La recomiendo 100%!",
      imagen: "/imagenes/testimonio1.jpg",
    },
    {
      nombre: "Carlos Torres",
      comentario:
        "El seguimiento del personal trainer es increíble. Siempre disponible para resolver mis dudas y ajustar mi rutina según mis necesidades.",
      imagen: "/imagenes/testimonio2.jpg",
    },
    {
      nombre: "Sofía Martínez",
      comentario:
        "Las evaluaciones constantes me ayudaron a mantenerme motivada y ver mis avances reales. ¡Es la mejor decisión que he tomado!",
      imagen: "/imagenes/testimonio3.jpg",
    },
  ];

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
          Lo que dicen nuestros usuarios
        </h2>
        <Row className="g-4">
          {testimonios.map((testimonio, index) => (
            <Col key={index} xs={12} md={4}>
              <Card
                style={{
                  backgroundColor: "#2e2e2e", // Gris oscuro
                  color: "white",
                  border: "none",
                  textAlign: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Card.Img
                  variant="top"
                  src={testimonio.imagen}
                  style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    margin: "20px auto",
                  }}
                />
                <Card.Body>
                  <Card.Text style={{ fontStyle: "italic", color: "#c4c4c4" }}>
                    "{testimonio.comentario}"
                  </Card.Text>
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                      color: "#ff8c00", // Naranjo
                      marginTop: "15px",
                    }}
                  >
                    {testimonio.nombre}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default TestimoniosSection;

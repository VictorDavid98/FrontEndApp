import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BeneficiosSection: React.FC = () => {
  const beneficios = [
    {
      titulo: "Planes Personalizados",
      descripcion:
        "Recibe un plan de entrenamiento diseñado exclusivamente para ti, adaptado a tu nivel, metas y estilo de vida.",
      icono: "🏋️‍♂️",
    },
    {
      titulo: "Seguimiento Profesional",
      descripcion:
        "Monitorea tu progreso con la ayuda de personal trainers certificados y obtén recomendaciones personalizadas.",
      icono: "📈",
    },
    {
      titulo: "Evaluaciones Constantes",
      descripcion:
        "Realiza evaluaciones periódicas para medir tus avances y ajustar tu plan según tus resultados.",
      icono: "📊",
    },
    {
      titulo: "Comunicación Directa",
      descripcion:
        "Mantén contacto directo con tu entrenador para resolver dudas y mantener la motivación al máximo.",
      icono: "💬",
    },
    {
      titulo: "Flexibilidad Horaria",
      descripcion:
        "Accede a tu plan y rutinas desde cualquier lugar, en cualquier momento, adaptado a tu ritmo.",
      icono: "⏰",
    },
    {
      titulo: "Nutrición Adaptada",
      descripcion:
        "Recibe recomendaciones nutricionales para complementar tu entrenamiento y alcanzar tus metas más rápido.",
      icono: "🥗",
    },
  ];

  return (
    <div>
      <Container>
        <h2
          className="text-center mb-5"
          style={{
            fontWeight: "bold",
            color: "#ff8c00", // Naranjo brillante
          }}
        >
          ¿Por qué elegirnos?
        </h2>
        <Row className="g-4">
          {beneficios.map((beneficio, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card
                style={{
                  border: "none",
                  backgroundColor: "#2e2e2e", // Gris oscuro
                  color: "white",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Sutil sombra
                  height: "100%",
                }}
              >
                <Card.Body className="text-center">
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#ff8c00", // Ícono en naranjo
                      marginBottom: "15px",
                    }}
                  >
                    {beneficio.icono}
                  </div>
                  <Card.Title
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      color: "#ff8c00", // Título en naranjo
                    }}
                  >
                    {beneficio.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: "#c4c4c4" }}>
                    {beneficio.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BeneficiosSection;

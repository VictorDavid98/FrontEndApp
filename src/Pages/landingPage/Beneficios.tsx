import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BeneficiosSection: React.FC = () => {
  const beneficios = [
    {
      titulo: "Planes Personalizados",
      descripcion:
        "Recibe un plan de entrenamiento diseñado exclusivamente para ti, adaptado a tu nivel, metas y estilo de vida.",
      icono: "🏋️‍♂️", // Puedes reemplazar con un ícono de librería como FontAwesome o Material Icons
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
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "60px 0",
      }}
    >
      <Container>
        <h2 className="text-center mb-5" style={{ fontWeight: "bold" }}>
          ¿Por qué elegirnos?
        </h2>
        <Row className="g-4">
          {beneficios.map((beneficio, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <Card
                style={{
                  border: "none",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  height: "100%",
                }}
              >
                <Card.Body className="text-center">
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#ff8c00",
                      marginBottom: "15px",
                    }}
                  >
                    {beneficio.icono}
                  </div>
                  <Card.Title style={{ fontWeight: "bold", fontSize: "18px" }}>
                    {beneficio.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: "#6c757d" }}>
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

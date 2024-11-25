import React from "react";
import { Container, Button } from "react-bootstrap";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      >
        <source src="/imagenes/video1.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Color negro con 50% de opacidad
          zIndex: -1,
        }}
      ></div>

      {/* Contenido superpuesto */}
      <Container
        fluid
        className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
      >
        <h1 className="mb-4">
          Tu camino hacia una mejor versión comienza aquí
        </h1>
        <h4 className="mb-4">
          Empieza hoy mismo: regístrate y da el primer paso hacia el cambio
        </h4>
        <div>
          <Button variant="primary" className="me-3 px-4">
            Iniciar sesión
          </Button>
          <Button variant="primary" className="px-4">
            Suscribirse
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;

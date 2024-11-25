import React, { useRef, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

const LandingPage: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]); // Referencia a las secciones
  const currentSectionIndex = useRef(0); // Índice actual de la sección

  // Función para desplazar a una sección específica
  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
      currentSectionIndex.current = index; // Actualizar índice actual
    }
  };

  // Manejo del evento de desplazamiento
  const handleScroll = (event: React.WheelEvent) => {
    if (
      event.deltaY > 0 &&
      currentSectionIndex.current < sectionsRef.current.length - 1
    ) {
      // Desplazar hacia abajo
      scrollToSection(currentSectionIndex.current + 1);
    } else if (event.deltaY < 0 && currentSectionIndex.current > 0) {
      // Desplazar hacia arriba
      scrollToSection(currentSectionIndex.current - 1);
    }
  };

  useEffect(() => {
    // Prevenir desplazamiento normal de la página
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onWheel={handleScroll}
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      {/* Sección 1: Video de fondo */}
      <div
        ref={(el) => el && (sectionsRef.current[0] = el)}
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
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Color negro con opacidad
            zIndex: -1,
          }}
        ></div>

        {/* Contenido superpuesto */}
        <Container
          fluid
          className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
        >
          <h1
            className="mb-4"
            style={{
              fontSize: "100px",
            }}
          >
            Tu camino hacia una mejor versión comienza aquí
          </h1>
          <h4 className="mb-4">
            Empieza hoy mismo: regístrate y da el primer paso hacia el cambio
          </h4>
          <div>
            <Button variant="btn btn-warning" className="me-3 px-4">
              Iniciar sesión
            </Button>
            <Button variant="btn btn-warning" className="px-4">
              Suscribirse
            </Button>
          </div>
        </Container>
      </div>

      {/* Sección 2: Beneficios */}
      <div
        ref={(el) => el && (sectionsRef.current[1] = el)}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1>Beneficios principales</h1>
      </div>

      {/* Sección 3: Testimonios */}
      <div
        ref={(el) => el && (sectionsRef.current[2] = el)}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e9ecef",
        }}
      >
        <h1>Lo que dicen nuestros clientes</h1>
      </div>

      {/* Sección 4: Contacto */}
      <div
        ref={(el) => el && (sectionsRef.current[3] = el)}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#dee2e6",
        }}
      >
        <h1>Contáctanos</h1>
      </div>
    </div>
  );
};

export default LandingPage;

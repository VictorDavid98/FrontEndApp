import React, { useRef, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import BeneficiosSection from "./landingPage/Beneficios";
import TestimoniosSection from "./landingPage/Testimonios";
import ContactoSection from "./landingPage/Contacto";
//import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]); // Referencia a las secciones
  const currentSectionIndex = useRef(0); // Índice actual de la sección
  const [isMobile, setIsMobile] = useState(false); // Detectar si es móvil

  // Función para detectar si es móvil
  const detectMobile = () => {
    setIsMobile(window.innerWidth <= 768); // Definir móvil como pantallas <= 768px
  };

  // Configurar el detector de tamaño de pantalla
  useEffect(() => {
    detectMobile(); // Detectar tamaño inicial
    window.addEventListener("resize", detectMobile); // Detectar cambios de tamaño
    return () => {
      window.removeEventListener("resize", detectMobile);
    };
  }, []);

  // Función para desplazar a una sección específica
  const scrollToSection = (index: number) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: "smooth",
      });
      currentSectionIndex.current = index; // Actualizar índice actual
    }
  };

  // Manejo del evento de desplazamiento (solo en computadoras)
  const handleScroll = (event: React.WheelEvent) => {
    if (!isMobile) {
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
    }
  };

  // Bloquear o restaurar el desplazamiento normal en el cuerpo según el tamaño
  useEffect(() => {
    document.body.style.overflow = isMobile ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  return (
    <div onWheel={handleScroll} style={{ width: "100%", overflow: "hidden" }}>
      {/* Sección 1: Video de fondo */}
      <div
        ref={(el) => el && (sectionsRef.current[0] = el)}
        className="section full-height"
      >
        {/* Video de fondo */}
        <video autoPlay loop muted className="background-video">
          <source src="/imagenes/video1.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay oscuro */}
        <div className="overlay"></div>

        {/* Contenido superpuesto */}
        <Container
          fluid
          className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
        >
          <h1 className="main-title">
            Tu camino hacia una mejor versión comienza aquí
          </h1>
          <h4 className="sub-title">
            Empieza hoy mismo: regístrate y da el primer paso hacia el cambio
          </h4>
          <div className="button-group">
            <Button variant="btn btn-warning" className="action-button me-3">
              Iniciar sesión
            </Button>
            <Button variant="btn btn-warning" className="action-button">
              Suscribirse
            </Button>
          </div>
        </Container>
      </div>

      {/* Sección 2: Beneficios */}
      <div
        ref={(el) => el && (sectionsRef.current[1] = el)}
        className="section"
        style={{
          backgroundColor: "#1e1e1e", // Negro como fondo
          width: "100%",
          height: "100%",
        }}
      >
        <BeneficiosSection />
      </div>

      {/* Sección 3: Testimonios */}
      <div
        ref={(el) => el && (sectionsRef.current[2] = el)}
        className="section"
        style={{
          backgroundColor: "#1e1e1e", // Negro como fondo
          width: "100%",
          height: "100%",
        }}
      >
        <TestimoniosSection />
      </div>

      {/* Sección 4: Contacto */}
      <div
        ref={(el) => el && (sectionsRef.current[3] = el)}
        className="section"
        style={{
          backgroundColor: "#1e1e1e", // Negro como fondo
          width: "100%",
          height: "100%",
        }}
      >
        <ContactoSection />
      </div>
    </div>
  );
};

export default LandingPage;

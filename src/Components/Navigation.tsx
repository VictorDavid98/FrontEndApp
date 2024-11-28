import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/authContext";

const Navigation = () => {
  const user = useAuthState();
  const authDispatch = useAuthDispatch();
  const [showMenu, setShowMenu] = useState(false); // Control del menú lateral

  const toggleMenu = () => setShowMenu(!showMenu);
  const logout = () => {
    authDispatch({
      type: "logout",
    });
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="w-100"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Container>
          {/* Menú lateral solo si está autenticado */}
          {user.isAuthenticated && (
            <span
              onClick={toggleMenu}
              style={{
                cursor: "pointer",
                color: "white",
                fontSize: "24px",
                marginRight: "10px",
              }}
            >
              ☰
            </span>
          )}
          <Navbar.Brand
            style={{
              color: "white",
            }}
            as={Link}
            to="/"
          >
            ASESORIASONLINE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar"></Navbar.Toggle>
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto"></Nav>
            <Nav className="justify-content-end">
              {user.isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/createpoll" className="text-white">
                    Crear encuesta
                  </Nav.Link>
                  <NavDropdown
                    title={<span style={{ color: "white" }}>{user.email}</span>}
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/replypoll/:id">
                      Mis encuestas
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Nav.Link
                    className="btn custom-orange px-4 me-2"
                    as={Link}
                    to="/login"
                  >
                    Iniciar Sesión
                  </Nav.Link>
                  <Nav.Link
                    className="btn custom-orange px-4"
                    as={Link}
                    to="/register"
                  >
                    Crear cuenta
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Menú desplegable lateral */}
      <Offcanvas
        show={showMenu}
        onHide={toggleMenu}
        placement="start" // Menú desde la izquierda
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", color: "white" }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menú</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link
              as={Link}
              to="/verusuariosadmin"
              style={{ color: "white" }}
            >
              Ver Usuarios
            </Nav.Link>
            <Nav.Link as={Link} to="/general-data" style={{ color: "white" }}>
              Ver Datos Generales
            </Nav.Link>
            <Nav.Link as={Link} to="/calendar" style={{ color: "white" }}>
              Ver Calendario
            </Nav.Link>
            <Nav.Link as={Link} to="/evaluations" style={{ color: "white" }}>
              Evaluaciones
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/exercise-library"
              style={{ color: "white" }}
            >
              Biblioteca de Ejercicios
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navigation;

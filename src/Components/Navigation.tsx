import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context/authContext";

const Navigation = () => {
  const user = useAuthState();
  const authDispatch = useAuthDispatch();

  const logout = () => {
    authDispatch({
      type: "logout",
    });
  };

  return (
    <Navbar
      expand="lg"
      className="w-100 me-1"
      style={{
        position: "absolute",
        top: 0, // Asegurarse que esté en la parte superior
        left: 0,
        zIndex: 10,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo blanco con 50% de opacidad
        backdropFilter: "blur(5px)", // Efecto de desenfoque opcional para un mejor diseño
      }}
    >
      <Container>
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
                <Nav.Link as={Link} to="/createpoll">
                  Crear encuesta
                </Nav.Link>
                <NavDropdown title={user.email} id="navbar-dropdown">
                  <NavDropdown.Item as={Link} to="/user">
                    Mis encuestas
                  </NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
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
  );
};

export default Navigation;

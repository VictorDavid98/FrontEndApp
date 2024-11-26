import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";
import { loginUser } from "../services/UserService";
import { useAuthDispatch } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sendingData, setSendingData] = useState(false);

  const authDispatch = useAuthDispatch();

  const login = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setSendingData(true);
      setError("");
      const res = await loginUser(email, password);
      const token = res.data.token;
      authDispatch({
        type: "login",
        token,
      });
    } catch (errors: any) {
      if (errors.response) {
        errors.response.status === 403 &&
          setError("No se puede iniciar sesión con esas credenciales");
      }
      setSendingData(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1c1c1c",
        backdropFilter: "blur(100px)",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1000px",
          width: "90%",
          height: "75%",
          border: "none",
          boxShadow: "1px 1px 3px 3px rgba(255, 255, 255, 0.7)",
        }}
      >
        <div
          style={{
            flex: 2,
            backgroundColor: "#333",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            textAlign: "center",
            backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Seguro y Confiable
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            Protegemos tus datos con las mejores prácticas de seguridad.
          </p>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#f8f9fa",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h4
            className="text-center"
            style={{
              color: "#333",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Bienvenido
          </h4>
          <Form onSubmit={login} style={{ width: "100%", maxWidth: "400px" }}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label style={{ color: "#333" }}>
                Correo electrónico
              </Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="e.g. john@gmail.com"
                style={{ borderColor: "#ff8c00" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ color: "#333" }}>Contraseña</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
                style={{ borderColor: "#ff8c00" }}
              />
            </Form.Group>
            <Button
              type="submit"
              className="w-100"
              style={{
                backgroundColor: "#ff8c00",
                borderColor: "#ff8c00",
                color: "white",
              }}
            >
              {sendingData ? (
                <>
                  <Spinner
                    animation="border"
                    as="span"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  &nbsp; Iniciando sesión...
                </>
              ) : (
                "Iniciar sesión"
              )}
            </Button>
          </Form>
          {error && (
            <Alert
              className="mt-4"
              show={!!error}
              variant="danger"
              style={{
                backgroundColor: "#ff8c00",
                borderColor: "#ff8c00",
                color: "white",
              }}
            >
              {error}
            </Alert>
          )}
          <div className="mt-4 text-center">
            <p style={{ color: "#555" }}>
              ¿No tienes una cuenta?{" "}
              <a
                href="/register"
                style={{ color: "#ff8c00", textDecoration: "none" }}
              >
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;

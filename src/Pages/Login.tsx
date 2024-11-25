import Container from "react-bootstrap/Container";
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
        backgroundImage: `url('https://images.pexels.com/photos/703012/pexels-photo-703012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Cambia esta ruta por la imagen que desees
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        className="p-4"
        style={{ maxWidth: "400px", width: "100%", zIndex: 5, opacity: 0.95 }}
      >
        <Card.Body>
          <h4 className="text-center">Iniciar sesión</h4>
          <hr />
          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="e.g. john@gmail.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
              />
            </Form.Group>
            <Button type="submit" className="w-100">
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
            <Alert className="mt-4" show={!!error} variant="danger">
              {error}
            </Alert>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

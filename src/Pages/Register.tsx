import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import React, { useState } from "react";
import { registerUser, loginUser } from "../services/UserService";
import { useAuthDispatch } from "../context/authContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [sendingData, setSendingData] = useState(false);

  const authDispatch = useAuthDispatch();

  const register = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      setSendingData(true);
      await registerUser(name, email, password);
      const res = await loginUser(email, password);
      const token = res.data.token;
      authDispatch({
        type: "login",
        token,
      });
    } catch (errors: any) {
      if (errors.response) {
        errors.response.status === 400 &&
          setErrors(errors.response.data.errors);
      }
      setSendingData(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`, // Cambia esta ruta por la imagen que desees
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
        style={{ maxWidth: "400px", width: "100%", zIndex: 5, opacity: 0.9 }}
      >
        <Card.Body>
          <h4>Crear cuenta</h4>
          <hr />

          <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                isInvalid={!!errors?.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="e.g. John Doe"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors?.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electronico</Form.Label>
              <Form.Control
                isInvalid={!!errors?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="e.g. john@gmail.com"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors?.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                isInvalid={!!errors?.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors?.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button type="submit">
              {sendingData ? (
                <>
                  <Spinner
                    animation="border"
                    as="span"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  ></Spinner>
                  &nbsp;
                  <span>Creando cuenta...</span>
                </>
              ) : (
                <>Crear cuenta</>
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Register;

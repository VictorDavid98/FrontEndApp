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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#1c1c1c", // Fondo negro
        backdropFilter: "blur(100px)",
      }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1000px",
          width: "100%",
          height: "75%",
          border: "none",
          boxShadow: "1px 1px 3px 3px rgba(255, 255, 255, 0.7)",
        }}
      >
        {/* Panel izquierdo (ilustración) */}
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
            backgroundImage: `url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800')`, // Reemplaza con tu URL
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
            Únete a Nosotros
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            Crea tu cuenta para empezar tu experiencia personalizada.
          </p>
        </div>

        {/* Panel derecho (formulario) */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#f8f9fa", // Fondo claro
            padding: "40px",
          }}
        >
          <h4
            className="text-center"
            style={{ color: "#333", fontWeight: "bold", marginBottom: "20px" }}
          >
            Regístrate
          </h4>
          <Form onSubmit={register}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label style={{ color: "#333" }}>Nombre</Form.Label>
              <Form.Control
                isInvalid={!!errors?.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="e.g. John Doe"
                style={{ borderColor: "#ff8c00" }} // Borde naranja
              />
              <Form.Control.Feedback type="invalid">
                {errors?.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label style={{ color: "#333" }}>
                Correo electrónico
              </Form.Label>
              <Form.Control
                isInvalid={!!errors?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="e.g. john@gmail.com"
                style={{ borderColor: "#ff8c00" }} // Borde naranja
              />
              <Form.Control.Feedback type="invalid">
                {errors?.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label style={{ color: "#333" }}>Contraseña</Form.Label>
              <Form.Control
                isInvalid={!!errors?.password}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="*********"
                style={{ borderColor: "#ff8c00" }} // Borde naranja
              />
              <Form.Control.Feedback type="invalid">
                {errors?.password}
              </Form.Control.Feedback>
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
                  &nbsp; Creando cuenta...
                </>
              ) : (
                "Crear cuenta"
              )}
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { getUserAdmin } from "../../services/PollService";

const VerUsuariosAdmin: React.FC = () => {
  const [users, setUsers] = useState([]); // Estado para los usuarios
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Llamada a la API para obtener usuarios
    const fetchUsers = async () => {
      try {
        const response = await getUserAdmin();
        const data = response.data; // Extraer los datos de la respuesta
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Usuarios</h1>
      {users.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Nombre
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.id}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron usuarios.</p>
      )}
    </div>
  );
};

export default VerUsuariosAdmin;

import React, { useEffect, useState } from "react";
import {
  getProfesionalesAdmin,
  getUserAdmin,
  getAllRolUsers,
  getUsuariosAsignadoProfesional,
} from "../../services/PollService";

import { FaEdit, FaTrashAlt, FaInfoCircle, FaUsers } from "react-icons/fa";

const VerUsuariosAdmin: React.FC = () => {
  const [allUsers, setAllUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para búsqueda
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null); // Profesional seleccionado
  const [assignedUsers, setAssignedUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await getAllRolUsers();
        setAllUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const handleEdit = (id: number) => {
    console.log(`Editar usuario con ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      console.log(`Eliminar usuario con ID: ${id}`);
    }
  };

  const handleViewInfo = (id: number) => {
    console.log(`Ver información del usuario con ID: ${id}`);
  };

  useEffect(() => {
    const fetchAssignedUsers = async () => {
      if (!selectedProfessional) return; // Asegurarse de que hay un profesional seleccionado

      try {
        const response = await getUsuariosAsignadoProfesional(
          selectedProfessional.id
        );
        setAssignedUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios asignados:", error);
      }
    };

    fetchAssignedUsers();
  }, [selectedProfessional]);
  const handleShowAssignedUsers = (professional: any) => {
    setSelectedProfessional(professional);
  };

  const handleCloseModal = () => {
    setSelectedProfessional(null);
  };

  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Cargando datos... 🕒</p>;
  }

  return (
    <div
      style={{
        paddingTop: "100px",
        backgroundColor: "#121212",
        color: "white",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
      }}
    >
      <h1 className="text-center" style={{ color: "#ff7f0e" }}>
        Información de usuarios 💼
      </h1>

      {/* Campo de búsqueda */}
      <div style={{ textAlign: "right", margin: "20px" }}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #333",
            backgroundColor: "#1f1f1f",
            color: "white",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            flex: "2",
            justifyContent: "center",
            minWidth: "300px",
            margin: "0 20px",
            padding: "20px",
            backgroundColor: "#2b2b2b",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          }}
        >
          <h2 style={{ color: "#ff7f0e", textAlign: "center" }}>👨‍⚖️ Usuarios</h2>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              backgroundColor: "#1f1f1f",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: "10px", border: "1px solid #333" }}>
                  ID
                </th>
                <th style={{ padding: "10px", border: "1px solid #333" }}>
                  Nombre
                </th>
                <th style={{ padding: "10px", border: "1px solid #333" }}>
                  Email
                </th>
                <th style={{ padding: "10px", border: "1px solid #333" }}>
                  Rol
                </th>
                <th style={{ padding: "10px", border: "1px solid #333" }}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} style={{ backgroundColor: "#262626" }}>
                  <td style={{ padding: "10px", border: "1px solid #333" }}>
                    {user.id}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #333" }}>
                    {user.name}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #333" }}>
                    {user.email}
                  </td>
                  <td style={{ padding: "10px", border: "1px solid #333" }}>
                    {user.roleName}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      border: "1px solid #333",
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#ff7f0e",
                        cursor: "pointer",
                        margin: "0 5px",
                      }}
                      title="Editar"
                      onClick={() => handleEdit(user.id)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#e74c3c",
                        cursor: "pointer",
                        margin: "0 5px",
                      }}
                      title="Eliminar"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrashAlt />
                    </button>
                    <button
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#3498db",
                        cursor: "pointer",
                        margin: "0 5px",
                      }}
                      title="Ver Información"
                      onClick={() => handleViewInfo(user.id)}
                    >
                      <FaInfoCircle />
                    </button>
                    {user.roleName === "ROLE_PROFESIONAL" && (
                      <button
                        style={{
                          background: "transparent",
                          border: "none",
                          color: "#2ecc71",
                          cursor: "pointer",
                          margin: "0 5px",
                        }}
                        title="Usuarios a Cargo"
                        onClick={() => handleShowAssignedUsers(user)}
                      >
                        <FaUsers />
                      </button>
                    )}

                    {selectedProfessional && (
                      <div className="modal">
                        <div className="modal-content">
                          <h2>
                            Usuarios asignados a {selectedProfessional.name}
                          </h2>
                          <ul>
                            {assignedUsers.length > 0 ? (
                              assignedUsers.map((user) => (
                                <li key={user.id}>
                                  {user.name} ({user.email})
                                </li>
                              ))
                            ) : (
                              <p>
                                No hay usuarios asignados a este profesional.
                              </p>
                            )}
                          </ul>
                          <button onClick={() => setSelectedProfessional(null)}>
                            Cerrar
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para mostrar usuarios asignados */}
      {selectedProfessional && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleCloseModal}
        >
          <div
            style={{
              backgroundColor: "#2b2b2b",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "600px",
              textAlign: "center",
              color: "white",
            }}
          >
            <h3>Usuarios a cargo de {selectedProfessional.name}</h3>
            <ul>
              {selectedProfessional.assignedUsers?.map((user: any) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
            <button
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerUsuariosAdmin;

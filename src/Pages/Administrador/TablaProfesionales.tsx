import React, { useEffect, useState } from "react";
import {
  getProfesionalesAdmin,
  getUserAdmin,
} from "../../services/PollService";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";

const TablaProfesionales: React.FC = () => {
  const [profesionales, setProfesionales] = useState<any[]>([]); // Estado para los profesionales
  const [loading, setLoading] = useState(true); // Estado de carga

  const handleEdit = (id: number) => {
    console.log(`Editar profesional con ID: ${id}`);
    // Aquí puedes navegar o abrir un formulario de edición
  };

  const handleDelete = (id: number) => {
    if (
      window.confirm("¿Estás seguro de que quieres eliminar este profesional?")
    ) {
      console.log(`Eliminar profesional con ID: ${id}`);
      // Llama al servicio para eliminar el profesional
    }
  };

  const handleViewInfo = (id: number) => {
    console.log(`Ver información del profesional con ID: ${id}`);
    // Navega a una vista detallada o abre un modal
  };

  // Obtener los profesionales al cargar la página
  useEffect(() => {
    const fetchProfesionales = async () => {
      try {
        const response = await getUserAdmin(); // Llamada al servicio para obtener los profesionales
        setProfesionales(response.data);
      } catch (error) {
        console.error("Error al obtener los profesionales:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfesionales();
  }, []);

  if (loading) {
    return <p>Cargando datos... 🕒</p>;
  }

  return (
    <div
      style={{
        flex: "2",
        justifyContent: "center",
        minWidth: "300px",
        marginRight: "20px",
        padding: "20px",
        backgroundColor: "#2b2b2b",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h2 style={{ color: "#ff7f0e", textAlign: "center" }}>
        👨‍⚖️ Profesionales
      </h2>
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
            <th
              style={{
                padding: "10px",
                border: "1px solid #333",
                color: "white",
              }}
            >
              ID
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #333",
                color: "white",
              }}
            >
              Nombre
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #333",
                color: "white",
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #333",
                color: "white",
              }}
            >
              Rol
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #333",
                color: "white",
              }}
            >
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {profesionales.map((prof: any) => (
            <tr key={prof.id} style={{ backgroundColor: "#262626" }}>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                {prof.id}
              </td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                {prof.name}
              </td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                {prof.email}
              </td>
              <td style={{ padding: "10px", border: "1px solid #333" }}>
                {prof.role.roleName}
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
                  onClick={() => handleEdit(prof.id)}
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
                  onClick={() => handleDelete(prof.id)}
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
                  onClick={() => handleViewInfo(prof.id)}
                >
                  <FaInfoCircle />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProfesionales;

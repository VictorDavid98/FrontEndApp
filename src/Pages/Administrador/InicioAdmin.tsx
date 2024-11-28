import React, { useEffect, useState } from "react";
import {
  getProfesionalesAdmin,
  getUserAdmin,
} from "../../services/PollService";
import { Bar } from "react-chartjs-2";
import { Calendar, momentLocalizer } from "react-big-calendar"; // Asegúrate de importar momentLocalizer
import "react-big-calendar/lib/css/react-big-calendar.css";
import { FaEdit, FaTrashAlt, FaInfoCircle } from "react-icons/fa";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import moment from "moment";

// Registrar los componentes del gráfico
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Configurar el localizer
const localizer = momentLocalizer(moment);

const InicioAdmin: React.FC = () => {
  const [profesionales, setProfesionales] = useState<any[]>([]); // Estado para los profesionales
  const [loading, setLoading] = useState(true); // Estado de carga
  const [events, setEvents] = useState<any[]>([]); // Estado para los eventos del calendario

  // Datos para el gráfico
  const chartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
      {
        label: "Usuarios Registrados",
        data: [65, 59, 80, 81, 56], // Datos de ejemplo
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Gráfico de Usuarios Registrados",
      },
    },
  };
  const lowPerformanceData = {
    labels: ["Juan Pérez", "María López", "Carlos Díaz"], // Nombres de los usuarios
    datasets: [
      {
        label: "% de Progreso",
        data: [30, 20, 45], // Progreso en porcentaje
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lowPerformanceOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Progreso de Usuarios con Bajo Rendimiento",
      },
    },
  };

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

  // Ejemplo de eventos para el calendario
  useEffect(() => {
    const fetchEvents = () => {
      setEvents([
        {
          title: "📊 Evaluación",
          start: moment().toDate(),
          end: moment().add(1, "hour").toDate(),
        },
        {
          title: "👥 Reunión con Profesionales",
          start: moment().add(2, "days").toDate(),
          end: moment().add(2, "days").add(1, "hour").toDate(),
        },
      ]);
    };
    fetchEvents();
  }, []);

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
      }}
    >
      <h1 className="text-center" style={{ color: "#ff7f0e" }}>
        Dashboard de Administrador 💼
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {/* Tabla de profesionales */}
        {/* Tabla de profesionales */}
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

        {/* Gráfico */}
        <div style={{ flex: "2", width: "40%", minWidth: "300px" }}>
          <h2 style={{ color: "#ff7f0e" }}>
            📊 Gráfico de Usuarios Registrados
          </h2>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {/* Calendario */}
        <div style={{ flex: "1", marginTop: "50px" }}>
          <h2 style={{ color: "#ff7f0e" }}>📅 Calendario</h2>
          <div style={{ height: "300px", backgroundColor: "#fff" }}>
            <Calendar
              events={events}
              startAccessor="start"
              endAccessor="end"
              localizer={localizer} // Agregar el localizer aquí
              style={{
                backgroundColor: "#333",
                borderRadius: "8px",
                color: "white",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>
        </div>
        <div style={{ flex: "1", width: "40%", minWidth: "300px" }}>
          <h2 style={{ color: "#ff7f0e" }}>⚠️ Usuarios con Bajo Rendimiento</h2>
          <Bar data={lowPerformanceData} options={lowPerformanceOptions} />
        </div>
      </div>
    </div>
  );
};

export default InicioAdmin;

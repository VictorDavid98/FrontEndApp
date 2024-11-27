import React, { useEffect, useState } from "react";
import {
  getProfesionalesAdmin,
  getUserAdmin,
} from "../../services/PollService";
import { Bar } from "react-chartjs-2";
import { Calendar, momentLocalizer } from "react-big-calendar"; // Asegúrate de importar momentLocalizer
import "react-big-calendar/lib/css/react-big-calendar.css";
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
        paddingTop: "90px",
        padding: "20px",
        backgroundColor: "#121212",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#ff7f0e" }}>Dashboard de Administrador 💼</h1>

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {/* Tabla de profesionales */}
        <div
          style={{
            flex: "2",
            minWidth: "300px",
            marginRight: "20px",
          }}
        >
          <h2 style={{ color: "#ff7f0e" }}>👨‍⚖️ Profesionales</h2>
          <table
            style={{
              width: "80%",
              borderCollapse: "collapse",
              backgroundColor: "#1f1f1f",
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

      {/* Calendario */}
      <div style={{ marginTop: "50px", width: "50%" }}>
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
    </div>
  );
};

export default InicioAdmin;

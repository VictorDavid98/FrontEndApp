import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar"; // Asegúrate de importar momentLocalizer
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

// Configurar el localizer
const localizer = momentLocalizer(moment);

const CalendarioAdmin: React.FC = () => {
  const [loading, setLoading] = useState(true); // Estado de carga
  const [events, setEvents] = useState<any[]>([]); // Estado para los eventos del calendario

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
  );
};

export default CalendarioAdmin;

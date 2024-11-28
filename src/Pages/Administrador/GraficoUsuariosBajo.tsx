import React, { useState } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoUsuariosBajo: React.FC = () => {
  const [loading, setLoading] = useState(true); // Estado de carga

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

  if (loading) {
    return <p>Cargando datos... 🕒</p>;
  }

  return (
    <div style={{ flex: "1", width: "40%", minWidth: "300px" }}>
      <h2 style={{ color: "#ff7f0e" }}>⚠️ Usuarios con Bajo Rendimiento</h2>
      <Bar data={lowPerformanceData} options={lowPerformanceOptions} />
    </div>
  );
};

export default GraficoUsuariosBajo;

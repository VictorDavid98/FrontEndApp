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

// Registrar los componentes del gráfico
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoUsuariosRegistradosMes: React.FC = () => {
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
      <div>
        <h2 style={{ color: "#ff7f0e", textAlign: "center" }}>
          📊 Gráfico de Usuarios Registrados
        </h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default GraficoUsuariosRegistradosMes;

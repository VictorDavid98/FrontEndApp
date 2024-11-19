import { FC } from "react";
import { ChartType, PollChartData } from "../../types";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  ChartData,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Registrar elementos y plugins necesarios
Chart.register(
  ArcElement, // Necesario para gráficos de tipo "Pie"
  BarElement, // Necesario para gráficos de tipo "Bar"
  Tooltip, // Mostrar información al pasar el mouse
  Legend, // Leyendas en los gráficos
  CategoryScale, // Escala de categorías (ejes X/Y)
  LinearScale, // Escala lineal (para barras)
  ChartDataLabels // Plugin de etiquetas
);

interface ResultsChartProps {
  chartData: PollChartData;
  chartType: ChartType;
}

const datalabels = {
  color: "#fff",
  font: {
    size: 16,
  },
  formatter: (value: number, context: any) => {
    const total = context.dataset.data.reduce(
      (a: number, b: number) => a + b,
      0
    );
    return Math.round((100 / total) * value) + "%";
  },
};

const pieOptions = {
  plugins: {
    datalabels,
  },
};

const barOptions = {
  scales: {
    y: {
      ticks: {
        precision: 0,
      },
    },
  },
  plugins: {
    datalabels: { ...datalabels, font: { size: 13 } },
    legend: {
      display: false,
    },
  },
};

const ResultsChart: FC<ResultsChartProps> = ({ chartData, chartType }) => {
  return (
    <div className="mb-5">
      <div className="chart-container">
        <h6>{chartData.title}</h6>
        {chartType === "PIE" ? (
          <Pie
            options={pieOptions}
            data={chartData.data as ChartData<"pie", number[], unknown>}
          />
        ) : (
          <Bar
            options={barOptions}
            data={chartData.data as ChartData<"bar", number[], unknown>}
          />
        )}
      </div>
    </div>
  );
};

export default ResultsChart;

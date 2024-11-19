import { FC } from "react";
import { ChartType, PollChartData } from "../../types";
import { Bar, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, ChartData } from "chart.js";
Chart.register(ChartDataLabels);

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
          ></Pie>
        ) : (
          <Bar
            options={barOptions}
            data={chartData.data as ChartData<"bar", number[], unknown>}
          ></Bar>
        )}
      </div>
    </div>
  );
};

export default ResultsChart;

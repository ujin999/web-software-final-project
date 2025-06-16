import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



const AreaLineChart = ({visitors}) => {
  const labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

const data = {
  labels,
  datasets: [
    {
      label: "방문자수",
      data: visitors,
      fill: true,
      borderColor: "#3b82f6",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(147, 197, 253, 0.6)");
        gradient.addColorStop(1, "rgba(191, 219, 254, 0.2)");
        return gradient;
      },
      tension: 0.4,
      pointRadius: 4,
      pointBackgroundColor: "#2563eb",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          size: 14,
          family: "'Segoe UI', sans-serif",
        },
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "일일 방문자 수",
      align: "start",
      font: {
        size: 15,
        weight: "bold",
        family: "'Segoe UI', sans-serif",
      },
      padding: {
        bottom: 35,
      },
      color: "#222",
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#333",
      bodyColor: "#666",
      borderColor: "#ddd",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#444",
        font: {
          family: "'Segoe UI', sans-serif",
        },
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.05)",
      },
      ticks: {
        color: "#444",
        font: {
          family: "'Segoe UI', sans-serif",
        },
      },
    },
  },
};
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ position: "relative", height: "400px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default AreaLineChart;

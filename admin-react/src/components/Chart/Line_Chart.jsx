import { Line } from "react-chartjs-2";

const labels = ["Day 1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"];
const data = {
  labels,
  datasets: [
    {
      label: "Visitor",
      data: [6000, 7000, 7000, 7600, 10000, 12000, 13000],
      borderColor: "rgb(16, 29, 107)",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(18, 32, 138, 0.4)");
        gradient.addColorStop(1, "rgba(43, 87, 192, 0.31)");
        return gradient;
      },
      borderWidth: 2,
      fill: true,
      tension: 0,
      pointRadius: 0,
    },

  ],
};

const options = {
  responsive: true,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Visitor",
      align: "start", 
      padding: {
        bottom: 20,
      },
    },
  },
};

const AreaLineChart = () => {
  return (
    <div style={{ width: 800, height: 400 }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default AreaLineChart;
import React from "react";
import { Line } from "react-chartjs-2";
import ChartWrapper from "./ChartWrapper";

export default function LineChartV3({ labels, data }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "평균 체류 시간 (분)",
        data,
        fill: false,
        borderColor: "#1cc88a",
        tension: 0.3,
      },
    ],
  };

  return (
    <ChartWrapper title="평균 체류 시간">
      <Line data={chartData} />
    </ChartWrapper>
  );
}
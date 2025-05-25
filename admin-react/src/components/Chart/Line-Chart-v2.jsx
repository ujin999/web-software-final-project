import React from "react";
import { Bar } from "react-chartjs-2";
import ChartWrapper from "./ChartWrapper";

export default function LineChartV2({ labels, data }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "방문자 수",
        data,
        backgroundColor: "#4e73df",
      },
    ],
  };

  return (
    <ChartWrapper title="일일 방문자 수">
      <Bar data={chartData} />
    </ChartWrapper>
  );
}
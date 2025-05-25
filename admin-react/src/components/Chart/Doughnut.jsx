import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartWrapper from "./ChartWrapper";



export default function DoughnutChart({ labels, data }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "유입 경로 비율",
        data,
        backgroundColor: ["#36b9cc", "#f6c23e", "#4e73df", "#e74a3b"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartWrapper title="유입 경로 비율">
      <Doughnut data={chartData} />
    </ChartWrapper>
  );
}
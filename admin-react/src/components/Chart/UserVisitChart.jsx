import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';
import './UserVisitChart.css';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
);

const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00'];

const visitData = {
  '3days': [500, 900, 1100, 600, 500, 1200, 1800, 2200, 900, 1000, 1500, 2100, 2600, 2700, 2300, 1800, 1600, 2000, 3000, 2900, 2500, 2000, 1700, 1200],
  'yesterday': [800, 1200, 900, 400, 1000, 2000, 2300, 3000, 2700, 2600, 2500, 2400, 2300, 2200, 2100, 2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200],
  'today': [1000, 3300, 1800, 500, 1600, 3400, 2500, 3000, 550, 1800, 1300, 2000, 3000, 500, 2300, 500, 1000, 3600, 3000, 3400, 3400, 3100, 2000, 1500],
};

const UserVisitChart = () => {
  const [selectedDay, setSelectedDay] = useState('today');
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    // 방문자 수 총합 계산
    const sum = visitData[selectedDay].reduce((acc, cur) => acc + cur, 0);
    setTotalUsers(sum);
  }, [selectedDay]);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: '방문자 수',
        data: visitData[selectedDay],
        fill: false,
        borderColor: '#1890ff',
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#1890ff',
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y}명`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4000,
      },
    },
  };

  return (
    <div className="chart-container">
      <h2 className="chart-title">시간대별 유저 방문 추이</h2>
      <div className="chart-options">
        <button
          className={`option-btn ${selectedDay === '3days' ? 'active' : ''}`}
          onClick={() => setSelectedDay('3days')}
        >
          3 Days ago
        </button>
        <button
          className={`option-btn ${selectedDay === 'yesterday' ? 'active' : ''}`}
          onClick={() => setSelectedDay('yesterday')}
        >
          Yesterday
        </button>
        <button
          className={`option-btn ${selectedDay === 'today' ? 'active' : ''}`}
          onClick={() => setSelectedDay('today')}
        >
          Today
        </button>
      </div>
      <div className="total-count">
        <div className="number">{totalUsers.toLocaleString()}</div>
        <div className="label">총 누적 고객수</div>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default UserVisitChart;

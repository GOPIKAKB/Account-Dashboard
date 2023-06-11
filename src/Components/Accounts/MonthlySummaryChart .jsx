import React from 'react';
import { Bar } from 'react-chartjs-2';

const MonthlySummaryChart = ({ transactions }) => {
  // Prepare data for the chart
  const data = {
    labels: ['Aug', 'Sep', 'Dec', 'Nov'],
    datasets: [
      {
        label: 'Debit',
        data: [25000, 65000, 5000, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Customize the bar color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Credit',
        data: [0, 0, 25000, 1200],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Customize the bar color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Define chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default MonthlySummaryChart;

// SpendAnalysisChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const SpendAnalysisChart = () => {
  const data = {
    labels: ['Marketing', 'Operations', 'R&D', 'Others'],
    datasets: [
      {
        label: 'Spend Analysis',
        data: [40, 25, 20, 15],
        backgroundColor: ['#7b1fa2', '#4a148c', '#ce93d8', '#f3e5f5'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="spend-analysis-chart">
      <Doughnut data={data} options={{ responsive: true }} />
    </div>
  );
};

export default SpendAnalysisChart;

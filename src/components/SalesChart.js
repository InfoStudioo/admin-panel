import React, { useRef, useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const SalesChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Sales This Month',
            data: [100, 250, 150, 300],
            backgroundColor: 'rgba(128, 0, 128, 0.7)', // Purple
          },
          {
            label: 'Sales Last Month',
            data: [80, 200, 120, 280],
            backgroundColor: 'rgba(211, 150, 255, 0.7)', // Light Purple
          },
          {
            label: 'Sales Two Months Ago',
            data: [70, 180, 130, 260],
            backgroundColor: 'rgba(75, 0, 130, 0.7)', // Darker Purple
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesChart;

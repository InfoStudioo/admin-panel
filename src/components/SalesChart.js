import React, { useRef, useEffect , useState } from 'react';
import { Chart } from 'chart.js/auto';
import { fetchSalesData } from '../api/api';


const SalesChart = () => {
  const chartRef = useRef(null);
  let chartInstance = useRef(null);

  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSalesData();
      setSalesData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {

    if (!salesData.length) return;      

    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
     
    }

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const lastMonthDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    const lastMonth = lastMonthDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const twoMonthsAgoDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    const twoMonthsAgo = twoMonthsAgoDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();


     // Get the current week of the month
     const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
     const pastDays = Math.floor((currentDate - firstDayOfMonth) / (1000 * 60 * 60 * 24));
     const currentWeekNumber = Math.ceil((pastDays + 1) / 7); // Get week number dynamically

     const weeks = [1, 2, 3, 4];

    const filterData = (month, weekLimit = 4) => {
      return weeks.slice(0, weekLimit).map(week => {
        const salesEntry = salesData.find(entry => entry.week_number === week && entry.month_name.toUpperCase() === month);
        return salesEntry ? parseFloat(salesEntry.sales_amount) : 0;

      });


    };

    const currentMonthData = filterData(currentMonth, currentWeekNumber);
    const lastMonthData = filterData(lastMonth);
    const twoMonthsAgoData = filterData(twoMonthsAgo);


     
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: `Sales in ${currentMonth}`,
            data: currentMonthData,
            backgroundColor: 'rgba(128, 0, 128, 0.7)', // Purple
          },
          {
            label: `Sales in ${lastMonth}`,
            data: lastMonthData,
            backgroundColor: 'rgba(211, 150, 255, 0.7)', // Light Purple
          },
          {
            label: `Sales in ${twoMonthsAgo}`,
            data: twoMonthsAgoData,
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
  }, [salesData]);

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default SalesChart;

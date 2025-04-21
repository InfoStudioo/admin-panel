// SpendAnalysisChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering necessary Chart.js elements
ChartJS.register(ArcElement, Tooltip, Legend);

const SpendAnalysisChart = ({ spendData, setFilter}) => {


  // Step 1: Aggregate amounts by category
  const aggregatedData = spendData.reduce((acc, item) => {
    const category = item.category;

    const amount = parseFloat(item.amount_spent);

   if( acc[category] ){

    acc[category] += amount;
   }else {
   
    acc[category] = amount;

  }

  return acc;

  }, {});


  // Step 2: Extract labels and values
  const labels = Object.keys(aggregatedData);
  const values = Object.values(aggregatedData);
  

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  
  
// Step 3: Define chart data
  const data = {
    labels,
    datasets: [
      {
        label: 'Spend Analysis',
        data: values,
        backgroundColor: ['#7b1fa2', '#4a148c', '#ce93d8', '#f3e5f5', '#ba68c8'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="spend-analysis-chart" style={{
      backgroundColor: '#ede7f6',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: '#4a148c', margin: 0 }}>Spend Analysis</h3>
        <div>
          <select 
            id="filter" 
            onChange={handleFilterChange} 
            defaultValue="month"
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
              outline: 'none'
            }}
          >
            <option value="month">This Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div style={{ maxWidth: '100%', height: 'auto' }}>
        <Doughnut data={data} options={{ 
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#4a148c',
                font: {
                  size: 12,
                  weight: 'bold'
                }
              }
            }
          }
        }} />
      </div>
    </div>
  );
};

export default SpendAnalysisChart; 
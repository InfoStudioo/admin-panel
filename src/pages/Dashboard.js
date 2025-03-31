import React, {useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import SalesChart from '../components/SalesChart';
import SpendAnalysisChart from '../components/SpendAnalysisChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faCalendarDay, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { fetchTransactions } from '../api/api';



const Dashboard = () => {

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="dashboard-content">
      {/* Overview Section */}
      <div className="overview-section">
        <h2 className="overview-title">Overview</h2>
        
      </div>

      {/* Dashboard Boxes */}
      <div className="dashboard-boxes">
        <div className="box total-sell">
          <h3><FontAwesomeIcon icon={faDollarSign} /> Total Sell</h3>
          <p>578k</p>
        </div>
        <div className="box month-sell">
          <h3><FontAwesomeIcon icon={faChartLine} /> This Month Sell</h3>
          <p>89k</p>
        </div>
        <div className="box today-sell">
          <h3><FontAwesomeIcon icon={faCalendarDay} /> Today's Sell</h3>
          <p>11k</p>
        </div>
        <div className="box upgrade-box">
          <h3><FontAwesomeIcon icon={faArrowUp} /> Upgrade to Premium</h3>
          <p>$4/month</p>
          <button className="upgrade-button">Upgrade Now</button>
        </div>
      </div>

     {/* Charts Section */}
     <div className="charts-container">
        <div className="sales-chart-container">
          <SalesChart />
        </div>
        <div className="spend-analysis-container">
          <SpendAnalysisChart />
        </div>
      </div>

        {/* Transaction List */}
      <div className="transaction-list-container">
        <h3>Transaction List</h3>
        <table className="transaction-list">
          <thead>
            <tr>
              <th>Code</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Tax</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.code}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.tax}</td>
                <td>{transaction.total_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
    </div>

    
  );
};

export default Dashboard;

import React, {useState, useEffect} from 'react';
import '../styles/Dashboard.css';
import SalesChart from '../components/SalesChart';
import SpendAnalysisChart from '../components/SpendAnalysisChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faChartLine, faCalendarDay, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { fetchTransactions, fetchSpendData , fetchSalesSummary} from '../api/api';



const Dashboard = () => {

  const [transactions, setTransactions] = useState([]);
  const [spendData, setSpendData] = useState([]);
  const[filter, setFilter] = useState('month');

  const [totalSell, setTotalSell] = useState(0);
  const [thisMonthSell, setThisMonthSell] = useState(0);
  const [todaySell, setTodaySell] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);

         // Fetch spend data based on default filter 'month'
       const spendDataResponse = await fetchSpendData(filter);
       setSpendData(spendDataResponse.data);

       const salesSummary = await fetchSalesSummary();
       setTotalSell(salesSummary.totalSell);
        setThisMonthSell(salesSummary.thisMonthSell);
        setTodaySell(salesSummary.currentWeekSell);
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
      }
    };
  
    fetchData();
  }, [filter]);  // Fetch data whenever filter changes

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
          <p>${parseFloat(totalSell).toLocaleString()}</p>
        </div>
        <div className="box month-sell">
          <h3><FontAwesomeIcon icon={faChartLine} /> This Month Sell</h3>
          <p>${parseFloat(thisMonthSell).toLocaleString()}</p>
        </div>
        <div className="box today-sell">
          <h3><FontAwesomeIcon icon={faCalendarDay} /> Today's Sell</h3>
          <p>${parseFloat(todaySell).toLocaleString()}</p>
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
          <SpendAnalysisChart spendData={spendData} setFilter={setFilter} />
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
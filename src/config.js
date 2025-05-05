const API_BASE_URL = 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  
    LOGIN: `${API_BASE_URL}/user_login`,

    LANDTODASHBOARD: `${API_BASE_URL}/admin_dashboard`,

   GETTRANSACTIONS: `${API_BASE_URL}/transactions`,

   GETSALESDATA: `${API_BASE_URL}/get_sales_data`,

   GETSPENDDATA: `${API_BASE_URL}/get_spend_data`,

   GETSALESSUMMARY: `${API_BASE_URL}/get_sales_summary`,
}


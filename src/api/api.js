import axios from 'axios';
import { jwtDecode} from 'jwt-decode';
import { API_ENDPOINTS } from '../config';


export const loginUser = async(identifier, password ) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

    try{

        const response = await axios.post(API_ENDPOINTS.LOGIN, {identifier, password});

        localStorage.setItem("token", response.data.token);
         localStorage.setItem("user", JSON.stringify(response.data.user));

         
          return response.data;  

    }
    catch(error){

        throw error.response?.data?.message || 'Login failed';
    }

};




export const handleLoginToDashboard = async (navigate, setError, setLoading) => {
  setLoading(true);
  setError(null);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));


  if (!token || !user) {
    setError("Session expired. Please log in again.");
    navigate("/loginpage");
    return;
  }


  try {
    

    // Send token in the Authorization header
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(
      API_ENDPOINTS.LANDTODASHBOARD,
      { userId: user.id }, // Only send userId in body
      {
        headers
      }
    );

   
    // ✅ Store new token in localStorage
    localStorage.setItem("token", response.data.tokennew);
    localStorage.setItem("user", JSON.stringify(response.data.user));
   

    navigate('/adminpanel/dashboard',   { replace: true });

  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong!");
  } finally {
    setLoading(false);
  }
};


export const fetchTransactions = async() => {
  try{

     // Retrieve the JWT token 
     const token = localStorage.getItem('token');
     const user = JSON.parse(localStorage.getItem("user"));
  

     if (!token ) {
     
      handleSessionExpired();
    
      return[];
    }

    const decodedToken = jwtDecode(token);

    const currentTime = Date.now() / 1000;
    

    if (decodedToken.exp < currentTime) {
      console.error('Session Expired: JWT token has expired');
      
      handleSessionExpired();
      return[];
    }

    
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(`${API_ENDPOINTS.GETTRANSACTIONS}?userId=${user.id}`,
      {
        headers
      }
       );
 
       return response.data;

  }catch (error) {
    console.error('Error fetching transactions:', error.message);

    // If API explicitly returns 401, handle session expiration
    if (error.response && error.response.status === 401){

      handleSessionExpired();

    }

   return [];
   
  }

}




// Function to handle session expiration (redirect and disable back button)
const handleSessionExpired = () => {


  alert('Session expired. Please log in again.');
  


  // Clear token from localStorage
  localStorage.removeItem('jwtToken');
  localStorage.removeItem('user');

  // Redirect to login page
  window.location.href = '/loginpage';


  setTimeout( () => {
    // Reset the browser history to only contain the login page
    window.history.replaceState(null, null, '/loginpage' );
    window.history.pushState(null, null, '/loginpage');

    window.onpopstate = () => {
      window.history.pushState(null, null, '/loginpage');
    };

  }, 100);


  
};
import axios from 'axios';
import { API_ENDPOINTS } from '../config';
import { handleSessionExpired , checkTokenandUSer, checkTokenExpiry, getAuthHeaders, getTokenAndUser} from '../utils/util';

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

  checkTokenandUSer();

  const { user } = getTokenAndUser();

  try {
    

    // Send token in the Authorization header
    const headers = getAuthHeaders();

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

    checkTokenandUSer();

    checkTokenExpiry();
    
    const {user} = getTokenAndUser();
    const headers = getAuthHeaders();
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


export const fetchSalesData = async() => {

  try{

    checkTokenandUSer();

    checkTokenExpiry();


    const {user} = getTokenAndUser();

    const headers = getAuthHeaders()
    ;
    const response = await axios.get(`${API_ENDPOINTS.GETSALESDATA}?userId=${user.id}`,
      {
        headers
      }
       );
 
       console.log(response.data);
       return response.data;
    
  }
  catch(error){

    console.error('Error fetching transactions:', error.message);

     // If API explicitly returns 401, handle session expiration
     if (error.response && error.response.status === 401){

     handleSessionExpired();

    }

    return [];

  }

} ;



export const fetchSpendData = async (filter = 'month') => {

  try {

   checkTokenandUSer();
   checkTokenExpiry();

   const { user } = getTokenAndUser();

   const headers = getAuthHeaders();

   const response = await axios.get(
    `${API_ENDPOINTS.GETSPENDDATA}?filter=${filter}&userId=${user.id}`,
    {headers}
   
  );

return response.data;
  }catch (error) {
    console.error('Error fetching spend data:', error.message);

    if (error.response && error.response.status === 401 ) {
      handleSessionExpired();
    }

    return { data: []};
     
  }

};

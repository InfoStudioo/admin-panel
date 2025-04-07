import { jwtDecode} from 'jwt-decode';

// Function to handle session expiration (redirect and disable back button)
export const handleSessionExpired = () => {


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

  
  export const checkTokenandUSer = () => {


    const { token, user } = getTokenAndUser();
  
 

    if (!token || !user ) {
    
     handleSessionExpired();
   
     return[];
   }
   
  };


  export const checkTokenExpiry = () => {

    const {token} = getTokenAndUser();
    
 
    const decodedToken = jwtDecode(token);
    
        const currentTime = Date.now() / 1000;
        
    
        if (decodedToken.exp < currentTime) {
          console.error('Session Expired: JWT token has expired');
          
          handleSessionExpired();
          return[];
        }
    

  } 


  export const getTokenAndUser = () => {

    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem("user"));

    return {token, user };
  };


  // Function to get authorization headers

  export const getAuthHeaders = () => {

    const {token} = getTokenAndUser();

    if(!token) {
      handleSessionExpired();
      return [];
    }

    return {

      Authorization: `Bearer ${token}`, 
    };
  };
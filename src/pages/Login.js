import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleLogin = async (event) => {
    event.preventDefault();
    // Implement authentication logic here
    
    try{

      const data = await loginUser(identifier, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
       // Redirect to captcha after successful login
    navigate('/captcha_admin',   { replace: true });

    }catch(error){

      setError(error);
    }

   
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username or Email" 
        value = {identifier}
        onChange={(e) => setIdentifier(e.target.value)}
        required />
        <input type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
         required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
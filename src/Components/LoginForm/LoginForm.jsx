
import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Your login logic here (e.g., API call, authentication)
    // For demonstration purposes, let's assume validation logic
    if (username.trim() === 'divya' && password.trim() === '123' || username.trim() === 'shri' && password.trim() === '456' || username.trim() === 'arthi' && password.trim() === '022' || 
    username.trim() === 'divya' && password.trim() === '040' ) {
      // Successful login
      alert('Login successful');
      setNotification(''); // Clear any previous notifications
      nav('/home');
    } else {
      // Invalid login
      alert('Invalid username or password');
      setNotification('Invalid username or password');
    }
  };

  return (
    <div className="login-container ">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>

        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {notification && <div className="notification">{notification}</div>}

        <div>
          <button type="submit">Login</button>
        </div>
        <br />
        <div>
          
          <p>Don't have an account? <a className='register'  onClick={() => nav('/register')}>Register</a></p>
        </div>
        <br/>
        <div>
         <a className='register'  onClick={() => nav('/password')}>Forgot Password</a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
//Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register</a>


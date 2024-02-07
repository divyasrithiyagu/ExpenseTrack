
import React, { useState } from 'react';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const nav = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Validate email syntax
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email syntax');
      return; // Do not proceed with registration if email is invalid
    }
    if(confirmPassword!==password)
    {
      alert(`password does not match`);
      return;
    }

    // Your registration logic here (e.g., API call, creating a new user)

    // For demonstration purposes, let's just log the entered details
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Assuming registration is successful, navigate to the home page
    // Replace this with your actual registration logic
    // For example, you might make an API call to register the user
    // and navigate upon successful response
    nav('/home');
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>

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
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="input-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {notification && <div className="notification">{notification}</div>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;


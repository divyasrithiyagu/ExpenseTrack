
import React, { useState } from 'react';
import './ForgotPassword.css';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Invalid email address');
      return;
    }
    

    // Reset error and navigate if email is valid
    setError('');
    navigate('/otp');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>

        <div className="input-box">
          <input
            type='email'
            placeholder='Enter Registered Email'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type='submit'>Reset My Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;

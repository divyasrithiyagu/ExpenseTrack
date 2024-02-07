
import React, { useState } from 'react';
import './Enterotp.css';
import { useNavigate } from 'react-router-dom';

const Enterotp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Reset error and navigate if passwords match
    setError('');
    navigate('/');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder='OTP'
            value={otp}
            onChange={handleOtpChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder='Enter New Password'
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Enterotp;

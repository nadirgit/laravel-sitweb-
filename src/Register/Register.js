// Register.js
import React from 'react';
import './Register.css'; // Import the CSS file

const Register = ({ onRegister }) => {
  const handleRegister = (event) => {
    event.preventDefault();
    // Add your registration logic here
    onRegister();
  };

  return (
    <div id="register-container">
      <form id="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <label htmlFor="register-username">Username:</label>
        <input type="text" id="register-username" name="register-username" required />
        <label htmlFor="register-password">Password:</label>
        <input type="password" id="register-password" name="register-password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

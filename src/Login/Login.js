// Login.js
import React from 'react';
import './Login.css'; // Import the CSS file

const Login = ({ onLogin }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // Add your login logic here
    onLogin();
  };

  return (
    <div id="login-container">
      <form id="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

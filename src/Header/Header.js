import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import Login from '../Login/Login'; // Update the path
import Register from '../Register/Register';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#" onClick={handleLoginClick}>
        Login
      </a>
      <a href="#" onClick={handleRegisterClick}>
        Register
      </a>
      <div id="message-icon" onClick={() => window.location.href = 'html3.html'}>
        📬
      </div>

      {showLogin && <Login onClose={handleClose} />}
      {showRegister && <Register onClose={handleClose} />}
    </div>
  );
};

export default Header;

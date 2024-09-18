import React, { useState, useEffect } from 'react';
import LoginPage from './Login/Login';
import Register from './Register/Register';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, setAuthState] = useState('login'); // default to 'login'

  useEffect(() => {
    // Simulate checking if the user is logged in
    const userLoggedIn = checkLoginStatus(); // replace with actual login status check

    setIsLoggedIn(userLoggedIn);
    if (userLoggedIn) {
      setAuthState('register');
    } else {
      setAuthState('login');
    }
  }, []);

  const checkLoginStatus = () => {
    // Logic to check if the user is logged in
    // Replace this with actual authentication check (e.g., from local storage or API)
    return false; // or true if the user is logged in
  };

  return (
    <div>
      {authState === 'login' && <LoginPage />}
      {authState === 'register' && <Register/>}
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Retrieve existing users from local storage or initialize to empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];

    // Store updated array back in local storage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redirect to home page after registration
    navigate('/');
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;

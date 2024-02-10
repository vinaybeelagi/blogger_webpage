// Home.js
import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [visibility, setVisibility] = useState('public');

  const handleVisibilityChange = (vis) => {
    setVisibility(vis);
  };

  return (
    <div>
      <header>
        <h1>Your Blog Name</h1>
        <nav>
          <ul>
            <li><button onClick={() => console.log("Register clicked")}>Register</button></li>
            <li><button onClick={() => console.log("Login clicked")}>Login</button></li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h2>Content Visibility</h2>
        <div>
          <button onClick={() => handleVisibilityChange('public')}>Public</button>
          <button onClick={() => handleVisibilityChange('private')}>Private</button>
        </div>
      </div>
      <div className="container">
        <h2>Content</h2>
        <p>No content to display.</p>
      </div>
    </div>
  );
};

export default Home;

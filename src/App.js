// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage'; // Update the import

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Update the route */}
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

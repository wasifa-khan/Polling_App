// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CreatePoll from './pages/CreatePoll';
import PollDetails from './pages/PollDetails';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div>
        {isAuthenticated ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Routes>
              <Route path="/create" element={<CreatePoll />} />
              <Route path="/poll/:id" element={<PollDetails />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;

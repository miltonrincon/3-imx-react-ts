import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
//import { Redirect  } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import "./App.scss";
function App() {
  const reload = () => window.location.reload();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy-policy" element={<Navigate replace={true} to="/privacy-policy.html" />}/> 
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

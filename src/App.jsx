import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessListings from './pages/BusinessListings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category" element={<BusinessListings />} />
        <Route path="/:category/:treatment" element={<BusinessListings />} />
      </Routes>
    </Router>
  );
}

export default App;

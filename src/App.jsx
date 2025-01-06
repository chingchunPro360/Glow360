import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessListings from './pages/BusinessListings';
import BusinessProfile from './pages/BusinessProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<BusinessListings />} />
        <Route path="/business/:id" element={<BusinessProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

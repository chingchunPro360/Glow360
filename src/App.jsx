import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessListings from './pages/BusinessListings';
import BusinessProfile from './pages/BusinessProfile';
import ServiceCityListings from './pages/ServiceCityListings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listings" element={<BusinessListings />} />
        <Route path="/business/:id" element={<BusinessProfile />} />
        <Route path="/service/:service" element={<ServiceCityListings />} />
        <Route path="/service/:service/:city" element={<ServiceCityListings />} />
      </Routes>
    </Router>
  );
}

export default App;

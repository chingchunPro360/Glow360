import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessListings from './pages/BusinessListings';
import BusinessProfile from './pages/BusinessProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query" element={<BusinessListings />} />
        <Route path="/all/:city" element={<BusinessListings />} />
        <Route path="/:category" element={<BusinessListings />} />
        <Route path="/:category/:city" element={<BusinessListings />} />
        <Route path="/:category/:city/:district" element={<BusinessListings />} />
        <Route path="/business/:id" element={<BusinessProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

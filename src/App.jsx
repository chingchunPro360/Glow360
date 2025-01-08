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
        
        {/* 類別頁面 */}
        <Route path="/:category" element={<BusinessListings />} />
        
        {/* 類別+城市頁面 */}
        <Route path="/:category/:city" element={<BusinessListings />} />
        
        {/* 類別+城市+區域頁面 */}
        <Route path="/:category/:city/:district" element={<BusinessListings />} />
        
        {/* 商家詳情頁面 */}
        <Route path="/business/:id" element={<BusinessProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

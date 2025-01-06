import React, { useState } from 'react';
import { FaStar, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import SearchBar from '../SearchBar';

export default function MapView({ businesses, onBusinessClick }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  return (
    <div className="relative h-[calc(100vh-200px)] bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Search Bar - Centered with padding */}
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-center px-4">
        <SearchBar />
      </div>

      {/* Rest of the MapView component... */}
      {/* ... */}
    </div>
  );
}

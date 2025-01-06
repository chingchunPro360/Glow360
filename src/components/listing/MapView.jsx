import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaStar, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import SearchBar from '../SearchBar';

export default function MapView({ businesses, onBusinessClick }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (business) => {
    setSelectedBusiness(business);
    onBusinessClick?.(business);
    navigate(`/business/${business.id}`);
  };

  return (
    <div className="relative h-[calc(100vh-200px)] bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Search Bar */}
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-center px-4">
        <SearchBar />
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-gray-500">
          Map view is not available in the preview environment
        </div>
      </div>

      {/* Business Preview Cards */}
      <div className="absolute bottom-4 left-4 right-4 overflow-x-auto">
        <div className="flex gap-4 pb-4 scrollbar-hide">
          {businesses.map((business) => (
            <div
              key={business.id}
              onClick={() => handleCardClick(business)}
              className="bg-white rounded-lg shadow-md p-4 min-w-[300px] cursor-pointer 
                       hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-4">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 truncate hover:text-blue-600">
                    {business.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <FaStar className="text-yellow-400 w-4 h-4" />
                    <span className="ml-1 text-sm">{business.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">
                      ({business.reviewCount})
                    </span>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <FaMapMarkerAlt className="mr-1" />
                    {business.distance}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">{business.category}</span>
                    <div className="flex">
                      {Array(business.price.length).fill().map((_, i) => (
                        <FaDollarSign
                          key={i}
                          className="text-green-600 w-3 h-3"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

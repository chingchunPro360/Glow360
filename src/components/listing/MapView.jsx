import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaDollarSign, FaMapMarkerAlt, FaTimes, FaDirections } from 'react-icons/fa';

// ... 保留原有的 calculateDistance 和 groupBusinessesByGrid 函數 ...

export default function MapView({ businesses, onBusinessClick }) {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [hoveredBusiness, setHoveredBusiness] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapBounds, setMapBounds] = useState({
    center: { lat: 0, lng: 0 },
    zoom: 12
  });

  // ... 保留原有的 useEffect 和 getDistanceFromUser 函數 ...

  return (
    <div className="relative h-[calc(100vh-200px)] bg-gray-100 rounded-lg overflow-hidden">
      {/* Map Placeholder */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-500">Map view is not available in the preview environment</div>
      </div>

      {/* Business Markers */}
      <div className="absolute inset-0 pointer-events-none">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
            style={{
              left: `${(business.coordinates.longitude + 180) * (100 / 360)}%`,
              top: `${(90 - business.coordinates.latitude) * (100 / 180)}%`,
              zIndex: hoveredBusiness?.id === business.id || selectedBusiness?.id === business.id ? 2 : 1
            }}
          >
            {/* Marker */}
            <button
              className={`group relative transition-all duration-300 ease-in-out
                ${hoveredBusiness?.id === business.id || selectedBusiness?.id === business.id
                  ? 'scale-125 z-10'
                  : 'scale-100 hover:scale-110'}`}
              onMouseEnter={() => setHoveredBusiness(business)}
              onMouseLeave={() => setHoveredBusiness(null)}
              onClick={() => setSelectedBusiness(business)}
            >
              {/* Marker Icon */}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                transform transition-all duration-300
                ${hoveredBusiness?.id === business.id || selectedBusiness?.id === business.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-blue-600 shadow border-2 border-blue-600'}`}
              >
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>

              {/* Price Indicator */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full 
                flex items-center justify-center text-xs font-bold
                transition-all duration-300
                ${hoveredBusiness?.id === business.id || selectedBusiness?.id === business.id
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500 border border-green-500'}`}
              >
                {business.price}
              </div>

              {/* Hover Preview Card */}
              {hoveredBusiness?.id === business.id && !selectedBusiness && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
                  w-64 bg-white rounded-lg shadow-lg p-3 z-20 pointer-events-none
                  animate-fade-in">
                  <div className="flex gap-3">
                    <img
                      src={business.image}
                      alt={business.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900 line-clamp-1">{business.name}</h3>
                      <div className="flex items-center text-sm">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span>{business.rating}</span>
                        <span className="text-gray-500 ml-1">({business.reviewCount})</span>
                      </div>
                      <div className="text-sm text-gray-500 line-clamp-1">{business.category}</div>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Selected Business Detail Card */}
      {selectedBusiness && (
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-lg 
          transform transition-transform duration-300 ease-in-out animate-slide-up">
          <div className="relative max-w-3xl mx-auto p-4">
            {/* Close Button */}
            <button
              onClick={() => setSelectedBusiness(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 
                transition-colors duration-200"
            >
              <FaTimes className="w-5 h-5 text-gray-500" />
            </button>

            <div className="flex gap-4">
              {/* Business Image */}
              <img
                src={selectedBusiness.image}
                alt={selectedBusiness.name}
                className="w-32 h-32 object-cover rounded-lg shadow"
              />

              {/* Business Info */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {selectedBusiness.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{selectedBusiness.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({selectedBusiness.reviewCount} reviews)
                    </span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <span className="font-medium">{selectedBusiness.price}</span>
                  </div>
                </div>

                <div className="text-gray-600 mb-2">
                  {selectedBusiness.category} • {selectedBusiness.city}
                </div>

                {userLocation && (
                  <div className="flex items-center text-gray-500 text-sm">
                    <FaMapMarkerAlt className="mr-1" />
                    {getDistanceFromUser(selectedBusiness).toFixed(1)} km away
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4 border-t pt-4">
              <Link
                to={`/business/${selectedBusiness.id}`}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg
                  hover:bg-blue-700 transition-colors duration-200
                  flex items-center justify-center gap-2"
              >
                <span>View Details</span>
              </Link>
              
              <button
                onClick={() => {
                  console.log('Book now:', selectedBusiness.name);
                }}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg
                  hover:bg-green-700 transition-colors duration-200
                  flex items-center justify-center gap-2"
              >
                <span>Book Now</span>
              </button>

              <button
                onClick={() => {
                  console.log('Get directions to:', selectedBusiness.name);
                }}
                className="w-12 bg-gray-100 text-gray-600 rounded-lg
                  hover:bg-gray-200 transition-colors duration-200
                  flex items-center justify-center"
                title="Get Directions"
              >
                <FaDirections className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

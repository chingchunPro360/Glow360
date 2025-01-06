import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';

export default function BusinessCard({ business }) {
  if (!business) return null;

  const {
    id,
    name,
    image,
    rating,
    reviewCount,
    category,
    location,
    price,
    isOpen,
    distance
  } = business;

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&h=400';
  };

  const renderPriceRange = (priceStr = '') => {
    const priceLevel = (priceStr.match(/\$/g) || []).length;
    return Array(4)
      .fill()
      .map((_, index) => (
        <FaDollarSign
          key={index}
          className={`${
            index < priceLevel ? 'text-green-600' : 'text-gray-300'
          } text-sm`}
        />
      ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/business/${id}`} className="block">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex h-32">
            {/* Image */}
            <div className="w-32 h-full flex-shrink-0">
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={name}
                onError={handleImageError}
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 p-3 flex flex-col justify-between">
              <div>
                {/* Shop Name */}
                <h3 className="text-base font-semibold text-gray-900 truncate pr-2">
                  {name}
                </h3>
                
                {/* Rating and Reviews */}
                <div className="flex items-center mt-1">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 w-3 h-3" />
                    <span className="ml-1 text-sm">{rating}</span>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
                </div>
                
                {/* Location and Category */}
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <FaMapMarkerAlt className="mr-1 w-3 h-3" />
                  {distance}
                  <span className="mx-1">•</span>
                  {category}
                </div>
              </div>
              
              {/* Price and Open Status */}
              <div className="flex items-center justify-between">
                <div className="flex">
                  {renderPriceRange(price)}
                </div>
                <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                  isOpen 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {isOpen ? 'Open' : 'Closed'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            <img
              className="w-full h-48 object-cover"
              src={image}
              alt={name}
              onError={handleImageError}
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold truncate pr-2">{name}</h3>
              <span className={`flex-shrink-0 px-2 py-1 rounded-full text-sm ${
                isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {isOpen ? 'Open' : 'Closed'}
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center">
                <FaStar className="text-yellow-400" />
                <span className="ml-1">{rating}</span>
              </div>
              <span className="text-gray-500 ml-1">({reviewCount})</span>
              <span className="mx-2">•</span>
              <div className="flex items-center text-gray-500">
                <FaMapMarkerAlt className="mr-1" />
                {distance}
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <span className="text-sm text-gray-500">{category}</span>
              <div className="flex">{renderPriceRange(price)}</div>
            </div>
          </div>
        </div>
      </Link>
      
      {/* Book Now Button */}
      <div className="px-3 pb-3 md:px-4 md:pb-4">
        <div className="pt-3 md:pt-0 border-t md:border-t-0">
          <button
            onClick={(e) => {
              e.preventDefault();
              // TODO: 處理預約邏輯
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 
                     transition-colors text-sm md:text-base"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

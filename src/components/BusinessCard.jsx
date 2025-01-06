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
    description,
    category,
    location,
    price,
    isOpen,
    distance,
    services = []
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
          }`}
        />
      ));
  };

  return (
    <Link 
      to={`/business/${id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-w-3 aspect-h-2">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={name}
          onError={handleImageError}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className={`px-2 py-1 rounded text-sm ${
            isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
        
        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="ml-1">{rating}</span>
          </div>
          <span className="text-gray-500 ml-1">({reviewCount} reviews)</span>
          <span className="mx-2">•</span>
          <div className="flex items-center text-gray-500">
            <FaMapMarkerAlt className="mr-1" />
            {distance}
          </div>
        </div>
        
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-500">{category}</span>
          <span className="mx-2">•</span>
          <div className="flex">{renderPriceRange(price)}</div>
        </div>
        
        <p className="text-gray-600 mt-2 text-sm line-clamp-2">{description}</p>
        
        {services.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

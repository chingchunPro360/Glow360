import React from 'react';
import { FaStar, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';

function BusinessCard({ business }) {
  const { name, image, rating, reviewCount, category, price, isOpen, distance, services } = business;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image Container */}
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            isOpen 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <FaStar className="text-yellow-400" />
            <span className="ml-1 font-medium">{rating}</span>
          </div>
          <span className="text-gray-500 ml-1">({reviewCount} reviews)</span>
        </div>

        <div className="flex items-center text-gray-500 mb-3">
          <FaMapMarkerAlt className="mr-1" />
          <span>{distance}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
        </div>

        {/* Services */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {services.slice(0, 3).map((service) => (
              <span 
                key={service}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
              >
                {service}
              </span>
            ))}
            {services.length > 3 && (
              <span className="px-2 py-1 text-gray-500 text-sm">
                +{services.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between pt-3 border-t">
          <div className="flex text-green-600">
            {[...Array(price.length)].map((_, i) => (
              <FaDollarSign key={i} />
            ))}
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium 
                           hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;

import React from 'react';
import { FaStar } from 'react-icons/fa';

function Filters({ filters, onChange }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>
      
      {/* Rating Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((rating) => (
            <label key={rating} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onChange({ ...filters, rating })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 flex items-center">
                {rating}+ <FaStar className="text-yellow-400 ml-1" />
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="flex flex-wrap gap-2">
          {['$', '$$', '$$$', '$$$$'].map((price) => (
            <button
              key={price}
              onClick={() => {
                const newPrices = filters.priceRange.includes(price)
                  ? filters.priceRange.filter(p => p !== price)
                  : [...filters.priceRange, price];
                onChange({ ...filters, priceRange: newPrices });
              }}
              className={`px-3 py-1 rounded ${
                filters.priceRange.includes(price)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      {/* Open Now Filter */}
      <div className="mb-6">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filters.openNow}
            onChange={(e) => onChange({ ...filters, openNow: e.target.checked })}
            className="rounded text-blue-600 focus:ring-blue-500"
          />
          <span className="ml-2">Open Now</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onChange({
          rating: null,
          priceRange: [],
          openNow: false
        })}
        className="w-full py-2 text-blue-600 hover:bg-blue-50 rounded"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export default Filters;

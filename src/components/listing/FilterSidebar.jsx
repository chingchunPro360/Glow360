import React from 'react';
import { FaStar } from 'react-icons/fa';
import { CATEGORIES } from '../../data/mockBusinesses';

const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

export default function FilterSidebar({ filters, onChange }) {
  const handleServiceTypeChange = (type) => {
    const newTypes = filters.serviceType.includes(type)
      ? filters.serviceType.filter(t => t !== type)
      : [...filters.serviceType, type];
    onChange({ ...filters, serviceType: newTypes });
  };

  const handlePriceRangeChange = (price) => {
    const newPrices = filters.priceRange.includes(price)
      ? filters.priceRange.filter(p => p !== price)
      : [...filters.priceRange, price];
    onChange({ ...filters, priceRange: newPrices });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      {/* Service Type */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Service Type</h4>
        <div className="space-y-2">
          {CATEGORIES.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.serviceType.includes(type)}
                onChange={() => handleServiceTypeChange(type)}
                className="rounded text-blue-600"
              />
              <span className="ml-2 text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Rating</h4>
        <div className="space-y-2">
          {[4, 3, 2].map((rating) => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                checked={filters.rating === rating}
                onChange={() => onChange({ ...filters, rating })}
                className="text-blue-600"
              />
              <span className="ml-2 flex items-center">
                {rating}+ <FaStar className="text-yellow-400 ml-1" />
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Price Range</h4>
        <div className="flex gap-2">
          {PRICE_RANGES.map((price) => (
            <button
              key={price}
              onClick={() => handlePriceRangeChange(price)}
              className={`px-3 py-1 rounded ${
                filters.priceRange.includes(price)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {price}
            </button>
          ))}
        </div>
      </div>

      {/* Open Now */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.openNow}
            onChange={(e) => onChange({ ...filters, openNow: e.target.checked })}
            className="rounded text-blue-600"
          />
          <span className="ml-2 text-gray-700">Open Now</span>
        </label>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onChange({
          serviceType: [],
          rating: null,
          priceRange: [],
          location: '',
          openNow: false
        })}
        className="w-full py-2 text-blue-600 hover:bg-blue-50 rounded"
      >
        Clear All Filters
      </button>
    </div>
  );
}

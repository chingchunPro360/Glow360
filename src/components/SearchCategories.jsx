import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COUNTRIES, CITY_SERVICES } from '../data';

export default function SearchCategories() {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Browse by City
        </h2>
        
        {/* Countries Scroll */}
        <div className="mb-6">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {COUNTRIES.map((country) => (
              <button
                key={country}
                className={`px-6 py-2 rounded-full whitespace-nowrap ${
                  selectedCountry === country
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCountry(country)}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Cities and Services */}
        <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide">
          {Object.entries(CITY_SERVICES[selectedCountry] || {}).map(([city, services]) => (
            <div key={city} className="min-w-[280px]">
              <h3 className="text-lg font-semibold mb-3">{city}</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to={`/listings?category=${encodeURIComponent(service)}&city=${encodeURIComponent(city)}`}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {service} in {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

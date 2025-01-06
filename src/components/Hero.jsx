import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const CATEGORIES = [
  'Hair Salon', 'Barbershop', 'Nail Salon', 'Spa', 'Massage',
  'Beauty Salon', 'Facial', 'Waxing', 'Makeup', 'Lashes'
];

export default function Hero() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/listings?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="relative h-[600px] -mt-16"> {/* Negative margin to compensate for header padding */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&h=1080"
          alt="Beauty services"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white text-center mb-4">
          Discover and book local beauty and wellness services
        </h1>
        <p className="text-xl text-white text-center mb-8">
          78,906 users booked today
        </p>
        
        {/* Search Bar - Centered */}
        <div id="hero-search" className="flex justify-center mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>
        
        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
          {CATEGORIES.map((category) => (
            <a
              key={category}
              href={`/listings?category=${encodeURIComponent(category)}`}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium hover:bg-gray-100 whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

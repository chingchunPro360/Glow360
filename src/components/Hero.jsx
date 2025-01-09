import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { CATEGORIES } from '../data/mockBusinesses';
import { formatUrlSegment } from '../utils/urlHelpers';

const Hero = () => {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search?q=${formatUrlSegment(query)}`);
  };

  return (
    <div className="relative h-[400px] md:h-[600px] -mt-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1920&h=1080"
          alt="Beauty services"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex flex-col items-center justify-center py-16">
          {/* Title and Subtitle */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Discover and book local beauty services
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              78,906 users booked today
            </p>
          </div>
          
          {/* Search Bar */}
          <div id="hero-search" className="w-full max-w-2xl mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Categories */}
          <div className="w-full max-w-4xl">
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
              {CATEGORIES.map((category) => (
                <Link
                  key={category}
                  to={`/${formatUrlSegment(category)}`}
                  className="flex-none px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full 
                           text-sm font-medium hover:bg-white whitespace-nowrap
                           transition-colors duration-200"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

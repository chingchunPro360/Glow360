import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Header({ showMap, setShowMap, showFilters, setShowFilters }) {
  const location = useLocation();
  const isListingsPage = location.pathname !== '/';

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Glow360</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center px-4">
            <SearchBar 
              showMap={showMap}
              setShowMap={setShowMap}
              showFilters={isListingsPage ? showFilters : undefined}
              setShowFilters={isListingsPage ? setShowFilters : undefined}
            />
          </div>

          {/* Right Section */}
          <div className="flex items-center">
            <Link 
              to="/account" 
              className="p-2.5 rounded-full hover:bg-gray-100"
              aria-label="User Account"
            >
              <FaUser className="h-5 w-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

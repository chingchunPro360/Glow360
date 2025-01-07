import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt } from 'react-icons/fa';
import SearchBar from './SearchBar';

export default function Header({ showMap, setShowMap, showFilters, setShowFilters }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isListingsPage = location.pathname === '/listings';
  const [showSearch, setShowSearch] = useState(true);

  const handleSearch = (query) => {
    navigate(`/listings?search=${encodeURIComponent(query)}`);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      const handleScroll = () => {
        const heroSearchBar = document.querySelector('#hero-search');
        if (!heroSearchBar) {
          setShowSearch(true);
          return;
        }

        const rect = heroSearchBar.getBoundingClientRect();
        setShowSearch(rect.bottom < 0);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      setShowSearch(true);
    }
  }, [location.pathname]);

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
            <div className={`w-full max-w-[640px] transition-all duration-300 ${
              showSearch ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <SearchBar 
                onSearch={handleSearch}
                showFilters={showFilters}
                setShowFilters={isListingsPage ? setShowFilters : undefined}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {isListingsPage && (
              <button
                onClick={() => setShowMap?.(!showMap)}
                className={`p-2.5 rounded-full transition-colors ${
                  showMap 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                aria-label={showMap ? 'Show list view' : 'Show map view'}
              >
                <FaMapMarkerAlt className="h-5 w-5" />
              </button>
            )}
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

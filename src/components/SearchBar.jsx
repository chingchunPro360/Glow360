import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes, FaMapMarkerAlt, FaList } from 'react-icons/fa';
import { CATEGORIES, MOCK_BUSINESSES } from '../data/mockBusinesses';
import { CITY_SERVICES } from '../data/mockLocations';
import { formatUrlSegment } from '../utils/urlHelpers';

const SearchBar = ({ onSearch, showFilters, setShowFilters, showMap, setShowMap }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  // ... 保持其他現有的代碼不變 ...

  return (
    <div className="relative w-full max-w-[640px]">
      <div className="flex gap-2">
        {/* Search Input */}
        <div className="flex-1 relative">
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSearch({ type: 'search', value: query });
          }} className="relative">
            <div className="relative flex items-center">
              <div className="absolute left-3 text-gray-400">
                <FaSearch className="h-5 w-5" />
              </div>
              <input
                ref={inputRef}
                type="text"
                className="w-full h-12 px-4 py-2 pl-10 pr-24 rounded-full border border-gray-300 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-lg"
                placeholder="Search services, locations, or businesses..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
              />
              <div className="absolute right-3 flex items-center space-x-2">
                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setShowSuggestions(false);
                      inputRef.current?.focus();
                    }}
                    className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                  >
                    <FaTimes className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Filter Button */}
        {setShowFilters && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex-none px-4 py-2 rounded-full transition-colors flex items-center gap-2
                     ${showFilters 
                       ? 'bg-blue-600 text-white' 
                       : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
                     }`}
          >
            <FaFilter className={showFilters ? 'text-white' : 'text-gray-400'} />
            <span>Filters</span>
          </button>
        )}

        {/* Map/List Toggle Button */}
        {setShowMap && (
          <button
            onClick={() => setShowMap(!showMap)}
            className={`flex-none px-4 py-2 rounded-full transition-colors flex items-center gap-2
                     ${showMap 
                       ? 'bg-blue-600 text-white' 
                       : 'bg-white border border-gray-300 text-gray-600 hover:border-gray-400'
                     }`}
            aria-label={showMap ? 'Show list view' : 'Show map view'}
          >
            {showMap ? (
              <>
                <FaList className="h-4 w-4" />
                <span>List</span>
              </>
            ) : (
              <>
                <FaMapMarkerAlt className="h-4 w-4" />
                <span>Map</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* 保持其他下拉菜單的代碼不變 ... */}
    </div>
  );
};

export default SearchBar;

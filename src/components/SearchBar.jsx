import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import { CATEGORIES, MOCK_BUSINESSES } from '../data/mockBusinesses';
import { CITY_SERVICES } from '../data/mockLocations';
import { formatUrlSegment } from '../utils/urlHelpers';

const SearchBar = ({ onSearch, showFilters, setShowFilters }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);

  // ... 其他函數保持不變 ...

  return (
    <div className="relative w-full max-w-[640px]">
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
            {setShowFilters && (
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`p-1.5 rounded-full hover:bg-gray-100 ${
                  showFilters ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
                }`}
                aria-label="Toggle filters"
              >
                <FaFilter className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Suggestions Dropdown */}
      {showSuggestions && (query.length > 0 || recentSearches.length > 0) && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 
                     overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div className="border-b border-gray-100">
              <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50">
                Recent Searches
              </div>
              {recentSearches.map((search) => (
                <div
                  key={`${search.term}-${search.timestamp}`}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                  onClick={() => handleSearch({ 
                    type: search.type, 
                    value: search.term 
                  })}
                >
                  <div className="flex items-center">
                    <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{search.term}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {query.length > 0 && (
            <>
              {/* Services */}
              {services.length > 0 && (
                <div className="border-b border-gray-100">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50">
                    Services
                  </div>
                  {services.map((service) => (
                    <div
                      key={service.value}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(service)}
                    >
                      <div className="flex items-center">
                        <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{service.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Cities */}
              {cities.length > 0 && (
                <div className="border-b border-gray-100">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50">
                    Cities
                  </div>
                  {cities.map((city) => (
                    <div
                      key={city.value}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(city)}
                    >
                      <div className="flex items-center">
                        <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{city.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Businesses */}
              {businesses.length > 0 && (
                <div>
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50">
                    Businesses
                  </div>
                  {businesses.map((business) => (
                    <div
                      key={business.id}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(business)}
                    >
                      <div className="flex items-center">
                        <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                        <span>{business.value}</span>
                        <span className="ml-2 text-sm text-gray-500">
                          ({business.category})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {!hasResults && (
                <div className="px-4 py-3 text-gray-500 text-center">
                  No results found for "{query}"
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

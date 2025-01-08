import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaFilter, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import { CATEGORIES, MOCK_BUSINESSES } from '../data/mockBusinesses';
import { CITY_SERVICES } from '../data/mockLocations';

// 獲取所有城市及其服務
const getCityServiceMap = () => {
  const cityMap = new Map();
  
  Object.values(CITY_SERVICES).forEach(country => {
    Object.entries(country).forEach(([city, services]) => {
      // 檢查該城市是否有實際的商家
      const hasBusinesses = MOCK_BUSINESSES.some(business => business.city === city);
      if (hasBusinesses) {
        cityMap.set(city, services);
      }
    });
  });
  
  return cityMap;
};

// 獲取服務提供的城市
const getServiceCities = (service) => {
  const cities = new Set();
  MOCK_BUSINESSES.forEach(business => {
    if (business.category === service) {
      cities.add(business.city);
    }
  });
  return Array.from(cities);
};

export default function SearchBar({ showFilters, setShowFilters }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // 從 localStorage 讀取最近搜尋
  useEffect(() => {
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // 儲存最近搜尋
  const saveRecentSearch = (searchTerm, type) => {
    const newSearch = { term: searchTerm, type, timestamp: Date.now() };
    const updated = [newSearch, ...recentSearches.filter(s => 
      s.term !== searchTerm
    )].slice(0, 5);
    
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // 獲取搜尋建議
  const getSuggestions = (searchQuery) => {
    const cityServiceMap = getCityServiceMap();
    const lowercaseQuery = searchQuery.toLowerCase();
    
    // 服務建議
    const serviceMatches = CATEGORIES.filter(service =>
      service.toLowerCase().includes(lowercaseQuery)
    ).map(service => ({
      type: 'service',
      value: service,
      cities: getServiceCities(service)
    }));

    // 城市建議
    const cityMatches = Array.from(cityServiceMap.entries())
      .filter(([city]) => city.toLowerCase().includes(lowercaseQuery))
      .map(([city, services]) => ({
        type: 'city',
        value: city,
        services: services
      }));

    // 商家建議
    const businessMatches = MOCK_BUSINESSES
      .filter(business => 
        business.name.toLowerCase().includes(lowercaseQuery) ||
        business.category.toLowerCase().includes(lowercaseQuery)
      )
      .map(business => ({
        type: 'business',
        value: business.name,
        category: business.category,
        city: business.city,
        id: business.id
      }));

    return {
      services: serviceMatches.slice(0, 3),
      cities: cityMatches.slice(0, 3),
      businesses: businessMatches.slice(0, 3)
    };
  };

  const handleSearch = (suggestion) => {
    switch (suggestion.type) {
      case 'service':
        saveRecentSearch(suggestion.value, 'service');
        navigate(`/service/${encodeURIComponent(suggestion.value)}`);
        break;
      case 'city':
        saveRecentSearch(suggestion.value, 'city');
        navigate(`/listings?city=${encodeURIComponent(suggestion.value)}`);
        break;
      case 'business':
        saveRecentSearch(suggestion.value, 'business');
        navigate(`/business/${suggestion.id}`);
        break;
      default:
        if (query.trim()) {
          navigate(`/listings?search=${encodeURIComponent(query.trim())}`);
        }
    }
    setShowSuggestions(false);
    setQuery('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const suggestions = getSuggestions(query);
    if (suggestions.services.length > 0) {
      handleSearch(suggestions.services[0]);
    } else if (suggestions.cities.length > 0) {
      handleSearch(suggestions.cities[0]);
    } else if (suggestions.businesses.length > 0) {
      handleSearch(suggestions.businesses[0]);
    } else {
      handleSearch({ type: 'search', value: query });
    }
  };

  const { services, cities, businesses } = getSuggestions(query);
  const hasResults = services.length > 0 || cities.length > 0 || businesses.length > 0;

  return (
    <div className="relative w-full max-w-[640px]">
      <form onSubmit={handleSubmit} className="relative">
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
              setSelectedIndex(-1);
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
                  setSelectedIndex(-1);
                  inputRef.current?.focus();
                }}
                className="p-1.5 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                aria-label="Clear search"
              >
                <FaTimes className="h-4 w-4" />
              </button>
            )}
            {setShowFilters && (
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className={`p-1.5 rounded-full transition-colors ${
                  showFilters 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-400 hover:bg-gray-100'
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
        <div 
          ref={suggestionsRef}
          className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 
                   overflow-hidden z-50 max-h-[80vh] overflow-y-auto"
        >
          {/* Recent Searches */}
          {query.length === 0 && recentSearches.length > 0 && (
            <div className="border-b border-gray-100">
              <div className="px-4 py-2 text-sm font-medium text-gray-500 bg-gray-50">
                Recent Searches
              </div>
              {recentSearches.map((search, index) => (
                <div
                  key={`${search.term}-${search.timestamp}`}
                  className="px-4 py-3 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                  onClick={() => handleSearch({ 
                    type: search.type, 
                    value: search.term,
                    id: search.id 
                  })}
                >
                  <div className="flex items-center">
                    <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{search.term}</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {search.type}
                  </span>
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
                  {services.map((service, index) => (
                    <div
                      key={service.value}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(service)}
                    >
                      <div className="flex items-center">
                        <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div>{service.value}</div>
                          {service.cities.length > 0 && (
                            <div className="text-sm text-gray-500">
                              Available in {service.cities.join(', ')}
                            </div>
                          )}
                        </div>
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
                  {cities.map((city, index) => (
                    <div
                      key={city.value}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(city)}
                    >
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div>{city.value}</div>
                          {city.services.length > 0 && (
                            <div className="text-sm text-gray-500">
                              {city.services.length} services available
                            </div>
                          )}
                        </div>
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
                  {businesses.map((business, index) => (
                    <div
                      key={business.id}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-50"
                      onClick={() => handleSearch(business)}
                    >
                      <div className="flex items-center">
                        <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                        <div>
                          <div>{business.value}</div>
                          <div className="text-sm text-gray-500">
                            {business.category} • {business.city}
                          </div>
                        </div>
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
}

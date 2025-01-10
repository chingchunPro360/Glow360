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

  // 處理搜尋
  const handleSearch = (suggestion) => {
    console.log('Handling search for:', suggestion); // 添加日誌

    const currentCity = getCurrentCity();
    const currentCategory = getCurrentCategory();

    switch (suggestion.type) {
      case 'service':
        saveRecentSearch(suggestion.value, 'service');
        const serviceUrl = formatUrlSegment(suggestion.value);
        console.log('Navigating to service:', serviceUrl); // 添加日誌
        navigate(`/${serviceUrl}`);
        break;

      case 'city':
        saveRecentSearch(suggestion.value, 'city');
        const cityUrl = formatUrlSegment(suggestion.value);
        if (currentCategory && currentCategory !== 'search' && currentCategory !== 'all') {
          console.log('Navigating to category/city:', `/${currentCategory}/${cityUrl}`); // 添加日誌
          navigate(`/${currentCategory}/${cityUrl}`);
        } else {
          console.log('Navigating to all/city:', `/all/${cityUrl}`); // 添加日誌
          navigate(`/all/${cityUrl}`);
        }
        break;

      case 'business':
        saveRecentSearch(suggestion.value, 'business');
        console.log('Navigating to business:', `/business/${suggestion.id}`); // 添加日誌
        navigate(`/business/${suggestion.id}`);
        break;

      default:
        if (query.trim()) {
          const searchQuery = formatUrlSegment(query.trim());
          console.log('Navigating to search:', `/search/${searchQuery}`); // 添加日誌
          navigate(`/search/${searchQuery}`);
        }
    }
    setShowSuggestions(false);
    setQuery('');
  };

  // 獲取搜尋建議
  const getSuggestions = (searchQuery) => {
    const lowercaseQuery = searchQuery.toLowerCase();
    
    // 服務建議
    const serviceMatches = CATEGORIES.filter(service =>
      service.toLowerCase().includes(lowercaseQuery)
    ).map(service => ({
      type: 'service',
      value: service
    }));

    // 城市建議
    const cityMatches = Object.entries(CITY_SERVICES['United States'])
      .filter(([city]) => city.toLowerCase().includes(lowercaseQuery))
      .map(([city]) => ({
        type: 'city',
        value: city
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
        id: business.id,
        category: business.category
      }));

    return {
      services: serviceMatches.slice(0, 3),
      cities: cityMatches.slice(0, 3),
      businesses: businessMatches.slice(0, 3)
    };
  };

  // 從 URL 獲取當前類別
  const getCurrentCategory = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts[0] || '';
  };

  // 從 URL 獲取當前城市
  const getCurrentCity = () => {
    const pathParts = location.pathname.split('/').filter(Boolean);
    return pathParts.length >= 2 ? pathParts[1] : '';
  };

  // 儲存最近搜尋
  const saveRecentSearch = (searchTerm, type) => {
    const newSearch = { term: searchTerm, type, timestamp: Date.now() };
    const updated = [newSearch, ...recentSearches.filter(s => 
      s.term !== searchTerm
    )].slice(0, 5);
    
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  // 載入最近搜尋
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const { services, cities, businesses } = getSuggestions(query);
  const hasResults = services.length > 0 || cities.length > 0 || businesses.length > 0;

  // 處理點擊建議項目
  const handleSuggestionClick = (suggestion) => {
    console.log('Suggestion clicked:', suggestion); // 添加日誌
    handleSearch(suggestion);
  };

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
                  onClick={() => handleSuggestionClick({ 
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
                      onClick={() => handleSuggestionClick(service)}
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
                      onClick={() => handleSuggestionClick(city)}
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
                      onClick={() => handleSuggestionClick(business)}
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

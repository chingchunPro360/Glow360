import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SUGGESTED_SERVICES = [
  'Hair Styling',
  'Nail Care',
  'Facial Treatment',
  'Massage',
  'Makeup Service',
  'Hair Coloring'
];

export default function SearchBar({ showFilters, setShowFilters }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate();

  // Filter suggestions based on input
  const filteredSuggestions = SUGGESTED_SERVICES.filter(service =>
    service.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (searchQuery) => {
    navigate(`/listings?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setQuery('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && selectedIndex < filteredSuggestions.length) {
      const selectedService = filteredSuggestions[selectedIndex];
      handleSearch(selectedService);
      setQuery(selectedService);
    } else if (query.trim()) {
      handleSearch(query.trim());
    }
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          const selectedService = filteredSuggestions[selectedIndex];
          setQuery(selectedService);
          handleSearch(selectedService);
          setShowSuggestions(false);
          setSelectedIndex(-1);
        } else if (query.trim()) {
          handleSearch(query.trim());
          setShowSuggestions(false);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target) &&
          !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            placeholder="Search services or locations..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
          />
          <div className="absolute right-3 flex items-center space-x-2">
            {query && (
              <button
                type="button"
                onClick={handleClear}
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
      {showSuggestions && filteredSuggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 
                   overflow-hidden z-50"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`px-4 py-3 cursor-pointer ${
                index === selectedIndex
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-50'
              }`}
              onClick={() => {
                setQuery(suggestion);
                handleSearch(suggestion);
                setShowSuggestions(false);
                setSelectedIndex(-1);
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex items-center">
                <FaSearch className="h-4 w-4 text-gray-400 mr-2" />
                {suggestion}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

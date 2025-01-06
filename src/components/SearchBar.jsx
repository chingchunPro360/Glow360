import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

export default function SearchBar({ onSearch, showFilters, setShowFilters }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = [
    'Haircut',
    'Manicure',
    'Facial',
    'Massage',
    'Hair Coloring',
    'Beard Trim'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch?.(query.trim());
      setShowSuggestions(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[640px]">
      <div className="relative flex items-center">
        <div className="absolute left-3 text-gray-400">
          <FaSearch className="h-5 w-5" />
        </div>
        <input
          type="text"
          className="w-full px-4 py-2.5 pl-10 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search services, businesses, or locations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        {setShowFilters && (
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`absolute right-3 p-1.5 rounded-full transition-colors ${
              showFilters 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-400 hover:bg-gray-100'
            }`}
          >
            <FaFilter className="h-4 w-4" />
          </button>
        )}
      </div>
      
      {showSuggestions && (
        <div className="absolute w-full mt-1 bg-white rounded-md shadow-lg z-50">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion);
                onSearch?.(suggestion);
                setShowSuggestions(false);
              }}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import ScrollableList from '../components/ScrollableList';
import BusinessCard from '../components/BusinessCard';
import Filters from '../components/Filters';
import { CATEGORIES, TREATMENTS } from '../data/categories';
import { BUSINESSES } from '../data/businesses';
import { FaSpinner, FaFilter } from 'react-icons/fa';

function BusinessListings() {
  const { category, treatment } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    rating: null,
    priceRange: [],
    openNow: false
  });
  
  const decodedCategory = decodeURIComponent(category);
  const decodedTreatment = treatment ? decodeURIComponent(treatment) : '';
  const treatments = TREATMENTS[decodedCategory] || [];

  const handleCategoryClick = async (newCategory) => {
    setIsLoading(true);
    navigate(`/${encodeURIComponent(newCategory)}`);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const handleTreatmentClick = async (selectedTreatment) => {
    setIsLoading(true);
    if (decodedTreatment === selectedTreatment) {
      navigate(`/${category}`);
    } else {
      navigate(`/${category}/${encodeURIComponent(selectedTreatment)}`);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  // 過濾商家列表
  const filteredBusinesses = BUSINESSES.filter(business => {
    // 類別和服務過濾
    if (business.category !== decodedCategory) return false;
    if (decodedTreatment && !business.services.includes(decodedTreatment)) return false;
    
    // 評分過濾
    if (filters.rating && business.rating < filters.rating) return false;
    
    // 價格範圍過濾
    if (filters.priceRange.length > 0 && !filters.priceRange.includes(business.price)) return false;
    
    // 營業狀態過濾
    if (filters.openNow && !business.isOpen) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Categories List */}
        <div className="bg-white py-4 sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto">
            <ScrollableList
              items={CATEGORIES}
              selectedItem={decodedCategory}
              onItemClick={handleCategoryClick}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              {decodedTreatment || decodedCategory}
              {decodedTreatment && (
                <span className="text-gray-500"> in {decodedCategory}</span>
              )}
            </h1>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm
                       hover:bg-gray-50 transition-colors"
            >
              <FaFilter className={showFilters ? 'text-blue-600' : 'text-gray-600'} />
              <span>Filters</span>
            </button>
          </div>

          {/* Treatments List */}
          {treatments.length > 0 && (
            <div className="mb-8">
              <ScrollableList
                items={treatments}
                selectedItem={decodedTreatment}
                onItemClick={handleTreatmentClick}
              />
            </div>
          )}

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <Filters
                    filters={filters}
                    onChange={setFilters}
                  />
                </div>
              </div>
            )}

            {/* Main Content */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <FaSpinner className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
              ) : (
                <>
                  {/* Results Count */}
                  <div className="mb-4 text-gray-600">
                    {filteredBusinesses.length} {filteredBusinesses.length === 1 ? 'result' : 'results'} found
                  </div>

                  {/* Businesses Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBusinesses.map(business => (
                      <BusinessCard key={business.id} business={business} />
                    ))}
                  </div>

                  {/* No Results Message */}
                  {filteredBusinesses.length === 0 && (
                    <div className="text-center py-12">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        No businesses found
                      </h3>
                      <p className="text-gray-600">
                        Try adjusting your filters or search criteria
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BusinessListings;

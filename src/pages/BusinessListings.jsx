import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusinessCardGrid from '../components/BusinessCardGrid';
import FilterSidebar from '../components/listing/FilterSidebar';
import MapView from '../components/listing/MapView';
import ServiceCategories from '../components/SearchCategories';
import Testimonials from '../components/listing/Testimonials';
import { MOCK_BUSINESSES, CATEGORIES } from '../data/mockBusinesses';

export default function BusinessListings() {
  const [searchParams] = useSearchParams();
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    serviceType: [],
    rating: null,
    priceRange: [],
    location: '',
    openNow: false
  });

  // 從 URL 參數中獲取搜尋條件
  const city = searchParams.get('city');
  const category = searchParams.get('category');
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (category) {
      setSelectedFilters(prev => ({
        ...prev,
        serviceType: [category]
      }));
    }
  }, [searchParams]);

  const filteredBusinesses = MOCK_BUSINESSES.filter(business => {
    if (city && business.city !== city) {
      return false;
    }
    if (selectedFilters.serviceType.length > 0 && 
        !selectedFilters.serviceType.includes(business.category)) {
      return false;
    }
    if (selectedFilters.openNow && !business.isOpen) {
      return false;
    }
    if (selectedFilters.priceRange.length > 0 && 
        !selectedFilters.priceRange.includes(business.price)) {
      return false;
    }
    if (selectedFilters.rating && business.rating < selectedFilters.rating) {
      return false;
    }
    return true;
  });

  // 生成頁面標題
  const getPageTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (category && city) return `${category} in ${city}`;
    if (category) return category;
    if (city) return `Beauty Services in ${city}`;
    return 'All Beauty Services';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        showMap={showMap}
        setShowMap={setShowMap}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Categories Section */}
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {CATEGORIES.map((categoryName) => (
              <button
                key={categoryName}
                onClick={() => {
                  setSelectedFilters(prev => ({
                    ...prev,
                    serviceType: [categoryName]
                  }));
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedFilters.serviceType.includes(categoryName)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {categoryName}
              </button>
            ))}
          </div>
        </div>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {showFilters && (
                <div className="w-64 flex-shrink-0">
                  <div className="sticky top-24">
                    <FilterSidebar
                      filters={selectedFilters}
                      onChange={setSelectedFilters}
                    />
                  </div>
                </div>
              )}

              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  {(city || category || searchQuery) && (
                    <>
                      <FaChevronRight className="mx-2 text-gray-400" />
                      {category ? (
                        <Link 
                          to={`/service/${category}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {category}
                        </Link>
                      ) : city ? (
                        <span className="text-gray-900">{city}</span>
                      ) : (
                        <span className="text-gray-900">Search Results</span>
                      )}
                    </>
                  )}
                  {category && city && (
                    <>
                      <FaChevronRight className="mx-2 text-gray-400" />
                      <span className="text-gray-900">{city}</span>
                    </>
                  )}
                </div>

                {/* Page Title */}
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                  {getPageTitle()}
                </h1>

                {/* Business Listings */}
                {showMap ? (
                  <MapView 
                    businesses={filteredBusinesses}
                    onBusinessClick={(business) => {
                      console.log('Business clicked:', business);
                    }}
                  />
                ) : (
                  <BusinessCardGrid 
                    businesses={filteredBusinesses}
                    scrollable={false}
                  />
                )}

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
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        <ServiceCategories />
      </main>

      <Footer />
    </div>
  );
}

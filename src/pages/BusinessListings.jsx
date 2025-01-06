import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusinessCardGrid from '../components/BusinessCardGrid';  // 改用 BusinessCardGrid
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

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedFilters(prev => ({
        ...prev,
        serviceType: [category]
      }));
    }
  }, [searchParams]);

  const filteredBusinesses = MOCK_BUSINESSES.filter(business => {
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        showMap={showMap}
        setShowMap={setShowMap}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      
      <main className="flex-grow">
        {/* Categories Section */}
        <div className="bg-white py-4 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedFilters(prev => ({
                      ...prev,
                      serviceType: [category]
                    }));
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                    selectedFilters.serviceType.includes(category)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Filter Sidebar */}
              {showFilters && (
                <div className="w-64 flex-shrink-0">
                  <FilterSidebar
                    filters={selectedFilters}
                    onChange={setSelectedFilters}
                  />
                </div>
              )}

              {/* Business Listings or Map */}
              <div className="flex-1">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  {selectedFilters.serviceType[0] && (
                    <>
                      <span className="mx-2">/</span>
                      <span className="text-gray-900">
                        {selectedFilters.serviceType[0]}
                      </span>
                    </>
                  )}
                </div>

                {showMap ? (
                  <MapView 
                    businesses={filteredBusinesses}
                    onBusinessClick={(business) => {
                      console.log('Business clicked:', business);
                    }}
                  />
                ) : (
                  <div className="overflow-hidden">
                    <BusinessCardGrid 
                      businesses={filteredBusinesses}
                      scrollable={true}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Browse by City */}
        <ServiceCategories />
      </main>

      <Footer />
    </div>
  );
}

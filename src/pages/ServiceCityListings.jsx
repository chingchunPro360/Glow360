import React, { useState } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusinessCardGrid from '../components/BusinessCardGrid';
import FilterSidebar from '../components/listing/FilterSidebar';
import MapView from '../components/listing/MapView';
import ServiceCategories from '../components/SearchCategories';
import Testimonials from '../components/listing/Testimonials';
import { MOCK_BUSINESSES, CATEGORIES } from '../data/mockBusinesses';
import { CITY_SERVICES } from '../data/mockLocations';

export default function ServiceCityListings() {
  const { service, city } = useParams();
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

  const filteredBusinesses = MOCK_BUSINESSES.filter(business => {
    if (city && business.city !== city) {
      return false;
    }

    if (service && business.category !== service) {
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>
      
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {CATEGORIES.map((categoryName) => (
              <Link
                key={categoryName}
                to={`/service/${categoryName}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  service === categoryName
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {categoryName}
              </Link>
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
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  {service && (
                    <>
                      <span className="mx-2">/</span>
                      <Link 
                        to={`/service/${service}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {service}
                      </Link>
                    </>
                  )}
                  {city && (
                    <>
                      <span className="mx-2">/</span>
                      <span className="text-gray-900">
                        {city}
                      </span>
                    </>
                  )}
                </div>

                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-gray-900">
                    {service && city 
                      ? `${service} in ${city}`
                      : service
                        ? `${service} Services`
                        : `Beauty Services in ${city}`}
                  </h1>
                </div>

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

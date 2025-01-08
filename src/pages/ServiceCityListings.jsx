import React, { useState, useEffect } from 'react';
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

  // 獲取當前城市的服務列表
  const getCityServices = (cityName) => {
    for (const country of Object.values(CITY_SERVICES)) {
      if (country[cityName]) {
        return country[cityName];
      }
    }
    return [];
  };

  // 獲取提供特定服務的城市列表
  const getServiceCities = (serviceName) => {
    const cities = new Set();
    Object.values(CITY_SERVICES).forEach(country => {
      Object.entries(country).forEach(([cityName, services]) => {
        if (services.includes(serviceName)) {
          cities.add(cityName);
        }
      });
    });
    return Array.from(cities);
  };

  // 根據服務和城市篩選商家
  const filteredBusinesses = MOCK_BUSINESSES.filter(business => {
    // 如果指定了城市，先篩選城市
    if (city && business.city !== city) {
      return false;
    }

    // 如果指定了服務，檢查服務類別
    if (service && business.category !== service) {
      return false;
    }

    // 應用其他篩選條件
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

  // 獲取相關城市和服務
  const relatedCities = service ? getServiceCities(service) : [];
  const relatedServices = city ? getCityServices(city) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>
      
      <main className="pt-16">
        {/* Categories Section */}
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

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* Filter Sidebar */}
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

              {/* Business Listings or Map */}
              <div className="flex-1">
                {/* Breadcrumb */}
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

                {/* Title and Description */}
                <div className="mb-8">
                  <h1 className="text-2xl font-bold text-gray-900 mb-2">
                    {service && city 
                      ? `${service} in ${city}`
                      : service
                        ? `${service} Services`
                        : `Beauty Services in ${city}`}
                  </h1>
                  <p className="text-gray-600">
                    {filteredBusinesses.length} businesses found
                  </p>
                </div>

                {/* Related Cities or Services */}
                {(relatedCities.length > 0 || relatedServices.length > 0) && (
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-3">
                      {service ? 'Available in Cities' : 'Available Services'}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {service ? (
                        // Show related cities for the service
                        relatedCities.map(cityName => (
                          <Link
                            key={cityName}
                            to={`/service/${service}/${cityName}`}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm 
                                     hover:bg-gray-200 transition-colors"
                          >
                            {cityName}
                          </Link>
                        ))
                      ) : (
                        // Show related services for the city
                        relatedServices.map(serviceName => (
                          <Link
                            key={serviceName}
                            to={`/service/${serviceName}/${city}`}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm 
                                     hover:bg-gray-200 transition-colors"
                          >
                            {serviceName}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}

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

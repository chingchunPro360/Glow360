import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaHeart, FaShare, FaChevronRight } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data';
import Header from '../components/Header';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';
import ReviewSection from '../components/profile/ReviewSection';
import BookingCard from '../components/profile/BookingCard';
import PromotionCard from '../components/profile/PromotionCard';

export default function BusinessProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [isBusinessTitleVisible, setIsBusinessTitleVisible] = useState(true);

  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const isTitleVisible = titleRect.top >= 0 && titleRect.bottom <= window.innerHeight;
        setIsBusinessTitleVisible(isTitleVisible);
        setShowMobileHeader(titleRect.top < 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Business not found</h1>
          <button 
            onClick={() => navigate('/listings')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        showMap={showMap}
        setShowMap={setShowMap}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />

      {showMobileHeader && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md md:hidden">
          <div className="mx-4 py-4">
            <h2 className="text-lg font-bold text-gray-900">{business.name}</h2>
            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1 mb-2">
              <span>{business.category}</span>
              <span>•</span>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span>{business.rating}</span>
                <span className="ml-1">({business.reviewCount})</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span className="truncate">{business.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className={`${showMobileHeader ? 'mt-24' : ''} md:mt-0`}>
        <section className="bg-white">
          <div className="md:max-w-7xl md:mx-auto md:px-4">
            <div className="w-[calc(100%-2rem)] mx-4 md:w-[calc(66.666667%-1rem)] md:mx-0 md:py-6">
              <div className="overflow-x-auto scrollbar-hide mb-4">
                <div className="flex items-center text-sm text-gray-600 whitespace-nowrap">
                  <Link to="/" className="hover:text-blue-600 transition-colors flex-shrink-0">
                    Home
                  </Link>
                  <FaChevronRight className="w-3 h-3 mx-2 text-gray-400 flex-shrink-0" />
                  <Link 
                    to={`/listings?category=${encodeURIComponent(business.category)}`}
                    className="hover:text-blue-600 transition-colors flex-shrink-0"
                  >
                    {business.category}
                  </Link>
                  <FaChevronRight className="w-3 h-3 mx-2 text-gray-400 flex-shrink-0" />
                  <Link 
                    to={`/listings?category=${encodeURIComponent(business.category)}&city=${encodeURIComponent(business.city)}`}
                    className="hover:text-blue-600 transition-colors flex-shrink-0"
                  >
                    {business.city}
                  </Link>
                  <FaChevronRight className="w-3 h-3 mx-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-900 flex-shrink-0">{business.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-start pb-4 md:pb-0" ref={titleRef}>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {business.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-600 mb-2 md:mb-0">
                    <span>{business.category}</span>
                    <span>•</span>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{business.rating}</span>
                      <span className="ml-1">({business.reviewCount})</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-1" />
                      <span>{business.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <FaShare className="text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="md:max-w-7xl md:mx-auto px-4 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 divide-y divide-gray-200 bg-white md:bg-transparent md:divide-y-0 md:space-y-6">
              <div className="md:bg-white md:rounded-lg overflow-hidden">
                <PhotoCarousel photos={business.photos} />
              </div>

              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Services</h2>
                  <div className="space-y-4">
                    {business.services.map((service, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Our Team</h2>
                  <StaffCarousel businessId={business.id} />
                </div>
              </section>

              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">About Us</h2>
                  <p className="text-gray-600">
                    {showFullDescription ? business.description : business.description.slice(0, 150)}
                    {business.description.length > 150 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="ml-2 text-blue-600 hover:text-blue-700"
                      >
                        {showFullDescription ? 'Show Less' : 'Read More'}
                      </button>
                    )}
                  </p>
                </div>
              </section>

              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <ReviewSection business={business} />
                </div>
              </section>
            </div>

            <div className="hidden lg:block">
              <div className={`sticky transition-[top] duration-300 ${
                isBusinessTitleVisible ? 'top-[72px]' : 'top-6'
              }`}>
                <div className="bg-white rounded-lg p-6">
                  <BookingCard 
                    business={business} 
                    isBusinessTitleVisible={isBusinessTitleVisible}
                  />
                </div>
                <div className="mt-6 bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-6">Current Promotions</h3>
                  <PromotionCard businessId={business.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">
        <button 
          onClick={() => {
            console.log('Booking...');
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

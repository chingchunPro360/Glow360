import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaHeart, FaShare } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data';
import Header from '../components/Header';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';
import ReviewSection from '../components/profile/ReviewSection';
import BookingCard from '../components/profile/BookingCard';
import ContactCard from '../components/profile/ContactCard';
import BusinessHoursCard from '../components/profile/BusinessHoursCard';
import PromotionCard from '../components/profile/PromotionCard';

export default function BusinessProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [hideMainHeader, setHideMainHeader] = useState(false);
  const [isBusinessTitleVisible, setIsBusinessTitleVisible] = useState(true);
  
  const titleRef = useRef(null);
  const lastScrollY = useRef(0);
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (window.innerWidth < 768) {
        // 向下滾動超過 50px 時隱藏主 header
        if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setHideMainHeader(true);
        }
        // 向上滾動時顯示主 header
        else if (currentScrollY < lastScrollY.current) {
          setHideMainHeader(false);
        }

        // 商家標題是否可見
        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          setShowStickyHeader(titleRect.bottom <= 0);
        }
      } else {
        setHideMainHeader(false);
        setShowStickyHeader(false);
        
        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          setIsBusinessTitleVisible(titleRect.bottom > 0);
        }
      }

      lastScrollY.current = currentScrollY;
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
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* Main Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white transform transition-transform duration-300 ${
        hideMainHeader ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      {/* Mobile Sticky Header */}
      <div className={`md:hidden fixed left-0 right-0 bg-white border-b transform ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 z-40 shadow-sm top-0`}>
        <div className="px-6 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{business.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaStar className="text-yellow-400" />
                <span>{business.rating}</span>
                <span>•</span>
                <span>{business.category}</span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
            </button>
          </div>
        </div>
      </div>

      <main className="pt-16">
        {/* Business Title Section */}
        <section className="bg-white" ref={titleRef}>
          <div className="px-6 py-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-600">
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
        </section>

        {/* Photo Carousel */}
        <section className="mb-6">
          <PhotoCarousel photos={business.photos} />
        </section>

        {/* Main Content */}
        <div className="md:max-w-7xl md:mx-auto md:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Mobile Contact Info */}
              <section className="lg:hidden bg-white">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Contact Information</h2>
                  <ContactCard business={business} />
                </div>
              </section>

              {/* Mobile Business Hours */}
              <section className="lg:hidden bg-white">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Business Hours</h2>
                  <BusinessHoursCard business={business} />
                </div>
              </section>

              {/* Mobile Promotions */}
              <section className="lg:hidden bg-white">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Current Promotions</h2>
                  <PromotionCard businessId={business.id} />
                </div>
              </section>

              {/* Services */}
              <section className="bg-white">
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

              {/* Team */}
              <section className="bg-white">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Our Team</h2>
                  <StaffCarousel businessId={business.id} />
                </div>
              </section>

              {/* About */}
              <section className="bg-white">
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

              {/* Reviews */}
              <section className="bg-white">
                <div className="px-6 py-6">
                  <ReviewSection business={business} />
                </div>
              </section>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-8 space-y-6">
                <div className="bg-white rounded-lg">
                  <BookingCard 
                    business={business} 
                    isBusinessTitleVisible={isBusinessTitleVisible}
                  />
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                  <ContactCard business={business} />
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-6">Business Hours</h3>
                  <BusinessHoursCard business={business} />
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-6">Current Promotions</h3>
                  <PromotionCard businessId={business.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Footer */}
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

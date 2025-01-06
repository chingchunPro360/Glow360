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
  
  const titleRef = useRef(null);
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        setShowStickyHeader(titleRect.bottom <= 64);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="sticky top-0 z-50">
          <Header />
        </div>
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
      {/* Header */}
      <div className="sticky top-0 z-50">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      {/* Sticky Business Header */}
      <div className={`fixed top-16 left-0 right-0 bg-white border-b transform ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 z-40 shadow-sm h-16`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{business.name}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <FaStar className="text-yellow-400" />
                  <span>{business.rating}</span>
                  <span>•</span>
                  <span>{business.category}</span>
                </div>
              </div>
              <div className="hidden md:block text-sm text-gray-600">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>{business.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* Business Title Section */}
        <div className="border-b" ref={titleRef}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span>{business.category}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{business.rating}</span>
                    <span className="ml-1">({business.reviewCount} reviews)</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{business.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaShare className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <section className="mb-8 rounded-lg overflow-hidden shadow-sm">
                <PhotoCarousel photos={business.photos} />
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <div className="grid gap-4">
                  {business.services.map((service, index) => (
                    <div key={index} className="p-4 border rounded">
                      {service}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <StaffCarousel businessId={business.id} />
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
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
              </section>

              <section className="bg-white rounded-lg shadow-sm p-6">
                <ReviewSection business={business} />
              </section>
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-1">
              <div className="sticky top-[152px] space-y-6">
                <BookingCard business={business} />
                <ContactCard business={business} />
                <BusinessHoursCard business={business} />
                <PromotionCard businessId={business.id} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Glow360. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, 
  FaHeart, FaShare, FaClock } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';
import ReviewSection from '../components/profile/ReviewSection';
import PromotionCard from '../components/profile/PromotionCard';
import Header from '../components/Header';

export default function BusinessProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [showBooking, setShowBooking] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showBookingCard, setShowBookingCard] = useState(true);
  
  const titleRef = useRef(null);
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayIndex = new Date().getDay();
    return days[dayIndex];
  };

  const today = getCurrentDay();

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const isHeaderVisible = titleRect.bottom <= 64;
        setShowStickyHeader(isHeaderVisible);
        setShowBookingCard(!isHeaderVisible);
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
      <div className="sticky top-0 z-50">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

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
              <div className="hidden sm:block">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
                </button>
              </div>
              <button
                onClick={() => setShowBooking(true)}
                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <main>
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
                  onClick={() => {}}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaShare className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

            <div className="lg:col-span-1">
              <div className={`sticky transition-all duration-300 ${
                showBookingCard 
                  ? 'top-[152px]' // 88px + 64px (sticky header height)
                  : 'top-[144px]' // 80px + 64px (sticky header height)
              }`}>
                <div className={`transition-all duration-300 ${
                  showBookingCard 
                    ? 'opacity-100 visible h-auto mb-6 transform translate-y-0' 
                    : 'opacity-0 invisible h-0 mb-0 transform -translate-y-4'
                }`}>
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="font-semibold mb-4">Book an Appointment</h3>
                    {showBooking ? (
                      <div className="p-4 bg-gray-50 rounded">
                        Booking Calendar Placeholder
                      </div>
                    ) : (
                      <button
                        onClick={() => setShowBooking(true)}
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
                      >
                        Check Availability
                      </button>
                    )}
                  </div>
                </div>

                <PromotionCard businessId={business.id} />

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaPhone className="w-5 h-5 text-gray-400 mr-3" />
                      <span>{business.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
                      <span>{business.contact.email}</span>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      {business.contact.social.instagram && (
                        <a 
                          href={`https://instagram.com/${business.contact.social.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <FaInstagram className="w-6 h-6" />
                        </a>
                      )}
                      {business.contact.social.facebook && (
                        <a 
                          href={`https://facebook.com/${business.contact.social.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <FaFacebook className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <FaClock className="mr-2" />
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(business.businessHours).map(([day, hours]) => (
                      <div 
                        key={day}
                        className={`flex justify-between py-2 ${
                          day === today 
                            ? 'bg-blue-50 px-3 rounded-md font-medium text-blue-600' 
                            : ''
                        }`}
                      >
                        <span className="capitalize">
                          {day}
                          {day === today && (
                            <span className="ml-2 text-sm">(Today)</span>
                          )}
                        </span>
                        <span className={day === today ? 'text-blue-600' : 'text-gray-600'}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
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

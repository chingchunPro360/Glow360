import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaHeart, FaShare, FaChevronRight } from 'react-icons/fa';
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

  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

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
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      <main className="pt-16">
        {/* Business Title Section */}
        <section className="bg-white">
          <div className="px-6 py-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
              <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" />
              <Link 
                to={`/service/${business.category}`}
                className="hover:text-blue-600 transition-colors"
              >
                {business.category}
              </Link>
              <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" />
              <Link 
                to={`/service/${business.category}/${business.city}`}
                className="hover:text-blue-600 transition-colors"
              >
                {business.city}
              </Link>
              <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" />
              <span className="text-gray-900">{business.name}</span>
            </div>

            {/* Business Title */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {business.name}
                </h1>
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

        {/* Main Content */}
        <div className="md:max-w-7xl md:mx-auto md:px-4 md:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 divide-y divide-gray-200 bg-white md:bg-transparent md:divide-y-0 md:space-y-6">
              {/* Photo Section */}
              <div className="md:bg-white md:rounded-lg overflow-hidden">
                <PhotoCarousel photos={business.photos} />
              </div>

              {/* Services */}
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

              {/* Team */}
              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <h2 className="text-xl font-bold mb-6">Our Team</h2>
                  <StaffCarousel businessId={business.id} />
                </div>
              </section>

              {/* About */}
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

              {/* Reviews */}
              <section className="md:bg-white md:rounded-lg">
                <div className="px-6 py-6">
                  <ReviewSection business={business} />
                </div>
              </section>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-lg">
                  <BookingCard business={business} />
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

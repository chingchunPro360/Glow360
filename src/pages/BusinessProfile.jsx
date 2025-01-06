import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, 
  FaHeart, FaShare, FaClock } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data/mockBusinesses';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';
import Header from '../components/Header';

function BusinessProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // State declarations
  const [showBooking, setShowBooking] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  // Get current day for business hours highlight
  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayIndex = new Date().getDay();
    return days[dayIndex];
  };

  const today = getCurrentDay();

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
      {/* Fixed Header */}
      <div className="sticky top-0 z-50">
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <img
            src={business.image}
            alt={business.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{business.name}</h1>
                  <div className="flex items-center gap-4 text-lg">
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
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
                  >
                    <FaHeart className={isFavorite ? 'text-red-500' : 'text-white'} />
                  </button>
                  <button 
                    onClick={() => {}}
                    className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30"
                  >
                    <FaShare className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Photo Carousel */}
              <section className="mb-8 rounded-lg overflow-hidden shadow-sm">
                <PhotoCarousel photos={business.photos} />
              </section>

              {/* Services */}
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

              {/* Staff Section */}
              <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <StaffCarousel />
              </section>

              {/* About Us */}
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

              {/* Reviews */}
              <section className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400" />
                  <span className="ml-2">{business.rating} ({business.reviewCount} reviews)</span>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-[88px] space-y-6">
                {/* Booking Widget */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-4">Book an Appointment</h3>
                  {showBooking ? (
                    <div className="p-4 bg-gray-50 rounded">
                      Booking Calendar Placeholder
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowBooking(true)}
                      className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700"
                    >
                      Check Availability
                    </button>
                  )}
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <FaPhone className="w-5 h-5 text-gray-400 mr-3" />
                      <span>123-456-7890</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
                      <span>contact@example.com</span>
                    </div>
                    <div className="flex space-x-4 pt-4">
                      <FaInstagram className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      <FaFacebook className="w-6 h-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                  </div>
                </div>

                {/* Business Hours Card */}
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

export default BusinessProfile;

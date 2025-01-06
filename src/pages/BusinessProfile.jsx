import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaFacebook, 
  FaHeart, FaShare } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data/mockBusinesses';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';

// Local components
const ServiceMenu = ({ services }) => (
  <div className="grid gap-4">
    {services.map((service, index) => (
      <div key={index} className="p-4 border rounded">
        {service}
      </div>
    ))}
  </div>
);

const ReviewSection = ({ business }) => (
  <div>
    <div className="flex items-center mb-4">
      <FaStar className="text-yellow-400" />
      <span className="ml-2">{business.rating} ({business.reviewCount} reviews)</span>
    </div>
  </div>
);

const BookingCalendar = () => <div>Booking Calendar Placeholder</div>;

export default function BusinessProfile() {
  // ... rest of the component remains the same ...

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center h-16">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Glow360
            </Link>
          </div>
        </div>
      </div>
      
      <main>
        {/* Hero Section */}
        <div className="relative h-[400px]">
          {/* ... hero section content ... */}
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
                <ServiceMenu services={business.services} />
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
                  {showFullDescription ? business.description : truncatedDescription}
                  {hasMoreDescription && (
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
                <ReviewSection business={business} />
              </section>
            </div>

            {/* Sidebar remains the same */}
            <div className="lg:col-span-1">
              {/* ... sidebar content ... */}
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

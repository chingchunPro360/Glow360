import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import ContactCard from './ContactCard';
import BusinessHoursCard from './BusinessHoursCard';

export default function BookingCard({ business, isBusinessTitleVisible }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="space-y-6 transition-all duration-300">
      {/* Business Info - Only show when main title is not visible */}
      <div className={`transition-all duration-300 ${
        isBusinessTitleVisible ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
      }`}>
        <h2 className="text-xl font-bold text-gray-900">{business.name}</h2>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 w-4 h-4" />
            <span className="ml-1">{business.rating}</span>
          </div>
          <span className="text-gray-500">•</span>
          <span className="text-gray-600">{business.category}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div>
        <ContactCard business={business} />
      </div>

      {/* Booking Form or Button */}
      {showBooking ? (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Book an Appointment</h3>
          <button
            onClick={() => setShowBooking(false)}
            className="w-full bg-gray-100 text-gray-600 py-2 rounded-md hover:bg-gray-200 
                     transition-colors mt-4"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowBooking(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 
                   transition-colors duration-200"
        >
          Book an Appointment
        </button>
      )}

      {/* Business Hours */}
      <div>
        <h3 className="font-semibold mb-4">Business Hours</h3>
        <BusinessHoursCard business={business} />
      </div>
    </div>
  );
}

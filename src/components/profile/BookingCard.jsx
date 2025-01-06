import React, { useState } from 'react';
import BookingCalendar from './BookingCalendar';

export default function BookingCard({ business }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Book an Appointment</h3>
      {showBooking ? (
        <BookingCalendar business={business} />
      ) : (
        <button
          onClick={() => setShowBooking(true)}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 
                   transition-colors duration-200"
        >
          Check Availability
        </button>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function BookingCard({ business, isBusinessTitleVisible }) {
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="p-6">
      {/* 商家資訊 - 只在電腦版且標題不可見時顯示 */}
      {!isBusinessTitleVisible && (
        <div className="mb-6">
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
      )}

      {/* 預約表單或按鈕 */}
      {showBooking ? (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Book an Appointment</h3>
          {/* 這裡可以加入預約表單的具體實現 */}
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
    </div>
  );
}

import React from 'react';
import { FaClock } from 'react-icons/fa';

export default function BusinessHoursCard({ business }) {
  const getCurrentDay = () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayIndex = new Date().getDay();
    return days[dayIndex];
  };

  const today = getCurrentDay();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
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
  );
}

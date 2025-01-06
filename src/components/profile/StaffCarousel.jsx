import React from 'react';
import { FaStar } from 'react-icons/fa';
import { getBusinessStaff } from '../../data';

export default function StaffCarousel({ businessId }) {
  const staff = getBusinessStaff(businessId);

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 pb-4 min-w-full scrollbar-hide">
        {staff.map((member) => (
          <div 
            key={member.id}
            className="flex-none w-64 bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <span className="ml-1 text-sm">{member.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({member.reviewCount})
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-2 py-1 bg-white rounded text-sm text-gray-600"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Book with {member.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

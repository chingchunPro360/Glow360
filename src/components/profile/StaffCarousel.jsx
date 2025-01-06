import React from 'react';
import { FaStar } from 'react-icons/fa';

const STAFF = [
  {
    id: 1,
    name: "John Smith",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    specialties: ["Men's Cuts", "Fades", "Beard Trimming"],
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    specialties: ["Hair Coloring", "Highlights", "Balayage"],
    rating: 4.8,
    reviewCount: 142
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    specialties: ["Classic Cuts", "Hot Towel Shave", "Styling"],
    rating: 4.9,
    reviewCount: 189
  }
];

export default function StaffCarousel() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-6 pb-4 min-w-full scrollbar-hide">
        {STAFF.map((staff) => (
          <div 
            key={staff.id}
            className="flex-none w-64 bg-gray-50 rounded-lg p-4"
          >
            <div className="flex items-start gap-4">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{staff.name}</h3>
                <p className="text-sm text-gray-600">{staff.role}</p>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-400 w-4 h-4" />
                  <span className="ml-1 text-sm">{staff.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({staff.reviewCount})
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Specialties:</h4>
              <div className="flex flex-wrap gap-2">
                {staff.specialties.map((specialty) => (
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
              Book with {staff.name.split(' ')[0]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const SERVICE_CATEGORIES = {
  "Haircuts & Styling": [
    { name: "Men's Haircut", price: 30, duration: "30 min", description: "Classic men's haircut including wash and style" },
    { name: "Women's Haircut", price: 50, duration: "45 min", description: "Women's haircut including wash and blow dry" },
    { name: "Children's Haircut", price: 25, duration: "30 min", description: "Basic haircut for children under 12" }
  ],
  "Color Services": [
    { name: "Root Touch-up", price: 65, duration: "90 min", description: "Color application to cover root growth" },
    { name: "Full Color", price: 85, duration: "120 min", description: "Full head color application" },
    { name: "Highlights", price: 120, duration: "150 min", description: "Partial or full highlights" }
  ],
  "Treatments": [
    { name: "Deep Conditioning", price: 35, duration: "30 min", description: "Intensive hair treatment for damaged hair" },
    { name: "Keratin Treatment", price: 200, duration: "180 min", description: "Long-lasting smoothing treatment" },
    { name: "Scalp Treatment", price: 45, duration: "45 min", description: "Therapeutic scalp treatment" }
  ]
};

export default function ServiceMenu() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="space-y-6">
      {Object.entries(SERVICE_CATEGORIES).map(([category, services]) => (
        <div key={category} className="border rounded-lg overflow-hidden">
          <button
            className="w-full px-6 py-4 bg-gray-50 flex justify-between items-center"
            onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}
          >
            <h3 className="text-lg font-semibold">{category}</h3>
            {expandedCategory === category ? (
              <FaChevronUp className="text-gray-600" />
            ) : (
              <FaChevronDown className="text-gray-600" />
            )}
          </button>
          
          {expandedCategory === category && (
            <div className="p-6 space-y-4">
              {services.map((service) => (
                <div 
                  key={service.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    <div className="text-sm text-gray-500 mt-1">
                      Duration: {service.duration}
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center gap-4">
                    <span className="text-lg font-semibold">${service.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

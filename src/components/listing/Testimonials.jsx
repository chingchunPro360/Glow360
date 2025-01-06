import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FEATURED_REVIEWS } from '../../data';

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            What Our Customers Are Saying
          </h2>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
            {FEATURED_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="w-[300px] flex-shrink-0 bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{review.text}</p>
                
                <div className="text-sm text-gray-500">
                  Review for <span className="font-medium text-gray-900">{review.businessName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FEATURED_REVIEWS } from '../data';

export default function CustomerReviews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What Our Customers Are Saying
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {FEATURED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-sm p-6 min-w-[300px] w-[300px]"
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
                {review.date && (
                  <span className="text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

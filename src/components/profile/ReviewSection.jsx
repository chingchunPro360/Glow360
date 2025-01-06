import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { getBusinessReviews } from '../../data';

const RATING_DISTRIBUTION = {
  5: 75,
  4: 20,
  3: 3,
  2: 1,
  1: 1
};

export default function ReviewSection({ business }) {
  const [selectedRating, setSelectedRating] = useState(null);
  const reviews = getBusinessReviews(business.id);
  
  const filteredReviews = selectedRating
    ? reviews.filter(review => review.rating === selectedRating)
    : reviews;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Reviews</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Write a Review
        </button>
      </div>

      {/* Rating Overview */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">{business.rating}</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < business.rating ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <div className="text-gray-600">
              Based on {business.reviewCount} reviews
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="space-y-2">
            {Object.entries(RATING_DISTRIBUTION)
              .sort(([a], [b]) => b - a)
              .map(([rating, percentage]) => (
                <div key={rating} className="flex items-center gap-2">
                  <div className="w-12 text-sm text-gray-600">
                    {rating} stars
                  </div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-sm text-gray-600 text-right">
                    {percentage}%
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setSelectedRating(null)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedRating === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All Reviews
        </button>
        {[5, 4, 3, 2, 1].map((rating) => (
          <button
            key={rating}
            onClick={() => setSelectedRating(rating)}
            className={`px-4 py-2 rounded-full flex items-center gap-1 whitespace-nowrap ${
              selectedRating === rating
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {rating} <FaStar className="text-yellow-400" />
          </button>
        ))}
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-medium">{review.name}</div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

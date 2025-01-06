import React from 'react';
import { FaStar } from 'react-icons/fa';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "Amazing experience! The staff was professional and friendly. Will definitely come back!",
    business: "Elite Hair Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    name: "John D.",
    rating: 4,
    text: "Great service and atmosphere. Really enjoyed my haircut.",
    business: "Classic Cuts",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    text: "The best spa experience I've ever had. Truly relaxing and rejuvenating.",
    business: "Zen Spa & Beauty",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 4,
    name: "Michael P.",
    rating: 5,
    text: "Professional service, great attention to detail. Worth every penny!",
    business: "Gentlemen's Quarter",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 5,
    name: "Lisa K.",
    rating: 4,
    text: "Excellent nail art and very hygienic environment. Highly recommend!",
    business: "Nail Paradise",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 6,
    name: "David W.",
    rating: 5,
    text: "Best massage I've ever had. The therapist really knew how to address my back issues.",
    business: "Tranquil Touch",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 7,
    name: "Rachel H.",
    rating: 5,
    text: "Love my new lashes! They look so natural and the application was perfect.",
    business: "Lash & Brow Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 8,
    name: "Tom B.",
    rating: 4,
    text: "Great facial treatment. My skin feels amazing and the staff was very knowledgeable.",
    business: "Pure Skin Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          What Our Customers Are Saying
        </h2>
        
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {REVIEWS.map((review) => (
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
                Review for <span className="font-medium text-gray-900">{review.business}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            See More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

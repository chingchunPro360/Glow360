import React from 'react';
import BusinessCard from './BusinessCard';

export default function BusinessCardGrid({ businesses, title, scrollable = false }) {
  if (!businesses || businesses.length === 0) return null;

  return (
    <div>
      {title && (
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {title}
        </h2>
      )}
      <div className={`
        ${scrollable 
          ? 'flex overflow-x-auto gap-6 pb-4 scrollbar-hide' 
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        }
      `}>
        {businesses.map((business) => (
          <div key={business.id} className={scrollable ? 'min-w-[300px] w-[300px] flex-shrink-0' : ''}>
            <BusinessCard business={business} />
          </div>
        ))}
      </div>
    </div>
  );
}

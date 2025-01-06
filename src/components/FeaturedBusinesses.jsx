import React from 'react';
import BusinessCardGrid from './BusinessCardGrid';
import { MOCK_BUSINESSES } from '../data/mockBusinesses';

export default function FeaturedBusinesses() {
  // Get top rated businesses for featured section (rating >= 4.8)
  const featuredBusinesses = MOCK_BUSINESSES
    .filter(business => business.rating >= 4.8)
    .slice(0, 8);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BusinessCardGrid 
          businesses={featuredBusinesses} 
          title="Featured Businesses"
          scrollable={true}
        />
      </div>
    </section>
  );
}

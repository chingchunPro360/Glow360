import React from 'react';
import BusinessCardGrid from './BusinessCardGrid';
import { MOCK_BUSINESSES } from '../data';

export default function FeaturedBusinesses() {
  // 獲取評分 >= 4.8 的商家作為精選商家
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

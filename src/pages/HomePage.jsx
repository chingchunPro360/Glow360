import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import NewBusinesses from '../components/NewBusinesses';
import SearchCategories from '../components/SearchCategories';
import CustomerReviews from '../components/CustomerReviews';
import { CATEGORIES } from '../data/mockBusinesses';

export default function HomePage() {
  const [showStickyCategories, setShowStickyCategories] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowStickyCategories(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>

      {/* Sticky Categories */}
      <div className={`fixed top-16 left-0 right-0 z-40 bg-white border-b transform transition-transform duration-300 ${
        showStickyCategories ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <a
                key={category}
                href={`/listings?category=${encodeURIComponent(category)}`}
                className="flex-none px-4 py-2 bg-gray-100 rounded-full 
                         text-sm font-medium hover:bg-gray-200 whitespace-nowrap
                         transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="pt-16">
        {/* Hero Section with ID for scroll detection */}
        <div id="hero-section">
          <Hero />
        </div>
        
        <FeaturedBusinesses />
        <NewBusinesses />
        <CustomerReviews />
        <SearchCategories />
      </main>
      
      <Footer />
    </div>
  );
}

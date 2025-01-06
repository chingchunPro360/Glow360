import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import NewBusinesses from '../components/NewBusinesses';
import SearchCategories from '../components/SearchCategories';
import CustomerReviews from '../components/CustomerReviews';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>

      {/* Add padding-top to account for fixed header */}
      <main className="pt-16"> {/* 16 = 4rem = 64px (header height) */}
        <Hero />
        <FeaturedBusinesses />
        <NewBusinesses />
        <CustomerReviews />
        <SearchCategories />
      </main>
      
      <Footer />
    </div>
  );
}

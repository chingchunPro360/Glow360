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
      <Header />
      <main>
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

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { CATEGORIES } from '../data/categories';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Glow360
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              to={`/${encodeURIComponent(category)}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900">{category}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;

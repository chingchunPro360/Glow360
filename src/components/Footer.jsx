import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Link to="/" className="text-2xl font-bold">
            Glow360
          </Link>
          <p className="mt-4 text-gray-400">
            Find and book beauty services near you
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

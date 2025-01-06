import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function NewsletterSignup({ businessName }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setSubscribed(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-semibold mb-4 flex items-center">
        <FaEnvelope className="mr-2" />
        Stay Updated
      </h3>
      
      {subscribed ? (
        <div className="text-center text-green-600">
          <p>Thanks for subscribing!</p>
          <p className="text-sm mt-2">
            You'll receive updates from {businessName} soon.
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to receive special offers and updates from {businessName}.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

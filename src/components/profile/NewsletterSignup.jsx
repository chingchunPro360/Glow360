import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function NewsletterSignup({ business }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // 模擬 API 呼叫
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 成功訂閱
      setSubscribed(true);
      // 這裡可以加入實際的訂閱邏輯
      console.log('Subscribed to:', business.name, 'Email:', email);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
            You'll receive updates from {business.name} about:
            <ul className="mt-2 text-gray-600">
              <li>• New services and promotions</li>
              <li>• Special events and workshops</li>
              <li>• Seasonal offers</li>
            </ul>
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-4">
            Subscribe to receive special offers and updates from {business.name}.
            {business.contact.email && (
              <span className="block mt-1 text-xs">
                You can also reach us at: {business.contact.email}
              </span>
            )}
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                  disabled={loading}
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 bg-blue-600 text-white rounded-md 
                         hover:bg-blue-700 transition-colors
                         ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from {business.name}.
            You can unsubscribe at any time.
          </p>
        </>
      )}
    </div>
  );
}

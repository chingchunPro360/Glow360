import React from 'react';
import { FaClock } from 'react-icons/fa';

const PROMOTIONS = [
  {
    id: 1,
    title: "50% Off First Visit",
    description: "Get 50% off your first haircut with us!",
    expiryDate: "2024-03-31",
    code: "WELCOME50"
  },
  {
    id: 2,
    title: "Free Hair Treatment",
    description: "Book any color service and get a free deep conditioning treatment",
    expiryDate: "2024-03-15",
    code: "FREEHAIR"
  }
];

export default function PromotionCard() {
  const handleClaimOffer = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Offer code ${code} copied to clipboard!`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="font-semibold mb-4">Current Promotions</h3>
      <div className="space-y-4">
        {PROMOTIONS.map((promo) => (
          <div
            key={promo.id}
            className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-white"
          >
            <h4 className="font-semibold text-lg text-blue-600 mb-2">
              {promo.title}
            </h4>
            <p className="text-gray-600 text-sm mb-3">
              {promo.description}
            </p>
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <FaClock className="mr-1" />
              <span>
                Expires: {new Date(promo.expiryDate).toLocaleDateString()}
              </span>
            </div>
            <div className="bg-gray-100 p-2 rounded text-center mb-3">
              <span className="font-mono font-medium">{promo.code}</span>
            </div>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={() => handleClaimOffer(promo.code)}
            >
              Claim Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

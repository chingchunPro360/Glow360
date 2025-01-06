import React from 'react';
import { FaClock } from 'react-icons/fa';
import { getBusinessPromotions } from '../../data';

export default function PromotionCard({ businessId }) {
  const promotions = getBusinessPromotions(businessId);

  if (!promotions.length) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Current Promotions</h3>
      <div className="space-y-4">
        {promotions.map((promo) => (
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
            
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-500">
                <FaClock className="mr-1" />
                Expires: {new Date(promo.expiryDate).toLocaleDateString()}
              </div>
              <div className="text-sm font-medium text-blue-600">
                Code: {promo.code}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

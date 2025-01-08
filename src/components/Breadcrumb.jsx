import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function Breadcrumb({ items }) {
  return (
    <div className="flex items-center text-sm text-gray-600">
      <Link to="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <FaChevronRight className="w-3 h-3 mx-2 text-gray-400" />
          {item.to ? (
            <Link 
              to={`/listings?category=${encodeURIComponent(item.label)}`} // 修改為統一格式
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

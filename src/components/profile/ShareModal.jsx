import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaLink } from 'react-icons/fa';

export default function ShareModal({ business, onClose }) {
  const shareUrl = window.location.href;
  const shareText = `Check out ${business.name} - ${business.description.slice(0, 100)}...`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    email: `mailto:?subject=${encodeURIComponent(`Check out ${business.name}`)}&body=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h3 className="text-xl font-semibold mb-4">Share this business</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <FaFacebook /> Facebook
          </a>
          
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-blue-400 text-white rounded hover:bg-blue-500"
          >
            <FaTwitter /> Twitter
          </a>
          
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          
          <a
            href={shareLinks.email}
            className="flex items-center justify-center gap-2 p-3 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            <FaEnvelope /> Email
          </a>
        </div>

        <div className="flex items-center gap-2 p-3 bg-gray-100 rounded mb-6">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="flex-1 bg-transparent outline-none"
          />
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-600 hover:text-gray-800"
          >
            <FaLink />
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full p-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

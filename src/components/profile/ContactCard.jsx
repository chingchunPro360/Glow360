import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function ContactCard({ business }) {
  const { contact, location } = business;

  return (
    <div className="space-y-4">
      {contact.phone && (
        <div className="flex items-center">
          <FaPhone className="w-5 h-5 text-gray-400 mr-3" />
          <a 
            href={`tel:${contact.phone}`} 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {contact.phone}
          </a>
        </div>
      )}
      {contact.email && (
        <div className="flex items-center">
          <FaEnvelope className="w-5 h-5 text-gray-400 mr-3" />
          <a 
            href={`mailto:${contact.email}`} 
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {contact.email}
          </a>
        </div>
      )}
      {location && (
        <div className="flex items-center">
          <FaMapMarkerAlt className="w-5 h-5 text-gray-400 mr-3" />
          <span className="text-gray-600">{location}</span>
        </div>
      )}
      {(contact.social?.instagram || contact.social?.facebook) && (
        <div className="flex space-x-4 pt-4">
          {contact.social.instagram && (
            <a 
              href={`https://instagram.com/${contact.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          )}
          {contact.social.facebook && (
            <a 
              href={`https://facebook.com/${contact.social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

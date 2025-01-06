import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function PhotoCarousel({ photos = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos.length) return null;

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % photos.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {photos.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {photos.length}
          </div>
        </>
      )}
    </div>
  );
}

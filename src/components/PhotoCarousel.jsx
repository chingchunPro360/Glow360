import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';

const PhotoCarousel = ({ photos = [], aspectRatio = 'aspect-video' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!photos?.length) return null;

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((current) => (current + 1) % photos.length);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((current) => (current - 1 + photos.length) % photos.length);
  };

  return (
    <div className="relative group">
      <div className={`${aspectRatio} bg-gray-100`}>
        <img
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {photos.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full 
                     hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Previous photo"
          >
            <FaChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full 
                     hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="Next photo"
          >
            <FaChevronRight className="w-4 h-4" />
          </button>

          {/* Expand Button */}
          <button
            className="absolute top-4 right-4 bg-black/50 text-white p-2.5 rounded-full 
                     hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100"
            aria-label="View all photos"
          >
            <FaExpand className="w-4 h-4" />
          </button>
          
          {/* Photo Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-full text-sm">
            {currentIndex + 1} / {photos.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-4 right-20 flex gap-2 overflow-x-auto scrollbar-hide">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-16 h-12 flex-shrink-0 rounded overflow-hidden transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-white ring-offset-1' 
                    : 'ring-1 ring-white/30 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PhotoCarousel;

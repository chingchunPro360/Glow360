import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function ScrollableList({ items, selectedItem, onItemClick }) {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setShowLeftArrow(el.scrollLeft > 0);
      setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [items]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (el) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {showLeftArrow && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 px-8 scrollbar-hide"
        onScroll={checkScroll}
      >
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onItemClick(item)}
            className={`flex-none px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                     transition-colors duration-200 ${
                       selectedItem === item
                         ? 'bg-blue-600 text-white'
                         : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                     }`}
          >
            {item}
          </button>
        ))}
      </div>

      {showRightArrow && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        >
          <FaChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      )}
    </div>
  );
}

export default ScrollableList;

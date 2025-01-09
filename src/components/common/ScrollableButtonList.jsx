import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ScrollableButtonList({ 
  items = [],
  selectedItem = '',
  onItemClick,
  className = ''
}) {
  console.log('ScrollableButtonList props:', { items, selectedItem }); // 添加日誌

  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, [items]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!items || items.length === 0) {
    console.log('No items to display'); // 添加日誌
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-3 px-8 scrollbar-hide"
          onScroll={checkScrollButtons}
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
    </div>
  );
}

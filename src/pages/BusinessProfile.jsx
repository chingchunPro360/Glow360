import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaHeart, FaShare } from 'react-icons/fa';
import { MOCK_BUSINESSES } from '../data';
import Header from '../components/Header';
import PhotoCarousel from '../components/PhotoCarousel';
import StaffCarousel from '../components/profile/StaffCarousel';
import ReviewSection from '../components/profile/ReviewSection';
import BookingCard from '../components/profile/BookingCard';
import ContactCard from '../components/profile/ContactCard';
import BusinessHoursCard from '../components/profile/BusinessHoursCard';
import PromotionCard from '../components/profile/PromotionCard';

export default function BusinessProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [hideMainHeader, setHideMainHeader] = useState(false);
  const [isBusinessTitleVisible, setIsBusinessTitleVisible] = useState(true);
  
  const titleRef = useRef(null);
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 手機版邏輯
      if (window.innerWidth < 768) {
        setHideMainHeader(true);
        
        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          setShowStickyHeader(titleRect.bottom <= 0);
        }
      } else {
        // 電腦版邏輯
        setHideMainHeader(true);
        setShowStickyHeader(false);
        
        if (titleRef.current) {
          const titleRect = titleRef.current.getBoundingClientRect();
          setIsBusinessTitleVisible(titleRect.bottom > 0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Business not found</h1>
          <button 
            onClick={() => navigate('/listings')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Back to Listings
          </button>
        </div>
      </div>
    );
  }

  // 根據屏幕大小決定樣式
  const mobileStyles = {
    section: 'md:bg-white md:rounded-lg md:p-6 bg-white border-b border-gray-200 p-1 md:border-none',
    sectionTitle: 'text-xl font-bold mb-4',
    contentSpacing: 'space-y-1 md:space-y-6',
    roundedCorners: 'rounded-[1px] md:rounded-lg'
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* 主Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white transform transition-transform duration-300 ${
        hideMainHeader ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      {/* 手機版 Sticky Header */}
      <div className={`md:hidden fixed left-0 right-0 bg-white border-b transform ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 z-40 shadow-sm top-0`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{business.name}</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaStar className="text-yellow-400" />
                <span>{business.rating}</span>
                <span>•</span>
                <span>{business.category}</span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
            </button>
          </div>
        </div>
      </div>

      <main>
        {/* 商家標題區塊 */}
        <div className="border-b bg-white" ref={titleRef}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{business.name}</h1>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-600">
                  <span>{business.category}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{business.rating}</span>
                    <span className="ml-1">({business.reviewCount})</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    <span>{business.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FaHeart className={isFavorite ? 'text-red-500' : 'text-gray-400'} />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <FaShare className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 主要內容區 */}
        <div className="max-w-7xl mx-auto px-4 py-1 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-8">
            {/* 左側內容區 */}
            <div className={`lg:col-span-2 ${mobileStyles.contentSpacing}`}>
              {/* 照片輪播 */}
              <div className={mobileStyles.roundedCorners}>
                <PhotoCarousel photos={business.photos} />
              </div>

              {/* 手機版聯絡資訊 */}
              <div className="lg:hidden">
                <div className={mobileStyles.section}>
                  <ContactCard business={business} />
                </div>
              </div>

              {/* 手機版營業時間 */}
              <div className="lg:hidden">
                <div className={mobileStyles.section}>
                  <BusinessHoursCard business={business} />
                </div>
              </div>

              {/* 手機版優惠資訊 */}
              <div className="lg:hidden">
                <div className={mobileStyles.section}>
                  <PromotionCard businessId={business.id} />
                </div>
              </div>

              {/* 服務項目 */}
              <div className={mobileStyles.section}>
                <h2 className={mobileStyles.sectionTitle}>Services</h2>
                <div className="grid gap-1 md:gap-4">
                  {business.services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-[1px] md:rounded">
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* 團隊介紹 */}
              <div className={mobileStyles.section}>
                <h2 className={mobileStyles.sectionTitle}>Our Team</h2>
                <StaffCarousel businessId={business.id} />
              </div>

              {/* 關於我們 */}
              <div className={mobileStyles.section}>
                <h2 className={mobileStyles.sectionTitle}>About Us</h2>
                <p className="text-gray-600">
                  {showFullDescription ? business.description : business.description.slice(0, 150)}
                  {business.description.length > 150 && (
                    <button
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="ml-2 text-blue-600 hover:text-blue-700"
                    >
                      {showFullDescription ? 'Show Less' : 'Read More'}
                    </button>
                  )}
                </p>
              </div>

              {/* 評價區塊 */}
              <div className={mobileStyles.section}>
                <ReviewSection business={business} />
              </div>
            </div>

            {/* 桌面版右側邊欄 */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <BookingCard 
                  business={business} 
                  isBusinessTitleVisible={isBusinessTitleVisible}
                />
                <ContactCard business={business} />
                <BusinessHoursCard business={business} />
                <PromotionCard businessId={business.id} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 手機版 Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">
        <button 
          onClick={() => {
            console.log('Booking...');
          }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

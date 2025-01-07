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
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideMainHeader, setHideMainHeader] = useState(false);
  
  const titleRef = useRef(null);
  const business = MOCK_BUSINESSES.find(b => b.id === Number(id));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 控制主Header的顯示/隱藏
      if (currentScrollY > lastScrollY) {
        setHideMainHeader(true);
      } else {
        setHideMainHeader(false);
      }
      setLastScrollY(currentScrollY);

      // 控制商家名稱的sticky header
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        setShowStickyHeader(titleRect.bottom <= (hideMainHeader ? 0 : 64));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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

  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      {/* 主Header - 在手機版捲動時隱藏 */}
      <div className={`fixed top-0 left-0 right-0 z-50 bg-white transform transition-transform duration-300 md:transform-none ${
        hideMainHeader ? '-translate-y-full' : 'translate-y-0'
      }`}>
        <Header 
          showMap={showMap}
          setShowMap={setShowMap}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </div>

      {/* 商家名稱 Sticky Header */}
      <div className={`fixed left-0 right-0 bg-white border-b transform ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'
      } transition-transform duration-300 z-40 shadow-sm ${
        hideMainHeader ? 'top-0' : 'top-16'
      }`}>
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

      <main className={`pt-16 transition-all duration-300 ${hideMainHeader ? 'md:pt-16' : 'md:pt-16'}`}>
        {/* 商家標題區塊 */}
        <div className="border-b" ref={titleRef}>
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
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左側內容區 */}
            <div className="lg:col-span-2 space-y-6">
              {/* 照片輪播 */}
              <PhotoCarousel photos={business.photos} />

              {/* 手機版預約卡片 */}
              <div className="lg:hidden">
                <BookingCard business={business} />
              </div>

              {/* 手機版聯絡資訊 */}
              <div className="lg:hidden">
                <ContactCard business={business} />
              </div>

              {/* 手機版營業時間 */}
              <div className="lg:hidden">
                <BusinessHoursCard business={business} />
              </div>

              {/* 手機版優惠資訊 */}
              <div className="lg:hidden">
                <PromotionCard businessId={business.id} />
              </div>

              {/* 服務項目 */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Services</h2>
                <div className="grid gap-4">
                  {business.services.map((service, index) => (
                    <div key={index} className="p-4 border rounded">
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* 團隊介紹 */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Our Team</h2>
                <StaffCarousel businessId={business.id} />
              </div>

              {/* 關於我們 */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">About Us</h2>
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
              <div className="bg-white rounded-lg p-6">
                <ReviewSection business={business} />
              </div>
            </div>

            {/* 桌面版右側邊欄 */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <BookingCard business={business} />
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
            // 處理預約邏輯
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

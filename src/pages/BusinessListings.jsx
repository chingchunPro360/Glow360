import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusinessCardGrid from '../components/BusinessCardGrid';
import FilterSidebar from '../components/listing/FilterSidebar';
import MapView from '../components/listing/MapView';
import ServiceCategories from '../components/SearchCategories';
import Testimonials from '../components/listing/Testimonials';
import { MOCK_BUSINESSES, CATEGORIES } from '../data/mockBusinesses';

export default function BusinessListings() {
  const [searchParams] = useSearchParams();
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    serviceType: [],
    rating: null,
    priceRange: [],
    location: '',
    openNow: false
  });

  // 從 URL 參數中獲取搜尋條件
  const category = searchParams.get('category');
  const city = searchParams.get('city');
  const searchQuery = searchParams.get('search');

  // 當類別改變時更新過濾器
  useEffect(() => {
    if (category) {
      setSelectedFilters(prev => ({
        ...prev,
        serviceType: [category]
      }));
    }
  }, [category]);

  // 過濾商家列表
  const filteredBusinesses = MOCK_BUSINESSES.filter(business => {
    // 檢查城市
    if (city && business.city !== city) {
      return false;
    }
    // 檢查服務類型
    if (selectedFilters.serviceType.length > 0 && 
        !selectedFilters.serviceType.includes(business.category)) {
      return false;
    }
    // 檢查營業狀態
    if (selectedFilters.openNow && !business.isOpen) {
      return false;
    }
    // 檢查價格範圍
    if (selectedFilters.priceRange.length > 0 && 
        !selectedFilters.priceRange.includes(business.price)) {
      return false;
    }
    // 檢查評分
    if (selectedFilters.rating && business.rating < selectedFilters.rating) {
      return false;
    }
    return true;
  });

  // 生成頁面標題
  const getPageTitle = () => {
    if (searchQuery) return `Search results for "${searchQuery}"`;
    if (category && city) return `${category} in ${city}`;
    if (category) return category;
    if (city) return `Beauty Services in ${city}`;
    return 'All Beauty Services';
  };

  // 渲染麵包屑導航
  const renderBreadcrumb = () => {
    return (
      <div className="flex items-center text-sm text-gray-600 mb-4">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        {category && (
          <>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900">{category}</span>
          </>
        )}
        {city && (
          <>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900">{city}</span>
          </>
        )}
        {searchQuery && !category && !city && (
          <>
            <FaChevronRight className="mx-2 text-gray-400" />
            <span className="text-gray-900">Search Results</span>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        showMap={showMap}
        setShowMap={setShowMap}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      
      <main className="pt-16">
        {/* 類別選擇器 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex overflow-x-auto gap-4 scrollbar-hide">
            {CATEGORIES.map((categoryName) => (
              <Link
                key={categoryName}
                to={`/listings?category=${encodeURIComponent(categoryName)}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  category === categoryName
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {categoryName}
              </Link>
            ))}
          </div>
        </div>

        {/* 主要內容區域 */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              {/* 過濾器側邊欄 */}
              {showFilters && (
                <div className="w-64 flex-shrink-0">
                  <div className="sticky top-24">
                    <FilterSidebar
                      filters={selectedFilters}
                      onChange={setSelectedFilters}
                    />
                  </div>
                </div>
              )}

              {/* 商家列表區域 */}
              <div className="flex-1">
                {/* 麵包屑導航 */}
                {renderBreadcrumb()}

                {/* 頁面標題 */}
                <h1 className="text-2xl font-bold text-gray-900 mb-6">
                  {getPageTitle()}
                </h1>

                {/* 商家列表/地圖視圖 */}
                {showMap ? (
                  <MapView 
                    businesses={filteredBusinesses}
                    onBusinessClick={(business) => {
                      console.log('Business clicked:', business);
                    }}
                  />
                ) : (
                  <BusinessCardGrid 
                    businesses={filteredBusinesses}
                    scrollable={false}
                  />
                )}

                {/* 無結果提示 */}
                {filteredBusinesses.length === 0 && (
                  <div className="text-center py-12">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No businesses found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your filters or search criteria
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 額外內容區域 */}
        <Testimonials />
        <ServiceCategories />
      </main>

      <Footer />
    </div>
  );
}

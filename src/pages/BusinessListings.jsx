import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BusinessCardGrid from '../components/BusinessCardGrid';
import FilterSidebar from '../components/listing/FilterSidebar';
import MapView from '../components/listing/MapView';
import ServiceCategories from '../components/SearchCategories';
import Testimonials from '../components/listing/Testimonials';
import { MOCK_BUSINESSES, CATEGORIES } from '../data/mockBusinesses';

const BusinessListings = () => {
  const { category, city, district } = useParams();
  const navigate = useNavigate();
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    serviceType: [],
    rating: null,
    priceRange: [],
    location: '',
    openNow: false
  });

  // 處理類別點擊
  const handleCategoryClick = (newCategory) => {
    if (city) {
      navigate(`/${encodeURIComponent(newCategory)}/${encodeURIComponent(city)}`);
    } else {
      navigate(`/${encodeURIComponent(newCategory)}`);
    }
  };

  // 當類別改變時更新過濾器
  useEffect(() => {
    if (category) {
      setSelectedFilters(prev => ({
        ...prev,
        serviceType: [decodeURIComponent(category)]
      }));
    }
  }, [category]);

  // 構建麵包屑數據
  const breadcrumbItems = React.useMemo(() => {
    const items = [];
    const decodedCategory = category ? decodeURIComponent(category) : '';
    const decodedCity = city ? decodeURIComponent(city) : '';
    
    // 只添加當前類別
    if (category) {
      items.push({
        label: decodedCategory,
        path: `/${category}`
      });
    }
    
    // 如果有城市，則添加城市
    if (city) {
      items.push({
        label: decodedCity,
        path: `/${category}/${city}`
      });
    }
    
    return items;
  }, [category, city]);

  // 過濾商家列表
  const filteredBusinesses = React.useMemo(() => {
    return MOCK_BUSINESSES.filter(business => {
      if (category && business.category !== decodeURIComponent(category)) return false;
      if (city && business.city !== decodeURIComponent(city)) return false;
      if (selectedFilters.serviceType.length > 0 && 
          !selectedFilters.serviceType.includes(business.category)) return false;
      if (selectedFilters.openNow && !business.isOpen) return false;
      if (selectedFilters.priceRange.length > 0 && 
          !selectedFilters.priceRange.includes(business.price)) return false;
      if (selectedFilters.rating && business.rating < selectedFilters.rating) return false;
      return true;
    });
  }, [category, city, selectedFilters]);

  // 生成頁面標題
  const getPageTitle = () => {
    const decodedCategory = category ? decodeURIComponent(category) : '';
    const decodedCity = city ? decodeURIComponent(city) : '';

    if (decodedCategory && decodedCity) {
      return `${decodedCategory} in ${decodedCity}`;
    }
    if (decodedCategory) {
      return decodedCategory;
    }
    if (decodedCity) {
      return `Beauty Services in ${decodedCity}`;
    }
    return 'All Beauty Services';
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
              <button
                key={categoryName}
                onClick={() => handleCategoryClick(categoryName)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  decodeURIComponent(category) === categoryName
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {categoryName}
              </button>
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
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Link to="/" className="hover:text-blue-600 transition-colors">
                    Home
                  </Link>
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.path}>
                      <FaChevronRight className="mx-2 text-gray-400" />
                      {index === breadcrumbItems.length - 1 ? (
                        <span className="text-gray-900">{item.label}</span>
                      ) : (
                        <Link to={item.path} className="hover:text-blue-600 transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>

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
};

export default BusinessListings;

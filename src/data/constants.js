// 價格範圍
export const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

// 評分分布
export const RATING_DISTRIBUTION = {
  5: 75,
  4: 20,
  3: 3,
  2: 1,
  1: 1
};

// 預設圖片
export const DEFAULT_IMAGES = {
  BUSINESS: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&h=400',
  PROFILE: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
};

// 每頁顯示數量
export const ITEMS_PER_PAGE = 12;

// 搜尋相關常數
export const SEARCH_DEBOUNCE_TIME = 300;
export const MIN_SEARCH_CHARS = 2;

// 營業時間相關
export const AVAILABLE_TIMES = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
];

// 服務相關常數
export const DEFAULT_SERVICE_DURATION = '30 min';
export const SERVICE_DURATIONS = [
  '15 min',
  '30 min',
  '45 min',
  '60 min',
  '90 min',
  '120 min'
];

// 營業時間範圍
export const BUSINESS_HOURS = {
  START: '9:00 AM',
  END: '8:00 PM'
};

// 預約相關
export const BOOKING_ADVANCE_DAYS = 30; // 可提前預約的天數
export const BOOKING_SLOT_DURATION = 30; // 預約時段間隔（分鐘）

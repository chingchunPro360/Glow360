// 預設圖片
export const DEFAULT_IMAGES = {
  BUSINESS: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&h=400',
  PROFILE: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
};

// 預約相關配置
export const BOOKING_CONFIG = {
  MIN_ADVANCE_DAYS: 0,
  MAX_ADVANCE_DAYS: 30,
  SLOT_DURATION: 30, // minutes
  START_HOUR: 9,
  END_HOUR: 20,
  BREAK_HOURS: [12], // lunch break
  WEEKEND_MODIFIER: 1.2, // 20% price increase on weekends
  AVAILABLE_TIMES: [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
  ]
};

// 其他常數...
export const PRICE_RANGES = ['$', '$$', '$$$', '$$$$'];

export const RATING_DISTRIBUTION = {
  5: 75,
  4: 20,
  3: 3,
  2: 1,
  1: 1
};

export const ITEMS_PER_PAGE = 12;

export const SEARCH_DEBOUNCE_TIME = 300;
export const MIN_SEARCH_CHARS = 2;

export const SORT_OPTIONS = {
  RECOMMENDED: 'recommended',
  RATING: 'rating',
  REVIEWS: 'reviews',
  DISTANCE: 'distance',
  PRICE_LOW: 'price_low',
  PRICE_HIGH: 'price_high'
};

export const FILTER_OPTIONS = {
  RATING_LEVELS: [4, 3, 2],
  PRICE_RANGES: ['$', '$$', '$$$', '$$$$'],
  DISTANCE_OPTIONS: [1, 3, 5, 10, 20] // miles
};

export const CONTACT_FORM = {
  FIELDS: {
    NAME: {
      min: 2,
      max: 50,
      required: true
    },
    EMAIL: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      required: true
    },
    PHONE: {
      pattern: /^\+?[\d\s-]{10,}$/,
      required: false
    },
    MESSAGE: {
      min: 10,
      max: 500,
      required: true
    }
  },
  ERROR_MESSAGES: {
    REQUIRED: 'This field is required',
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PHONE: 'Please enter a valid phone number',
    TOO_SHORT: 'This field is too short',
    TOO_LONG: 'This field is too long'
  }
};

export const SHARE_OPTIONS = [
  {
    platform: 'facebook',
    label: 'Facebook',
    baseUrl: 'https://www.facebook.com/sharer/sharer.php'
  },
  {
    platform: 'twitter',
    label: 'Twitter',
    baseUrl: 'https://twitter.com/intent/tweet'
  },
  {
    platform: 'whatsapp',
    label: 'WhatsApp',
    baseUrl: 'https://wa.me'
  },
  {
    platform: 'email',
    label: 'Email',
    baseUrl: 'mailto:'
  }
];

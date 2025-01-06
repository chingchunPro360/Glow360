export const VALIDATION_RULES = {
  // 用戶資料驗證
  user: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-Z\s-]+$/
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    phone: {
      required: false,
      pattern: /^\+?[\d\s-]{10,}$/
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    }
  },

  // 預約驗證
  booking: {
    date: {
      required: true,
      minDate: new Date(),
      maxDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
    },
    time: {
      required: true,
      format: 'HH:mm'
    },
    service: {
      required: true
    },
    notes: {
      maxLength: 500
    }
  },

  // 評論驗證
  review: {
    rating: {
      required: true,
      min: 1,
      max: 5
    },
    title: {
      required: true,
      maxLength: 100
    },
    content: {
      required: true,
      minLength: 10,
      maxLength: 1000
    },
    images: {
      maxFiles: 5,
      maxSize: 5 * 1024 * 1024, // 5MB
      allowedTypes: ['image/jpeg', 'image/png']
    }
  }
};

export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  password: 'Password must contain at least 8 characters, including uppercase, lowercase, number and special character',
  minLength: (min) => `Must be at least ${min} characters`,
  maxLength: (max) => `Must be no more than ${max} characters`,
  pattern: 'Please enter a valid value',
  date: {
    min: 'Date cannot be in the past',
    max: 'Date cannot be more than 30 days in the future'
  },
  file: {
    size: 'File size must be less than 5MB',
    type: 'Only JPEG and PNG files are allowed'
  }
};

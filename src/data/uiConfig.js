// UI配置
export const UI_CONFIG = {
  // 顏色主題
  theme: {
    primary: {
      main: 'blue-600',
      hover: 'blue-700',
      light: 'blue-50'
    },
    secondary: {
      main: 'gray-600',
      hover: 'gray-700',
      light: 'gray-50'
    },
    success: {
      main: 'green-600',
      hover: 'green-700',
      light: 'green-50'
    },
    error: {
      main: 'red-600',
      hover: 'red-700',
      light: 'red-50'
    }
  },

  // 間距
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },

  // 圓角
  borderRadius: {
    sm: 'rounded',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  },

  // 陰影
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg'
  },

  // 動畫
  transitions: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500'
  },

  // 字體大小
  typography: {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl'
  }
};

// 響應式布局配置
export const LAYOUT_CONFIG = {
  container: {
    max: 'max-w-7xl',
    padding: 'px-4 sm:px-6 lg:px-8'
  },
  grid: {
    cols: {
      mobile: 'grid-cols-1',
      tablet: 'sm:grid-cols-2',
      desktop: 'lg:grid-cols-3'
    },
    gap: 'gap-6'
  }
};

// 組件特定配置
export const COMPONENT_CONFIG = {
  card: {
    wrapper: 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow',
    image: 'w-full h-48 object-cover',
    body: 'p-4',
    footer: 'px-4 py-3 border-t'
  },
  button: {
    base: 'px-4 py-2 rounded-md transition-colors',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    disabled: 'opacity-50 cursor-not-allowed'
  },
  input: {
    base: 'w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500',
    error: 'border-red-500 focus:ring-red-500'
  }
};

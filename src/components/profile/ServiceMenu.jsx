import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DEFAULT_SERVICE_DURATION } from '../../data';

// 服務分類函數
const categorizeServices = (services) => {
  return services.reduce((acc, service) => {
    const category = service.name.split(' ')[0];
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({
      ...service,
      duration: service.duration || DEFAULT_SERVICE_DURATION
    });
    return acc;
  }, {});
};

// ... 其餘代碼保持不變

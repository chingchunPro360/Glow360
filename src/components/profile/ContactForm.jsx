import React, { useState } from 'react';
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FORM_VALIDATION, UI_CONFIG, COMPONENT_CONFIG } from '../../data';

export default function ContactForm({ business, onClose }) {
  // ... 其他代碼保持不變

  const validateForm = (data) => {
    const errors = {};
    
    if (data.name.length < FORM_VALIDATION.NAME.MIN_LENGTH || 
        data.name.length > FORM_VALIDATION.NAME.MAX_LENGTH) {
      errors.name = `Name must be between ${FORM_VALIDATION.NAME.MIN_LENGTH} and ${FORM_VALIDATION.NAME.MAX_LENGTH} characters`;
    }

    if (!FORM_VALIDATION.EMAIL.PATTERN.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (data.message.length < FORM_VALIDATION.MESSAGE.MIN_LENGTH || 
        data.message.length > FORM_VALIDATION.MESSAGE.MAX_LENGTH) {
      errors.message = `Message must be between ${FORM_VALIDATION.MESSAGE.MIN_LENGTH} and ${FORM_VALIDATION.MESSAGE.MAX_LENGTH} characters`;
    }

    return errors;
  };

  // ... 其他代碼保持不變

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white ${UI_CONFIG.borderRadius.lg} ${UI_CONFIG.shadows.lg} p-6 max-w-md w-full mx-4`}>
        {/* ... 表單內容 ... */}
        <input
          className={`${COMPONENT_CONFIG.input.base} ${errors.name ? COMPONENT_CONFIG.input.error : ''}`}
          // ... 其他屬性
        />
        {/* ... 其他表單元素 ... */}
      </div>
    </div>
  );
}

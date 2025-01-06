import React, { useState } from 'react';
import { FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FORM_CONFIG, VALIDATION_RULES, ERROR_MESSAGES } from '../../data';

export default function ContactForm({ business, onClose }) {
  const [formData, setFormData] = useState(
    FORM_CONFIG.contact.fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: ''
    }), {})
  );
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateField = (name, value) => {
    const rules = VALIDATION_RULES.user[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return ERROR_MESSAGES.required;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return ERROR_MESSAGES[name] || ERROR_MESSAGES.pattern;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return ERROR_MESSAGES.minLength(rules.minLength);
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return ERROR_MESSAGES.maxLength(rules.maxLength);
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    FORM_CONFIG.contact.fields.forEach(field => {
      const error = validateField(field.name, formData[field.name]);
      if (error) {
        newErrors[field.name] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 即時驗證
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setErrors({});

    try {
      // 模擬 API 呼叫
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 成功送出
      setSuccess(true);
      console.log('Contact form submitted:', {
        businessId: business.id,
        ...formData
      });

      // 3秒後關閉表單
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (err) {
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Contact {business.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <FaTimes />
          </button>
        </div>

        {/* Business Contact Info */}
        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            {business.contact.phone && (
              <div className="flex items-center text-sm">
                <FaPhone className="text-gray-400 mr-2" />
                <a href={`tel:${business.contact.phone}`} className="text-gray-600 hover:text-blue-600">
                  {business.contact.phone}
                </a>
              </div>
            )}
            {business.contact.email && (
              <div className="flex items-center text-sm">
                <FaEnvelope className="text-gray-400 mr-2" />
                <a href={`mailto:${business.contact.email}`} className="text-gray-600 hover:text-blue-600">
                  {business.contact.email}
                </a>
              </div>
            )}
            {business.location && (
              <div className="flex items-center text-sm">
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <span className="text-gray-600">{business.location}</span>
              </div>
            )}
          </div>
        </div>

        {success ? (
          <div className="text-center text-green-600 py-4">
            <p className="font-medium">Message sent successfully!</p>
            <p className="text-sm mt-2">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {FORM_CONFIG.contact.fields.map(field => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 
                             ${errors[field.name] ? 'border-red-500' : 'border-gray-300'}`}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500
                             ${errors[field.name] ? 'border-red-500' : 'border-gray-300'}`}
                  />
                )}
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
                )}
              </div>
            ))}

            {errors.submit && (
              <p className="text-red-500 text-sm">{errors.submit}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700
                       transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

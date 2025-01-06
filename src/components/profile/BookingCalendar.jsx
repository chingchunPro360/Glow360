import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import { 
  FORM_CONFIG, 
  VALIDATION_RULES, 
  ERROR_MESSAGES,
  BOOKING_CONFIG
} from '../../data';

export default function BookingCalendar({ business }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // 獲取可預約日期範圍
  const getDateLimits = () => {
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const maxDate = new Date(today.setDate(today.getDate() + BOOKING_CONFIG.MAX_ADVANCE_DAYS))
      .toISOString().split('T')[0];
    return { minDate, maxDate };
  };

  // 檢查時段是否可用
  const isTimeSlotAvailable = (time) => {
    // 這裡可以添加實際的時段檢查邏輯
    return true;
  };

  // 計算服務價格
  const calculatePrice = (service, date) => {
    const basePrice = business.services.find(s => s === service)?.price || 0;
    const selectedDate = new Date(date);
    const isWeekend = [0, 6].includes(selectedDate.getDay());
    return isWeekend ? basePrice * BOOKING_CONFIG.WEEKEND_MODIFIER : basePrice;
  };

  const validateField = (name, value) => {
    const rules = VALIDATION_RULES.booking[name];
    if (!rules) return '';

    if (rules.required && !value) {
      return ERROR_MESSAGES.required;
    }

    if (name === 'date') {
      const { minDate, maxDate } = getDateLimits();
      if (value < minDate) {
        return ERROR_MESSAGES.date.min;
      }
      if (value > maxDate) {
        return ERROR_MESSAGES.date.max;
      }
    }

    if (name === 'time' && !isTimeSlotAvailable(value)) {
      return 'This time slot is not available';
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
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
    try {
      // 模擬 API 呼叫
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const bookingData = {
        ...formData,
        businessId: business.id,
        price: calculatePrice(formData.service, formData.date)
      };
      
      console.log('Booking submitted:', bookingData);
      setSuccess(true);
      
      // 重置表單
      setTimeout(() => {
        setFormData({
          date: '',
          time: '',
          service: '',
          notes: ''
        });
        setSuccess(false);
      }, 3000);
      
    } catch (error) {
      setErrors({ submit: 'Booking failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const { minDate, maxDate } = getDateLimits();

  return (
    <div className="space-y-6">
      {success ? (
        <div className="p-4 bg-green-50 rounded-lg text-center">
          <h3 className="text-green-800 font-medium mb-2">Booking Confirmed!</h3>
          <p className="text-green-600">
            Thank you for your booking. We'll send you a confirmation email shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Service
              <span className="text-red-500">*</span>
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500
                       ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a service</option>
              {business.services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-500">{errors.service}</p>
            )}
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
              <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={minDate}
              max={maxDate}
              required
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500
                       ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-500">{errors.date}</p>
            )}
          </div>

          {/* Time Selection */}
          {formData.date && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
                <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {BOOKING_CONFIG.AVAILABLE_TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleChange({
                      target: { name: 'time', value: time }
                    })}
                    disabled={!isTimeSlotAvailable(time)}
                    className={`px-4 py-2 text-sm rounded-md ${
                      formData.time === time
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                    } ${!isTimeSlotAvailable(time) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="mt-1 text-sm text-red-500">{errors.time}</p>
              )}
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500
                       ${errors.notes ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Any special requests or notes?"
            />
            {errors.notes && (
              <p className="mt-1 text-sm text-red-500">{errors.notes}</p>
            )}
          </div>

          {errors.submit && (
            <p className="text-red-500 text-sm text-center">{errors.submit}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700
                     transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      )}
    </div>
  );
}

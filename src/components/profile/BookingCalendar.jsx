import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';
import { AVAILABLE_TIMES } from '../../data';

export default function BookingCalendar({ business }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showForm, setShowForm] = useState(false);

  // ... 其餘代碼保持不變

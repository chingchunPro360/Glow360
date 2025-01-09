
import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TREATMENTS } from '../data/mockBusinesses';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TreatmentList() {
  const { category, city, treatment: currentTreatment } = useParams();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const decodedCategory = category ? decodeURIComponent(category) : '';
  const treatments = TREATMENTS[decodedCategory] || [];

  const handleTreatmentClick = (treatment) => {
    const encodedTreatment = encodeURIComponent(treatment);
    const encodedCity = city ? encodeURIComponent(city) : '';
    
    if (currentTreatment === encodedTreatment) {
      if (city) {
        navigate(`/${category}/${city}`);
      } else {
        navigate(`/${category}`);
      }
    } else {
      if (city) {
        navigate(`/${category}/${encodedTreatment}/${city}`);
      } else {
        navigate(`/${category}/${encodedTreatment}`);
      }
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (!treatments.length) return null;

  const decodedCurrent
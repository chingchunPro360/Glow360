export const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2024-02-15",
    text: "Amazing experience! The staff was professional and friendly. Will definitely come back!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    businessId: 1 // 關聯到 Elite Hair Studio
  },
  {
    id: 2,
    name: "John D.",
    rating: 4,
    date: "2024-02-14",
    text: "Great service and atmosphere. Really enjoyed my haircut.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    businessId: 1
  },
  {
    id: 3,
    name: "Emily R.",
    rating: 5,
    date: "2024-02-13",
    text: "The best salon experience I've ever had. Truly professional and skilled staff.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    businessId: 1
  },
  {
    id: 4,
    name: "Michael P.",
    rating: 5,
    text: "Professional service, great attention to detail. Worth every penny!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    businessId: 2
  },
  {
    id: 5,
    name: "Lisa K.",
    rating: 4,
    text: "Excellent nail art and very hygienic environment. Highly recommend!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    businessId: 3
  }
];

// 首頁展示用的精選評論
export const FEATURED_REVIEWS = MOCK_REVIEWS.slice(0, 3);

// 依商家ID獲取評論
export const getBusinessReviews = (businessId) => {
  return MOCK_REVIEWS.filter(review => review.businessId === businessId);
};

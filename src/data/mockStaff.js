export const MOCK_STAFF = [
  {
    id: 1,
    businessId: 1, // 關聯到 Elite Hair Studio
    name: "John Smith",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    specialties: ["Men's Cuts", "Fades", "Beard Trimming"],
    rating: 4.9,
    reviewCount: 156
  },
  {
    id: 2,
    businessId: 1,
    name: "Sarah Johnson",
    role: "Color Specialist",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    specialties: ["Hair Coloring", "Highlights", "Balayage"],
    rating: 4.8,
    reviewCount: 142
  },
  {
    id: 3,
    businessId: 1,
    name: "Michael Chen",
    role: "Master Barber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    specialties: ["Classic Cuts", "Hot Towel Shave", "Styling"],
    rating: 4.9,
    reviewCount: 189
  }
];

// 依商家ID獲取員工資料
export const getBusinessStaff = (businessId) => {
  return MOCK_STAFF.filter(staff => staff.businessId === businessId);
};

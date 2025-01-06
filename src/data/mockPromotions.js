export const MOCK_PROMOTIONS = [
  {
    id: 1,
    businessId: 1, // 關聯到 Elite Hair Studio
    title: "50% Off First Visit",
    description: "Get 50% off your first haircut with us!",
    expiryDate: "2024-03-31",
    code: "WELCOME50"
  },
  {
    id: 2,
    businessId: 1,
    title: "Free Hair Treatment",
    description: "Book any color service and get a free deep conditioning treatment",
    expiryDate: "2024-03-15",
    code: "FREEHAIR"
  },
  {
    id: 3,
    businessId: 2,
    title: "20% Off Color Services",
    description: "Get 20% off any color service this month",
    expiryDate: "2024-03-31",
    code: "COLOR20"
  }
];

// 依商家ID獲取促銷資訊
export const getBusinessPromotions = (businessId) => {
  return MOCK_PROMOTIONS.filter(promo => promo.businessId === businessId);
};

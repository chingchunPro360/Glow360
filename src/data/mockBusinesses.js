export const CATEGORIES = [
  // 美髮相關
  'Hair Salon',
  'Barbershop',
  'Hair Coloring',
  'Hair Treatment',
  'Hair Extensions',
  'Blowout',
  'Hair Styling',
  'Brazilian Keratin',
  'Kids Haircut',
  
  // 美甲相關
  'Nail Salon',
  'Manicure',
  'Pedicure',
  'Gel Nails',
  'Nail Art',
  'Acrylic Nails',
  'Nail Extensions',
  'Paraffin Treatment',
  'Express Manicure',
  
  // 美容與護理
  'Spa',
  'Massage',
  'Beauty Salon',
  'Facial',
  'Waxing',
  'Makeup',
  'Lashes',
  'Body Treatment',
  'Skin Care',
  'Threading'
];

export const MOCK_BUSINESSES = [
  {
    id: 1,
    name: "Elite Hair Studio",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.8,
    reviewCount: 128,
    description: "Luxury hair salon offering premium services with expert stylists and a serene atmosphere. Our team of experienced professionals is dedicated to helping you achieve your perfect look.",
    category: "Hair Salon",
    location: "123 Main St, Downtown",
    price: "$$",
    isOpen: true,
    distance: "0.8 mi",
    services: [
      "Women's Haircut",
      "Men's Haircut",
      "Hair Coloring",
      "Highlights",
      "Balayage",
      "Hair Treatment",
      "Styling",
      "Extensions"
    ],
    contact: {
      phone: "123-456-7890",
      email: "info@elitehairstudio.com",
      website: "www.elitehairstudio.com",
      social: {
        instagram: "elitehairstudio",
        facebook: "EliteHairStudio",
        twitter: "EliteHair"
      }
    },
    businessHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 7:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed"
    }
  },
  // ... 其他商家資料保持不變
];

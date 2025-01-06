// 擴充的服務類別定義
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
  {
    id: 2,
    name: "Style & Grace",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 143,
    description: "Contemporary hair styling and beauty services with a focus on the latest trends",
    category: "Hair Salon",
    location: "Fashion District",
    price: "$$$",
    isOpen: true,
    distance: "3.1 mi",
    services: [
      "Hair Styling",
      "Color Treatment",
      "Extensions",
      "Blowout"
    ],
    contact: {
      phone: "123-456-7891",
      email: "info@styleandgrace.com",
      website: "www.styleandgrace.com",
      social: {
        instagram: "styleandgrace",
        facebook: "StyleAndGrace",
        twitter: "StyleGrace"
      }
    },
    businessHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 7:00 PM",
      friday: "9:00 AM - 7:00 PM",
      saturday: "10:00 AM - 5:00 PM",
      sunday: "Closed"
    }
  },
  {
    id: 3,
    name: "Nail Paradise",
    image: "https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1607779097040-26e80aa4576b?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.7,
    reviewCount: 89,
    description: "Premium nail care services in a relaxing environment",
    category: "Nail Salon",
    location: "Downtown Shopping Center",
    price: "$$",
    isOpen: true,
    distance: "1.2 mi",
    services: [
      "Manicure",
      "Pedicure",
      "Gel Nails",
      "Nail Art",
      "Acrylic Extensions"
    ],
    contact: {
      phone: "123-456-7892",
      email: "info@nailparadise.com",
      website: "www.nailparadise.com",
      social: {
        instagram: "nailparadise",
        facebook: "NailParadise"
      }
    },
    businessHours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "11:00 AM - 5:00 PM"
    }
  },
  {
    id: 4,
    name: "Zen Spa & Beauty",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 156,
    description: "Luxurious spa treatments and beauty services for ultimate relaxation",
    category: "Spa",
    location: "Wellness Center",
    price: "$$$",
    isOpen: true,
    distance: "2.4 mi",
    services: [
      "Massage",
      "Facial",
      "Body Treatment",
      "Waxing",
      "Aromatherapy"
    ],
    contact: {
      phone: "123-456-7893",
      email: "info@zenspa.com",
      website: "www.zenspa.com",
      social: {
        instagram: "zenspabeauty",
        facebook: "ZenSpaBeauty"
      }
    },
    businessHours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 9:00 PM",
      friday: "9:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "10:00 AM - 6:00 PM"
    }
  },
  {
    id: 5,
    name: "Lash & Brow Studio",
    image: "https://images.unsplash.com/photo-1589710502678-b3f261c1389e?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1589710502678-b3f261c1389e?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1583001809873-a128495da465?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.8,
    reviewCount: 112,
    description: "Specialized in lash extensions and brow shaping services",
    category: "Lashes",
    location: "Beauty Mall",
    price: "$$",
    isOpen: true,
    distance: "1.7 mi",
    services: [
      "Lash Extensions",
      "Lash Lift",
      "Brow Shaping",
      "Brow Tinting",
      "Microblading"
    ],
    contact: {
      phone: "123-456-7894",
      email: "info@lashstudio.com",
      website: "www.lashstudio.com",
      social: {
        instagram: "lashbrowstudio",
        facebook: "LashBrowStudio"
      }
    },
    businessHours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 8:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed"
    }
  }
];

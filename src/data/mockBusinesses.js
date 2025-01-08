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

// 新增城市相關資料
export const MOCK_BUSINESSES = [
  // New York Businesses
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
    description: "Luxury hair salon offering premium services with expert stylists and a serene atmosphere.",
    category: "Hair Salon",
    country: "United States",
    city: "New York",
    neighborhood: "Manhattan",
    location: "123 5th Ave, Manhattan, New York",
    coordinates: {
      latitude: 40.7829,
      longitude: -73.9654
    },
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
        facebook: "EliteHairStudio"
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
  // Los Angeles Businesses
  {
    id: 2,
    name: "Luxe Hair Lounge",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.7,
    reviewCount: 156,
    description: "Experience luxury hair care in our modern, upscale salon.",
    category: "Hair Coloring",
    country: "United States",
    city: "Los Angeles",
    neighborhood: "Beverly Hills",
    location: "456 Rodeo Dr, Beverly Hills, Los Angeles",
    coordinates: {
      latitude: 34.0736,
      longitude: -118.4004
    },
    price: "$$$",
    isOpen: true,
    distance: "1.2 mi",
    services: [
      "Precision Haircut",
      "Blow Dry & Style",
      "Hair Treatments",
      "Color Services",
      "Bridal Styling",
      "Extensions"
    ],
    contact: {
      phone: "234-567-8901",
      email: "hello@luxehairlounge.com",
      website: "www.luxehairlounge.com",
      social: {
        instagram: "luxehairlounge",
        facebook: "LuxeHairLounge"
      }
    },
    businessHours: {
      monday: "10:00 AM - 8:00 PM",
      tuesday: "10:00 AM - 8:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 9:00 PM",
      friday: "10:00 AM - 9:00 PM",
      saturday: "9:00 AM - 7:00 PM",
      sunday: "11:00 AM - 5:00 PM"
    }
  },
  // Chicago Businesses
  {
    id: 3,
    name: "Style & Grace Salon",
    image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 203,
    description: "Where style meets sophistication. Expert stylists create stunning looks.",
    category: "Hair Cut",
    country: "United States",
    city: "Chicago",
    neighborhood: "River North",
    location: "789 N Michigan Ave, Chicago",
    coordinates: {
      latitude: 41.8781,
      longitude: -87.6298
    },
    price: "$$",
    isOpen: true,
    distance: "1.5 mi",
    services: [
      "Designer Cuts",
      "Creative Color",
      "Keratin Treatments",
      "Special Event Styling",
      "Hair Extensions",
      "Scalp Treatments"
    ],
    contact: {
      phone: "345-678-9012",
      email: "info@styleandgrace.com",
      website: "www.styleandgrace.com",
      social: {
        instagram: "styleandgrace",
        facebook: "StyleAndGrace"
      }
    },
    businessHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "8:00 AM - 5:00 PM",
      sunday: "Closed"
    }
  },
  // Miami Businesses
  {
    id: 4,
    name: "Chic & Shine",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.6,
    reviewCount: 167,
    description: "Contemporary salon focusing on modern techniques and trends.",
    category: "Hair Extensions",
    country: "United States",
    city: "Miami",
    neighborhood: "South Beach",
    location: "321 Ocean Drive, Miami Beach",
    coordinates: {
      latitude: 25.7617,
      longitude: -80.1918
    },
    price: "$$",
    isOpen: true,
    distance: "2.1 mi",
    services: [
      "Contemporary Cuts",
      "Fashion Color",
      "Balayage",
      "Brazilian Blowout",
      "Extensions",
      "Styling"
    ],
    contact: {
      phone: "456-789-0123",
      email: "hello@chicandshine.com",
      website: "www.chicandshine.com",
      social: {
        instagram: "chicandshine",
        facebook: "ChicAndShine"
      }
    },
    businessHours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 8:00 PM",
      thursday: "10:00 AM - 8:00 PM",
      friday: "10:00 AM - 7:00 PM",
      saturday: "9:00 AM - 6:00 PM",
      sunday: "Closed"
    }
  },
  // San Francisco Businesses
  {
    id: 5,
    name: "Classic Cuts Barbershop",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1599351431202-881b291de4c5?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 245,
    description: "Traditional barbershop offering classic cuts and hot towel shaves.",
    category: "Barbershop",
    country: "United States",
    city: "San Francisco",
    neighborhood: "Financial District",
    location: "567 Market St, San Francisco",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194
    },
    price: "$$",
    isOpen: true,
    distance: "0.5 mi",
    services: [
      "Classic Haircuts",
      "Hot Towel Shaves",
      "Beard Trims",
      "Line Ups",
      "Facial Grooming",
      "Hair Styling"
    ],
    contact: {
      phone: "567-890-1234",
      email: "info@classiccuts.com",
      website: "www.classiccuts.com",
      social: {
        instagram: "classiccuts",
        facebook: "ClassicCutsBarbershop"
      }
    },
    businessHours: {
      monday: "8:00 AM - 7:00 PM",
      tuesday: "8:00 AM - 7:00 PM",
      wednesday: "8:00 AM - 7:00 PM",
      thursday: "8:00 AM - 8:00 PM",
      friday: "8:00 AM - 8:00 PM",
      saturday: "7:00 AM - 6:00 PM",
      sunday: "9:00 AM - 3:00 PM"
    }
  }
];

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
  // Hair Salon Category
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
    description: "Experience luxury hair care in our modern, upscale salon. We specialize in creating personalized looks that enhance your natural beauty.",
    category: "Hair Salon",
    location: "456 Fashion Ave, Midtown",
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
  {
    id: 3,
    name: "Style & Grace Salon",
    image: "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 203,
    description: "Where style meets sophistication. Our expert stylists create stunning looks tailored to your personality and lifestyle.",
    category: "Hair Salon",
    location: "789 Beauty Blvd, Westside",
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
  // More Hair Salons...
  {
    id: 4,
    name: "Chic & Shine",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.6,
    reviewCount: 167,
    description: "Contemporary salon focusing on modern techniques and trends. We help you express your unique style through your hair.",
    category: "Hair Salon",
    location: "321 Modern Ave, Eastside",
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
  // Barbershop Category
  {
    id: 5,
    name: "Classic Cuts Barbershop",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1599351431202-881b291de4c5?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 245,
    description: "Traditional barbershop offering classic cuts and hot towel shaves in a vintage atmosphere. Experience the art of traditional grooming.",
    category: "Barbershop",
    location: "567 Vintage Row, Downtown",
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
  },
  {
    id: 6,
    name: "Modern Man Barbers",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1599351431202-881b291de4c5?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1592647420148-bfcc177e2117?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1596728325488-58c87691e9af?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.8,
    reviewCount: 189,
    description: "Contemporary barbershop combining traditional techniques with modern style. Perfect for the fashion-forward gentleman.",
    category: "Barbershop",
    location: "890 Urban St, Midtown",
    price: "$$$",
    isOpen: true,
    distance: "1.8 mi",
    services: [
      "Modern Cuts",
      "Precision Fades",
      "Beard Styling",
      "Color Services",
      "Scalp Treatments",
      "Grooming Consultations"
    ],
    contact: {
      phone: "678-901-2345",
      email: "hello@modernman.com",
      website: "www.modernman.com",
      social: {
        instagram: "modernmanbarbers",
        facebook: "ModernManBarbers"
      }
    },
    businessHours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 9:00 PM",
      friday: "9:00 AM - 9:00 PM",
      saturday: "8:00 AM - 7:00 PM",
      sunday: "10:00 AM - 4:00 PM"
    }
  },
  // Hair Coloring Category
  {
    id: 7,
    name: "Color Me Beautiful",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1597248881519-db089d3744a5?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.9,
    reviewCount: 276,
    description: "Specializing in creative hair coloring and innovative techniques. Our color specialists create stunning, personalized looks.",
    category: "Hair Coloring",
    location: "123 Rainbow Ave, Artsy District",
    price: "$$$",
    isOpen: true,
    distance: "1.3 mi",
    services: [
      "Creative Color",
      "Balayage",
      "Highlights",
      "Color Correction",
      "Fashion Colors",
      "Color Maintenance"
    ],
    contact: {
      phone: "789-012-3456",
      email: "info@colormebeautiful.com",
      website: "www.colormebeautiful.com",
      social: {
        instagram: "colormebeautiful",
        facebook: "ColorMeBeautifulSalon"
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
  {
    id: 8,
    name: "Spectrum Hair Studio",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&h=400",
    photos: [
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&h=675",
      "https://images.unsplash.com/photo-1595475884562-073c30d45670?auto=format&fit=crop&w=1200&h=675"
    ],
    rating: 4.7,
    reviewCount: 198,
    description: "Innovative color studio specializing in vibrant, long-lasting hair color. We create head-turning looks that express your personality.",
    category: "Hair Coloring",
    location: "456 Vibrant St, Fashion District",
    price: "$$",
    isOpen: true,
    distance: "2.4 mi",
    services: [
      "Custom Color",
      "Ombre",
      "Highlights",
      "Lowlights",
      "Pastel Colors",
      "Color Touch-ups"
    ],
    contact: {
      phone: "890-123-4567",
      email: "hello@spectrumhair.com",
      website: "www.spectrumhair.com",
      social: {
        instagram: "spectrumhair",
        facebook: "SpectrumHairStudio"
      }
    },
    businessHours: {
      monday: "9:00 AM - 7:00 PM",
      tuesday: "9:00 AM - 7:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "8:00 AM - 5:00 PM",
      sunday: "Closed"
    }
  }
];

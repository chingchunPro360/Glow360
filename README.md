# Glow360 Beauty Services Platform - Implementation Guide

## URL Structure
All business listing pages follow these patterns:
```plaintext
/:venue                                 # e.g., /hair-salon
/:venue/:city                          # e.g., /hair-salon/new-york
/:venue/:city/:section                 # e.g., /hair-salon/new-york/manhattan
/:venue/treatment-city                 # e.g., /hair-salon/hair-coloring-new-york
/:venue/treatment-city/treatment-section # e.g., /hair-salon/hair-coloring-manhattan
```

### URL Parameters
- `venue`: Maps to `category` in mockBusinesses (e.g., "Hair Salon")
- `treatment`: Maps to `services` in mockBusinesses (e.g., "Hair Coloring")
- `city`: Maps to business `city` field (e.g., "New York")
- `section`: Maps to business `neighborhood` field (e.g., "Manhattan")

## File Structure
```plaintext
src/
├── components/
│   ├── common/
│   │   ├── Breadcrumb.jsx        # Dynamic breadcrumb based on current route
│   │   ├── BusinessCard.jsx      # Business information card
│   │   ├── BusinessCardGrid.jsx  # Grid layout for business cards
│   │   └── SearchBar.jsx         # Global search component
│   └── layout/
│       ├── Header.jsx            # Global header with search
│       └── Footer.jsx            # Global footer
├── pages/
│   ├── HomePage.jsx              # Landing page
│   ├── VenuePage.jsx            # /:venue listing
│   ├── VenueCityPage.jsx        # /:venue/:city listing
│   ├── VenueSectionPage.jsx     # /:venue/:city/:section listing
│   └── VenueTreatmentPage.jsx   # /:venue/treatment-city listing
├── utils/
│   ├── urlHelpers.js            # URL formatting and parsing
│   ├── filterHelpers.js         # Business filtering logic
│   └── seoHelpers.js            # SEO metadata generators
└── data/
    ├── mockBusinesses.js        # Business data
    └── constants.js             # Route metadata and configurations
```

## Data Flow
1. **URL Processing**
   ```javascript
   // Input: /hair-salon/hair-coloring-new-york
   // Output: { venue: "Hair Salon", treatment: "Hair Coloring", city: "New York" }
   ```

2. **Business Filtering**
   ```javascript
   // Filter chain:
   1. Match venue (category)
   2. Match city/section if present
   3. Match treatment if present
   4. Apply additional filters (rating, price, etc.)
   ```

3. **Search Suggestions**
   ```javascript
   // Priority order:
   1. Exact venue matches
   2. Venue + city matches
   3. Venue + treatment matches
   4. Partial matches
   ```

## Route Handling
```javascript
// Route definitions with metadata
const ROUTE_CONFIG = {
  venue: {
    path: '/:venue',
    component: VenuePage,
    metadata: (params) => ({
      title: `${params.venue} Services`,
      description: `Find the best ${params.venue} services`
    })
  },
  venueCity: {
    path: '/:venue/:city',
    component: VenueCityPage,
    metadata: (params) => ({
      title: `${params.venue} in ${params.city}`,
      description: `Discover ${params.venue} services in ${params.city}`
    })
  }
  // ... other routes
};
```

## SEO Implementation
1. **Page Metadata**
   ```javascript
   // Each page should include:
   - Title tag
   - Meta description
   - Schema.org markup
   - Open Graph tags
   ```

2. **URL Canonicalization**
   ```javascript
   // Rules:
   - Convert to lowercase
   - Replace spaces with hyphens
   - Remove special characters
   - Handle accented characters
   ```

3. **Breadcrumb Schema**
   ```javascript
   // Example:
   {
     "@type": "BreadcrumbList",
     "itemListElement": [
       {
         "@type": "ListItem",
         "position": 1,
         "item": {
           "@id": "/hair-salon",
           "name": "Hair Salon"
         }
       },
       // ... more items
     ]
   }
   ```

## Component Behaviors

### SearchBar
1. **Context Awareness**
   - Detect current route parameters
   - Adjust suggestions based on context
   - Maintain search history

2. **Navigation Logic**
   ```javascript
   if (hasVenue && hasTreatment && hasCity) {
     // Navigate to treatment-city page
   } else if (hasVenue && hasCity) {
     // Navigate to city page
   } // ... etc
   ```

### BusinessCardGrid
1. **Filtering Logic**
   - Primary filters (venue, city, treatment)
   - Secondary filters (rating, price, etc.)
   - Sort options

2. **Pagination/Infinite Scroll**
   - Load more functionality
   - Maintain scroll position
   - Cache loaded items

## Data Requirements

### Business Object Structure
```javascript
{
  id: string,
  name: string,
  category: string,      // maps to venue
  services: string[],    // maps to treatments
  city: string,
  neighborhood: string,  // maps to section
  rating: number,
  reviewCount: number,
  // ... other fields
}
```

### URL Parameter Mapping
```javascript
{
  venue: mockBusinesses.category,
  treatment: mockBusinesses.services[index],
  city: mockBusinesses.city,
  section: mockBusinesses.neighborhood
}
```

## Implementation Phases

### Phase 1: Core Structure
1. Set up route configuration
2. Implement URL parsing
3. Create base page components

### Phase 2: Business Logic
1. Implement filtering system
2. Build search functionality
3. Create business card components

### Phase 3: SEO & Metadata
1. Add SEO components
2. Implement schema markup
3. Set up metadata generation

### Phase 4: UI/UX
1. Implement responsive design
2. Add loading states
3. Implement error handling

### Phase 5: Optimization
1. Add caching
2. Implement code splitting
3. Optimize performance

## Testing Checklist
- [ ] URL parsing and formatting
- [ ] Business filtering accuracy
- [ ] Search functionality
- [ ] SEO metadata generation
- [ ] Responsive design
- [ ] Performance metrics

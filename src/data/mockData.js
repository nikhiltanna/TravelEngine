/**
 * @typedef {Object} Property
 * @property {string} id - Unique identifier
 * @property {string} title - Property name
 * @property {string} type - Property type (e.g., 'Resort', 'Villa')
 * @property {string} location - City/Country
 * @property {number} price - Base price per night
 * @property {number} rating - Average user rating
 * @property {number} reviews - Total review count
 * @property {string} image - Image URL
 * @property {string[]} tags - Sensory/Vibe tags
 * @property {string} vibe - Primary sensory description
 * @property {Object} sustainability - Sustainability score/metrics
 */

/**
 * @typedef {Object} Flight
 * @property {string} id - Flight ID
 * @property {string} airline - Airline name
 * @property {string} from - Departure city
 * @property {string} to - Arrival city
 * @property {string} departure - ISO departure time
 * @property {string} arrival - ISO arrival time
 * @property {number} price - Ticket price
 * @property {string} class - Cabin class
 */

export const DESTINATIONS = [
  { 
    id: 'uluwatu',
    name: 'Uluwatu, Bali', 
    price: 425, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O',
    tag: 'Most Booked',
    vibe: 'Tropical',
    description: 'Cliffside luxury meets spiritual tranquility with world-class surfing and sunsets.'
  },
  { 
    id: 'kyoto',
    name: 'Kyoto, Japan', 
    price: 310, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v',
    tag: 'Cultural Gem',
    vibe: 'Serene',
    description: 'Step back in time with zen gardens, ancient temples, and refined kaiseki dining.'
  },
  { 
    id: 'amalfi',
    name: 'Amalfi Coast, Italy', 
    price: 550, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O',
    tag: 'Top Rated',
    vibe: 'Romantic',
    description: 'Iconic colorful villages perched over the Tyrrhenian Sea, perfect for slow travel.'
  },
  { 
    id: 'santorini',
    name: 'Santorini, Greece', 
    price: 480, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_FVw8YLNpK_xlRVSpc1D5hgdDKh_oyT1rrOCV1VkWjETb013ttT_BnwNlDUGirq0OkyNdBHVCpL9U8nWAVjwFX7WUCQSg-d8f-x2Yo0SY5ICaazrLiZMl-qHRvsmp45defJ3YxqLjYhMKvk9cCfdREAVCBX4xY4Ga4ch6PtPo2-WYHMZQ2ZS43r45EXJ_zJpF0LOt14sscDu7eWWrX-7KKbXNwi5gaDwwDE2H-yEnJHsJ24gi8zNoKiq6qNiLjpt4dDCfwx1iobry',
    tag: 'Romantic Escape',
    vibe: 'Coastal',
    description: 'Unforgettable sunsets over white-washed caldera views and deep blue waters.'
  },
  { 
    id: 'reykjavik',
    name: 'Reykjavik, Iceland', 
    price: 290, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O',
    tag: 'Adventure',
    vibe: 'Ethereal',
    description: 'Aurora borealis, geothermal wonders, and dramatic volcanic landscapes.'
  },
  { 
    id: 'marrakech',
    name: 'Marrakech, Morocco', 
    price: 220, 
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV',
    tag: 'Exotic Bliss',
    vibe: 'Vibrant',
    description: 'Vibrant souks, intricate Riads, and the enchanting Majorelle Garden.'
  }
];

export const HOTELS = [
  {
    id: 'ayana',
    name: 'Ayana Resort and Spa',
    location: 'Jimbaran Bay, Bali',
    rating: 9.4,
    reviews: 1204,
    stars: 5,
    price: 385,
    oldPrice: 450,
    tags: ['Ocean View', 'Free Breakfast', 'Infinity Pool'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O'
  },
  {
    id: 'ubud-valley',
    name: 'Ubud Valley Boutique Resort',
    location: 'Ubud, Bali',
    rating: 8.8,
    reviews: 856,
    stars: 4,
    price: 180,
    tags: ['Private Pool', 'Free Cancellation', 'Spa'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV'
  },
  {
    id: 'azure',
    name: 'The Azure Resort & Spa',
    location: 'Uluwatu, Bali',
    rating: 9.6,
    reviews: 542,
    stars: 5,
    price: 425,
    tags: ['Private Beach', 'Cliffside', 'Luxury'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O'
  },
  {
    id: 'ritz-paris',
    name: 'Ritz Paris',
    location: 'Place Vendôme, Paris',
    rating: 9.8,
    reviews: 2105,
    stars: 5,
    price: 1200,
    tags: ['Historic', 'Michelin Dining', 'Palace'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v'
  }
];

export const MOCK_BOOKING = {
  hotel: HOTELS[2],
  checkIn: 'Oct 12, 2023',
  checkOut: 'Oct 18, 2023',
  guests: '2 Guests, 1 Room',
  basePrice: 2550,
  taxes: 124,
  total: 2674
};

export const VIBES = [
  { id: 'tropical', name: 'Tropical Paradise', icon: 'beach_access', color: 'bg-teal-500', description: 'Sun-drenched beaches and turquoise waters.' },
  { id: 'urban', name: 'Urban Pulse', icon: 'location_city', color: 'bg-indigo-500', description: 'Skylines, street food, and vibrant nightlife.' },
  { id: 'serene', name: 'Serene Sanctuary', icon: 'self_improvement', color: 'bg-emerald-500', description: 'Zen gardens and quiet mountain retreats.' },
  { id: 'ethereal', name: 'Ethereal Wonders', icon: 'auto_awesome', color: 'bg-purple-500', description: 'Northern lights and volcanic landscapes.' },
  { id: 'romantic', name: 'Romantic Escape', icon: 'favorite', color: 'bg-rose-500', description: 'Candlelit dinners and sunset caldera views.' },
  { id: 'coastal', name: 'Coastal Charm', icon: 'sailing', color: 'bg-blue-500', description: 'Cliffside villages and sparkling sea views.' }
];

export const ITINERARIES = [
  {
    id: 'japan-split',
    title: 'Japan: Urban to Zen',
    description: 'Experience the vibrant pulse of modern Tokyo followed by the serene, historical tranquility of Kyoto. Seamlessly orchestrated.',
    totalPrice: 3090,
    legs: [
      {
        id: 1,
        title: 'Modern Tokyo Hub',
        duration: '4 Nights',
        date: 'Oct 12',
        location: 'Shinjuku, Tokyo',
        property: 'Park Hyatt Tokyo',
        rating: 4.9,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v',
        description: 'High-tech amenities, panoramic city views, and steps away from world-class dining.'
      },
      {
        id: 2,
        title: 'Kyoto Zen Retreat',
        duration: '3 Nights',
        date: 'Oct 16',
        location: 'Higashiyama, Kyoto',
        property: 'Hoshinoya Kyoto',
        rating: 5.0,
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV',
        description: 'A traditional Ryokan stay with kaiseki dining and private onsen baths.'
      }
    ],
    transfer: {
      title: 'Seamless Transfer Orchestrated',
      description: 'Shinkansen (Bullet Train) tickets are pre-booked. Luggage forwarding included.'
    }
  }
];

export const TRENDING_PULSE = [
  { id: 1, name: 'Kyoto, Japan', trend: 'up', category: 'Cultural Heritage & Autumn Colors', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v' },
  { id: 2, name: 'Santorini, Greece', trend: 'stable', category: 'Luxury Caldera Views', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_FVw8YLNpK_xlRVSpc1D5hgdDKh_oyT1rrOCV1VkWjETb013ttT_BnwNlDUGirq0OkyNdBHVCpL9U8nWAVjwFX7WUCQSg-d8f-x2Yo0SY5ICaazrLiZMl-qHRvsmp45defJ3YxqLjYhMKvk9cCfdREAVCBX4xY4Ga4ch6PtPo2-WYHMZQ2ZS43r45EXJ_zJpF0LOt14sscDu7eWWrX-7KKbXNwi5gaDwwDE2H-yEnJHsJ24gi8zNoKiq6qNiLjpt4dDCfwx1iobry' },
  { id: 3, name: 'Bali, Indonesia', trend: 'up', category: 'Tropical Wellness & Surfing', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O' },
  { id: 4, name: 'Venice, Italy', trend: 'down', category: 'Romantic Canal Retreats', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O' },
  { id: 5, name: 'Paris, France', trend: 'up', category: 'Art, Fashion & Gastronomy', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV' }
];

export const COMMUNITY_STORIES = [
  { id: 1, user: 'Elena M.', location: 'Kyoto, Japan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV', content: 'The morning mist over Fushimi Inari was surreal. Use the sensory guide to find the quietest trails!', likes: 124 },
  { id: 2, user: 'Marco R.', location: 'Venice, Italy', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v', content: 'Hidden cicchetti bars are the soul of Venice. Check the map for my favorite secret spots near Rialto.', likes: 89 },
  { id: 3, user: 'Sarah L.', location: 'Paris, France', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O', content: 'The view from the Trocadéro at midnight never gets old. Pro tip: book your dinner cruise 2 weeks ahead.', likes: 215 }
];

export const FLIGHTS = [
  { id: 1, airline: 'Voyage Air', number: 'VA102', from: 'LHR', to: 'DPS', duration: '14h 20m', price: 1250, class: 'Business', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O' },
  { id: 2, airline: 'Zenith Airways', number: 'ZA440', from: 'JFK', to: 'NRT', duration: '13h 45m', price: 1800, class: 'First Class', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV' },
  { id: 3, airline: 'SkyConnect', number: 'SC991', from: 'CDG', to: 'VCE', duration: '1h 50m', price: 210, class: 'Economy', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v' }
];

export const RENTALS = [
  { id: 1, name: 'Tuscan Villa Auto', type: 'Luxury SUV', price: 150, seats: 5, transmission: 'Automatic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwMJV0MdjkkgIrLqE5aHWdkVE3VYg7bNbHx13K1Ukx7EMv6JwgBwszERkpefQesnI24yYvPmoMAsLAOYMCXlqx8_gS1hSqxPs8vnVZLfzaFmaAPaPVfryvRvOhGlyfkqOkKFRHp5KHGfe2RefZRx1rwb8d80s8xbVTJixuC9bTc_e3JpdFsrNKcSuixxcwWCePgB5hMij7iEj2mK5Fp_t4lf1KLFqblOu6mFJFQ3IjErAIW0FjGYew_mgRusfr5_gf2jhzmhuwrI-O' },
  { id: 2, name: 'Kyoto Eco Compact', type: 'Electric', price: 85, seats: 4, transmission: 'Automatic', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxF-G5C0XatHFqwbtpl0LxqIwEnZiPizgwOdpRfcErQHaMu9chSOlKGUbIooUJGtYItjyef1QKqzXgXNsGZ-ys32e3FQC7CcQfLC3--8SyjVSJDglZGy4eRYNjaaeuchveWqiPGw1bB02gEJ9UMiA3c0bhoHBivre-I2iaIBUwBUZDJOoh_1im0iFOB_wLd_EbUVzcpPZIxV-jo4tf4gnl8GKnUhq2Zp_y5JWD-X7kFOz3vs1XwIqXaRTS7rngBvw9QwlmTsUr91YV' },
  { id: 3, name: 'Riviera Convertible', type: 'Sport', price: 220, seats: 2, transmission: 'Manual', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAJI1AfGSG2VEd_S7iVJNO8Z7fb8jG-HqVROvjxqMKHIRJv0NMVAeMr_o7zBRl1EIw3r2qYp50rS8qwRSm-cdESRuYd8dZ94pS36G12oojKXbTY9UpFMvjyFMPW3XUSBaaIEHsClcniihb70qbUB-MBuPVRLvQH83tgU4B1N4Ry--1CYYEtHxRcghyb5df_hVaS52WjfVgUFXly3aqkketITfqNGVsh5m4oeTpI391FKur4A3hX3y0tRw2hzOtbsZ0-c6PtcDGx26v' }
];

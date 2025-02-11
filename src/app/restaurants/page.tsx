'use client';

import { useState } from 'react';
import RestaurantCard from '@/components/RestaurantCard';

const restaurants = [
  {
    id: 1,
    name: 'Burger House',
    cuisine: 'Hotspot',
    rating: 4.5,
    deliveryTime: '25-35',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800'
  },
  {
    id: 2,
    name: 'Pizza Palace',
    cuisine: 'Pizza point',
    rating: 4.7,
    deliveryTime: '30-40',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=800'
  },
  {
    id: 3,
    name: 'Sushi Master',
    cuisine: 'Japanese foodie',
    rating: 4.8,
    deliveryTime: '35-45',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800'
  },
  {
    id: 4,
    name: 'Biryani House',
    cuisine: 'Desi food',
    rating: 4.6,
    deliveryTime: '30-40',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=800'
  },
  {
    id: 5,
    name: 'Pasta Paradise',
    cuisine: 'Italian cuisine',
    rating: 4.4,
    deliveryTime: '25-35',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800'
  },
  {
    id: 6,
    name: 'Shawarma King',
    cuisine: 'Middle Eastern',
    rating: 4.7,
    deliveryTime: '20-30',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800'
  }
];

export default function RestaurantsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Restaurants</h1>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center text-gray-600 mt-8">
            No restaurants found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}

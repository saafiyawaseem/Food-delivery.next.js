'use client';

import Hero from '@/components/Hero';
import RestaurantCard from '@/components/RestaurantCard';
import { FaMotorcycle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Suspense } from 'react';

interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
}

const restaurants: Restaurant[] = [
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen">
        <Hero />
        
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMotorcycle className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Hot food delivered to your doorstep</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">Know exactly where your food is</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wide Coverage</h3>
                <p className="text-gray-600">Delivering to all major locations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Popular Restaurants
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  cuisine={restaurant.cuisine}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                  image={restaurant.image}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { getRestaurantBySlug } from '@/lib/sanity';
import { urlFor } from '@/lib/sanity';

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  description: string;
  rating: number;
  image: string;
  menu: MenuItem[];
}

export default function RestaurantPage({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await getRestaurantBySlug(params.id);
        setRestaurant(data);
      } catch (error) {
        console.error('Error fetching restaurant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Restaurant not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96">
        <Image
          src={urlFor(restaurant.image).url()}
          alt={restaurant.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-xl">{restaurant.cuisine}</p>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-white">{restaurant.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurant.menu.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => addItem({
                      id: parseInt(item._id),
                      name: item.name,
                      price: item.price,
                      image: urlFor(item.image).url(),
                      description: item.description,
                      category: item.category,
                      restaurantId: parseInt(restaurant._id)
                    })}
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaClock } from 'react-icons/fa';

interface RestaurantCardProps {
  id: number;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string;
}

export default function RestaurantCard({
  id,
  name,
  cuisine,
  rating,
  deliveryTime,
  image
}: RestaurantCardProps) {
  return (
    <Link href={`/restaurant/${id}`} className="block h-full">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-200 hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-xl mb-2">{name}</h3>
          <p className="text-gray-600">{cuisine}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <FaStar className="text-yellow-400 w-5 h-5" />
              <span className="ml-1 font-medium">{rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaClock className="w-4 h-4" />
              <span className="ml-1">{deliveryTime} min</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

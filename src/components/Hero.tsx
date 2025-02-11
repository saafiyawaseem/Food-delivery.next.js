'use client';

import Image from 'next/image';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <div className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
        alt="Food background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative h-full max-w-7xl mx-auto px-4">
        <div className="flex h-full items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6">
              Delicious Food<br />
              Delivered To Your Door
            </h1>
            <p className="text-xl mb-8">
              Order from your favorite restaurants and get food delivered in minutes
            </p>
            <div className="max-w-md">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter your delivery address"
        className="w-full px-6 py-4 pr-12 rounded-full shadow-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <button className="absolute right-4 top-1/2 -translate-y-1/2">
        <FaSearch className="w-5 h-5 text-gray-500" />
      </button>
    </div>
  );
}

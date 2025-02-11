'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '@/store/cartStore';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-orange-500">FoodApp</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              <Link href="/menu" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md font-medium">
                Menu
              </Link>
              <Link href="/restaurants" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md font-medium">
                Restaurants
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md font-medium">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-orange-500">
              <FaShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/menu" className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
            Menu
          </Link>
          <Link href="/restaurants" className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
            Restaurants
          </Link>
          <Link href="/contact" className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
          <Link href="/cart" className="block text-gray-700 hover:text-orange-500 px-3 py-2 rounded-md text-base font-medium">
            Cart ({items.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

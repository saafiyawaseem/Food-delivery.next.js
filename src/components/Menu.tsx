'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { MenuItem, menuItems } from '@/data/menuData';
import { useCartStore } from '@/store/cartStore';
import { FaShoppingCart, FaPlus, FaMinus, FaTimes } from 'react-icons/fa';

interface MenuProps {
  restaurantId: number;
}

export default function Menu({ restaurantId }: MenuProps) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, addItem, removeItem, updateQuantity, total } = useCartStore();
  
  const restaurantMenu = menuItems.filter(item => item.restaurantId === restaurantId);
  const categories = Array.from(new Set(restaurantMenu.map(item => item.category)));

  return (
    <div className="py-8">
      {/* Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
      >
        <FaShoppingCart className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
            {items.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Menu List */}
      <div className="max-w-7xl mx-auto px-4">
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurantMenu
                .filter(item => item.category === category)
                .map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-48 w-full">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
                        <button
                          onClick={() => addItem(item)}
                          className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
                        >
                          <FaPlus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Cart Dialog */}
      <Dialog
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-md rounded-lg bg-white p-6 w-full">
              <div className="flex justify-between items-center mb-6">
                <Dialog.Title className="text-xl font-bold">Your Cart</Dialog.Title>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
              
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {items.map(item => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)} x {item.quantity}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2 bg-white rounded-lg border">
                            <button
                              onClick={() => {
                                if (item.quantity > 1) {
                                  updateQuantity(item.id, item.quantity - 1);
                                } else {
                                  removeItem(item.id);
                                }
                              }}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            >
                              <FaMinus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
                            >
                              <FaPlus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTimes className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-lg">Total:</span>
                      <span className="font-bold text-lg">${total.toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => {
                        alert('Proceeding to checkout...');
                        setIsCartOpen(false);
                      }}
                      className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

import { create } from 'zustand';
import { MenuItem } from '@/data/menuData';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>()((set) => ({
  items: [],
  total: 0,
  
  addItem: (item: MenuItem) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      
      if (existingItem) {
        const updatedItems = state.items.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
        };
      }
      
      const newItem = { ...item, quantity: 1 };
      return {
        ...state,
        items: [...state.items, newItem],
        total: state.total + newItem.price,
      };
    }),
    
  removeItem: (itemId: number) =>
    set((state) => {
      const updatedItems = state.items.filter((item) => item.id !== itemId);
      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }),
    
  updateQuantity: (itemId: number, quantity: number) =>
    set((state) => {
      const updatedItems = state.items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter((item) => item.quantity > 0);

      return {
        ...state,
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
      };
    }),
    
  clearCart: () => set({ items: [], total: 0 }),
}));

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  quantity?: number;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    restaurantId: 1,
    name: 'Classic Burger',
    description: 'Juicy beef patty with fresh lettuce, tomatoes, and our special sauce',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800',
    category: 'Burgers'
  },
  {
    id: 2,
    restaurantId: 1,
    name: 'Cheese Burger',
    description: 'Our classic burger topped with melted cheddar cheese',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800',
    category: 'Burgers'
  },
  {
    id: 3,
    restaurantId: 1,
    name: 'Chicken Burger',
    description: 'Grilled chicken breast with lettuce and mayo',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=800',
    category: 'Burgers'
  },
  {
    id: 4,
    restaurantId: 1,
    name: 'French Fries',
    description: 'Crispy golden fries seasoned with our special blend',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=800',
    category: 'Sides'
  },
  {
    id: 5,
    restaurantId: 1,
    name: 'Onion Rings',
    description: 'Crispy battered onion rings',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800',
    category: 'Sides'
  },
  {
    id: 6,
    restaurantId: 1,
    name: 'Milkshake',
    description: 'Creamy vanilla milkshake topped with whipped cream',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=800',
    category: 'Drinks'
  }
];

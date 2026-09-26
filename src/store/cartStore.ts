import { atom, computed } from 'nanostores';
import type { Product } from '../data/products';

export interface CartItem {
  id: string; // unique cart item id
  product: Product;
  size: number;
  quantity: number;
  addedAt: number;
}

export const cartItems = atom<CartItem[]>([]);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-cart');
  if (stored) {
    try {
      cartItems.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse cart data', e);
    }
  }

  cartItems.subscribe((items) => {
    localStorage.setItem('outright-cart', JSON.stringify(items));
  });
}

export const cartCount = computed(cartItems, (items) => 
  items.reduce((acc, item) => acc + item.quantity, 0)
);

export const cartTotal = computed(cartItems, (items) => 
  items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0)
);

export function addToCart(product: Product, size: number) {
  const items = cartItems.get();
  const existingItemIndex = items.findIndex(i => i.product.id === product.id && i.size === size);

  if (existingItemIndex >= 0) {
    const newItems = [...items];
    newItems[existingItemIndex].quantity += 1;
    cartItems.set(newItems);
  } else {
    cartItems.set([
      ...items,
      {
        id: `${product.id}-${size}-${Date.now()}`,
        product,
        size,
        quantity: 1,
        addedAt: Date.now()
      }
    ]);
  }
}

export function removeFromCart(id: string) {
  const items = cartItems.get();
  cartItems.set(items.filter(item => item.id !== id));
}

export function updateQuantity(id: string, delta: number) {
  const items = cartItems.get();
  const index = items.findIndex(item => item.id === id);
  if (index >= 0) {
    const newItems = [...items];
    const newQuantity = newItems[index].quantity + delta;
    if (newQuantity <= 0) {
      newItems.splice(index, 1);
    } else {
      newItems[index].quantity = newQuantity;
    }
    cartItems.set(newItems);
  }
}

export function clearCart() {
  cartItems.set([]);
}

// UI state for system messages
export interface SystemMessage {
  id: string;
  text: string;
}

export const systemMessages = atom<SystemMessage[]>([]);

export function addSystemMessage(text: string) {
  const id = Date.now().toString();
  const messages = systemMessages.get();
  systemMessages.set([...messages, { id, text }]);
  
  // auto remove after 2.5s
  setTimeout(() => {
    systemMessages.set(systemMessages.get().filter(m => m.id !== id));
  }, 2500);
}

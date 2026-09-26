import { atom } from 'nanostores';
import type { CartItem } from './cartStore';

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  total: number;
  customerName: string;
  deliveryAddress: string;
  timestamp: number;
}

// Persistent store using sessionStorage for checkout->confirmation handoff
export const orderSnapshot = atom<OrderDetails | null>(null);

// Hydrate from session storage
if (typeof window !== 'undefined') {
  const stored = sessionStorage.getItem('outright-order');
  if (stored) {
    try {
      orderSnapshot.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse order snapshot', e);
    }
  }

  // Subscribe to changes to update session storage
  orderSnapshot.subscribe((order) => {
    if (order) {
      sessionStorage.setItem('outright-order', JSON.stringify(order));
    } else {
      sessionStorage.removeItem('outright-order');
    }
  });
}

import { atom } from 'nanostores';
import type { OrderDetails } from './orderStore';

export const orderHistory = atom<OrderDetails[]>([]);

if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('outright-order-history');
  if (stored) {
    try {
      orderHistory.set(JSON.parse(stored));
    } catch (e) {
      console.error('Failed to parse order history', e);
    }
  }

  orderHistory.subscribe((history) => {
    localStorage.setItem('outright-order-history', JSON.stringify(history));
  });
}

export const addToHistory = (order: OrderDetails) => {
  orderHistory.set([order, ...orderHistory.get()]);
};

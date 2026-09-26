import { atom } from 'nanostores';
import type { Product } from '../data/products';
import { addSystemMessage } from './cartStore';
import { collection, toggleCollectionState, hasCollectionState } from './collectionStore';
import { products } from '../data/products';

export const watchlist = atom<Product[]>([]);

if (typeof window !== 'undefined') {
  // We no longer strictly read from outright-watchlist, we sync from collectionStore
  // We can just compute it based on the collection store, but to keep the atom signature
  // identical, we subscribe to collection
  collection.subscribe((entries) => {
    const wantedIds = entries.filter(e => e.states.includes('WANTED')).map(e => e.productId);
    const wantedProducts = products.filter(p => wantedIds.includes(p.id));
    watchlist.set(wantedProducts);
  });
}

export const toggleWatchlist = (product: Product) => {
  const exists = hasCollectionState(product.id, 'WANTED');
  
  if (exists) {
    toggleCollectionState(product.id, 'WANTED');
    addSystemMessage(`REMOVED FROM WATCHLIST: ${product.name}`);
  } else {
    toggleCollectionState(product.id, 'WANTED');
    addSystemMessage(`ADDED TO WATCHLIST: ${product.name}`);
  }
};

export const isInWatchlist = (id: string) => {
  return hasCollectionState(id, 'WANTED');
};

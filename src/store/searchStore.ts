import { atom } from 'nanostores';

export const isSearchOpen = atom(false);
export const searchQuery = atom('');

export const openSearch = () => isSearchOpen.set(true);
export const closeSearch = () => {
  isSearchOpen.set(false);
  searchQuery.set('');
};
export const toggleSearch = () => {
  if (isSearchOpen.get()) {
    closeSearch();
  } else {
    openSearch();
  }
};

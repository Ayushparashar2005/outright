export interface FilterConfig {
  brands: string[];
  colors: string[];
  sizes: number[];
  categories: string[];
  priceRange: { min: number; max: number };
}

export const filters: FilterConfig = {
  brands: ['Nike', 'New Balance', 'Jordan', 'adidas', 'Asics', 'Crocs', 'Vans'],
  colors: ['DARK GRAY', 'LIGHT GRAY', 'MULTI', 'BROWN', 'ORANGE', 'RED', 'BLUE', 'GREEN', 'YELLOW', 'PINK', 'PURPLE'],
  sizes: [7, 8, 9, 10, 11, 12],
  categories: ['RUNNING', 'LIFESTYLE', 'APPAREL', 'ACCESSORIES'],
  priceRange: { min: 0, max: 500 }
};

export interface FilterState {
  brand: string[];
  color: string[];
  size: number[];
  category: string[];
  price: [number, number];
}

export const defaultFilterState: FilterState = {
  brand: [],
  color: [],
  size: [],
  category: [],
  price: [filters.priceRange.min, filters.priceRange.max]
};

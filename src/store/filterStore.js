import { create } from 'zustand';
import products from '../data/products';

const useFilterStore = create((set, get) => ({
  category: 'All',
  collection: 'All',
  priceRange: { min: 0, max: Infinity },
  sortBy: 'featured',
  searchQuery: '',

  setCategory: (category) => set({ category }),
  setCollection: (collection) => set({ collection }),
  setPriceRange: (priceRange) => set({ priceRange }),
  setSortBy: (sortBy) => set({ sortBy }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),

  clearFilters: () =>
    set({
      category: 'All',
      collection: 'All',
      priceRange: { min: 0, max: Infinity },
      sortBy: 'featured',
      searchQuery: '',
    }),

  getFilteredProducts: () => {
    const { category, collection, priceRange, sortBy, searchQuery } = get();
    let filtered = [...products];

    // Category filter
    if (category !== 'All') {
      filtered = filtered.filter((p) => p.category === category);
    }

    // Collection filter
    if (collection !== 'All') {
      filtered = filtered.filter((p) => p.collection === collection);
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  },
}));

export default useFilterStore;

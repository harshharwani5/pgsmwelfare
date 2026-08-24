import { create } from 'zustand';

const useWishlistStore = create((set, get) => ({
  items: [],

  toggleWishlist: (product) => {
    const { items } = get();
    const exists = items.find((item) => item.id === product.id);
    if (exists) {
      set({ items: items.filter((item) => item.id !== product.id) });
    } else {
      set({ items: [...items, product] });
    }
  },

  isWishlisted: (productId) => {
    return get().items.some((item) => item.id === productId);
  },

  removeFromWishlist: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  clearWishlist: () => set({ items: [] }),
}));

export default useWishlistStore;

import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  items: [],
  isCartOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  addItem: (product, selectedSize, selectedColor, quantity = 1) => {
    const { items } = get();
    const existingIndex = items.findIndex(
      (item) => item.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor
    );

    if (existingIndex > -1) {
      const newItems = [...items];
      newItems[existingIndex] = {
        ...newItems[existingIndex],
        quantity: newItems[existingIndex].quantity + quantity,
      };
      set({ items: newItems, isCartOpen: true });
    } else {
      set({
        items: [...items, { ...product, selectedSize, selectedColor, quantity }],
        isCartOpen: true,
      });
    }
  },

  removeItem: (productId, selectedSize, selectedColor) => {
    set((state) => ({
      items: state.items.filter(
        (item) => !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      ),
    }));
  },

  updateQuantity: (productId, selectedSize, selectedColor, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId, selectedSize, selectedColor);
      return;
    }
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      ),
    }));
  },

  clearCart: () => set({ items: [], isCartOpen: false }),

  get totalItems() {
    return get().items.reduce((sum, item) => sum + item.quantity, 0);
  },

  get totalPrice() {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));

export default useCartStore;

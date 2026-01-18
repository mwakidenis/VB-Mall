import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("vigybag-wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "dashboard-wishlist",
  initialState,
  reducers: {
    manageWishlistItem: (state, action) => {
      const { product } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      const updatedWishlist = existingItem
        ? state.items.filter((item) => item.id !== product.id)
        : [...state.items, product];

      localStorage.setItem("vigybag-wishlist", JSON.stringify(updatedWishlist));
      state.items = updatedWishlist;
    },
    clearWishlist: (state) => {
      localStorage.setItem("vigybag-wishlist", JSON.stringify([]));
      state.items = [];
    },
  },
});

export const { manageWishlistItem, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

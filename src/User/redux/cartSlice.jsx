import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("vigybag-cart")) || [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    manageCartItem: (state, action) => {
      const { product, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      let newQuantity = quantity;
      if (existingItem) {
        newQuantity = existingItem.quantity + quantity > 0 ? existingItem.quantity + quantity : 0;
      }

      const updatedCart = state.items
        .filter((item) => item.id !== product.id)
        .concat(
          newQuantity > 0
            ? {
                id: product.id,
                title: product.title,
                quantity: newQuantity,
                oldPrice: product.price || product.oldPrice,
                newPrice: product.newPrice,
                total: newQuantity * product.newPrice,
                image: product.image,
              }
            : []
        )
        .sort((a, b) => a.id - b.id);

      localStorage.setItem("vigybag-cart", JSON.stringify(updatedCart));
      state.items = updatedCart;
    },
    clearCart: (state) => {
      localStorage.setItem("vigybag-cart", JSON.stringify([]));
      state.items = [];
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
  },
});

export const { manageCartItem, clearCart, setTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;

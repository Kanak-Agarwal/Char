import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state,action) =>{
        // console.log(action.payload);
        const updatedProducts = state.products.filter((product) => product._id !== action.payload._id);
        state.products = updatedProducts;
        state.quantity = state.products.length;
        state.total = state.total - action.payload.price;
        // console.log("hi");
    },
    increaseProductQuantity: (state, action) => {
      const productToUpdate = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productToUpdate) {
        productToUpdate.quantity += 1;
        state.total += action.payload.price * 1;
      }
    },
    decreaseProductQuantity: (state, action) => {
      const productToUpdate = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (productToUpdate) {
        productToUpdate.quantity -= 1;
        state.total -= action.payload.price * 1;
      }
    },
  },
});

export const { addProduct,removeFromCart,decreaseProductQuantity,increaseProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;

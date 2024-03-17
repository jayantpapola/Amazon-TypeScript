import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchHomeProducts } from "./asyncthunk";
import { ProductProps } from "../types";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomeProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { setProducts, addToCart } = productSlice.actions;
export default productSlice.reducer;

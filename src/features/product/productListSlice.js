import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllproducts, fetchProductsWithFilter } from "./productListAPI";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "counter/fetchProducts",
  async () => {
    const response = await fetchAllproducts();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchFilterProductAsync = createAsyncThunk(
  'counter/fetchFilterProductAsync',
  async (filter) => {
    const response = await fetchProductsWithFilter(filter);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// export const fetchAllCategoriesAsync = createAsyncThunk(
//   'counter/fetchAllCategories',
//   async () => {
//     const response = await fetchAllCategories();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchFilterProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilterProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;

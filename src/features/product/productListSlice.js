import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductById, fetchProductsByFilters } from "./productListAPI";

const initialState = {
  products: [],
  brands: [],
  categories: [],
  totalItems: 0,
  selectedProduct:null,
  status: "idle",
};

// export const fetchProducts = createAsyncThunk(
//   "counter/fetchProducts",
//   async () => {
//     const response = await fetchAllproducts();
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const fetchFilterProductAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async ({ filter, sort, pagination }) => {
    const response = await fetchProductsByFilters(filter, sort, pagination);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const fetchProductByIdAsync = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetchProductById(id);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

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

      .addCase(fetchFilterProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFilterProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(fetchProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const { increment } = counterSlice.actions;

export const selectProducts = (state) => state.product.products;
export const selectTotalItems = (state) => state.product.totalItems;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default counterSlice.reducer;

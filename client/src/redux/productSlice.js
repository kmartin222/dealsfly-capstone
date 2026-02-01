import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  loading: false,
  product: {
    id: "",
    img: "",
    name: "",
    text: "",
    type: "",
    size: [],
    color: [],
    gender: "",
    price: 0,
  },
  products: [],
};

export const addProduct = createAsyncThunk("product/addProduct", async (data) => {
  const {
    id,
    img,
    name,
    text,
    type,
    size,
    color,
    gender,
    price,
  } = data;

  const response = await productService.addProduct(
    id,
    img,
    name,
    text,
    type,
    size,
    color,
    gender,
    price
  );
  console.log(response.data);
  return response.data;
});

export const productCreate = createAsyncThunk(
  "product/create",
  async (product) => {
    console.log("redux productCreate product", product);
    const response = await productService.productCreate(product);
    console.log(response);
    return response.data;
  }
);

export const productGetMany = createAsyncThunk(
  "product/getMany",
  async (email) => {
    console.log("redux productGetMany product", email);
    const response = await productService.productGetMany(email);
    console.log("redux productGetMany product response", response);
    return response.data;
  }
);
export const productGetAll = createAsyncThunk("product/getAll", async () => {
  const response = await productService.productGetAll();
  console.log("redux productGetAll product response", response);
  return response.data;
});
export const productGetOne = createAsyncThunk("product/getOne", async (id) => {
  console.log("sliceID", id)
  const response = await productService.productGetOne(id);
  console.log("redux productGetOne product response", response); //this works
  return response.data;
});
 export const productDelete = createAsyncThunk("product/delete", async (id) => {
   const response = await productService.productDelete(id);
   return response.data;
 });
  

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // products create one
      .addCase(productCreate.pending, (state, action) => {
        console.log("productSlice productCreate.pending", action.payload);
        state.loading = true;
      })
      .addCase(productCreate.fulfilled, (state, action) => {
        console.log("productSlice productCreate.fulfilled", action.payload);
        state.loading = false;
      })
      .addCase(productCreate.rejected, (state, action) => {
        console.log("productSlice productCreate.rejected", action.payload);
        state.loading = false;
      })

      // products get many
      .addCase(productGetMany.pending, (state, action) => {
        console.log("productSlice productGetMany.pending", action.payload);
        state.loading = true;
      })
      .addCase(productGetMany.fulfilled, (state, action) => {
        console.log("productSlice productGetMany.fulfilled", action.payload);
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(productGetMany.rejected, (state, action) => {
        console.log("productSlice productGetMany.rejected", action.payload);
        state.loading = false;
      })

      // products get all
      .addCase(productGetAll.pending, (state, action) => {
        console.log("productSlice productGetAll.pending", action.payload);
        state.loading = true;
      })
      .addCase(productGetAll.fulfilled, (state, action) => {
        console.log("productSlice productGetAll.fulfilled", action.payload);
        state.loading = false;
        state.products = action.payload.products;
      })
      .addCase(productGetAll.rejected, (state, action) => {
        console.log("productSlice productGetAll.rejected", action.payload);
        state.loading = false;
      })
      //productDelete
      .addCase(productDelete.pending, (state, action) => {
        console.log("productDelete.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(productDelete.fulfilled, (state, action) => {
        console.log("productDelete.fullfilled", action.payload);
        state.loading = true;
        state.product = action.payload;
        state.success = false;
      })
      .addCase(productDelete.rejected, (state, action) => {
        console.log("productDelete.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })
      //add product
        .addCase(addProduct.pending, (state, action) => {
          console.log("addProduct.pending", action.payload);
          state.loading = true;
          state.success = false;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
          console.log("addProduct.fullfilled", action.payload);
          state.loading = true;
          state.success = false;
        })
        .addCase(addProduct.rejected, (state, action) => {
          console.log("addProduct.rejected", action.payload);
          state.loading = true;
          state.success = false;
        })
      // products get One
      .addCase(productGetOne.pending, (state, action) => {
        console.log("productSlice productGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(productGetOne.fulfilled, (state, action) => {
        console.log("productSlice productGetOne.fulfilled", action.payload); // this
        state.loading = false;
        state.product = action.payload[0];
      })
      .addCase(productGetOne.rejected, (state, action) => {
        console.log("productSlice productGetOne.rejected", action.payload);
        state.loading = false;
      });
  },
});

export default productSlice.reducer;

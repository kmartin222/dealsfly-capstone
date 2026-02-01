import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import completedService from "./completedService";

const initialState = {
  loading: false,
  success: false,
  completed: {
    date: "",
    total: "",
    tax: "",
    subtotal: "",
    savings: "",
    shipping: "",
    products: [],
  },
  completeds:[]
};

export const GetMany = createAsyncThunk("completed/getMany", async () => {
  console.log("TESTING GET MANY SLICE")
  const response = await completedService.completedGetMany();
  console.log("redux completed GetMany completed response", response);
  return response.data;
});
 
export const getEmail = createAsyncThunk(
    "completed/email",
    async (email) => {
      console.log("email", email);
      const response = await completedService.getCategory(email);
      console.log(response.data);
      return response.data;
    }
  );


export const completedGetOne = createAsyncThunk(
  "completed/get",
  async (completedId) => {
    console.log("get completed", completedId);
    try {
      const response = await completedService.completedGetOne(completedId);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      throw new Error("Broke");
    }
  }
)

export const completedSlice = createSlice({
  name: "completed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get one by order/completed id
      .addCase(completedGetOne.pending, (state, action) => {
        console.log("completedSlice completedGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(completedGetOne.fulfilled, (state, action) => {
        console.log("completedSlice completedGetOne.fulfilled", action.payload);
        state.loading = false;
        state.completed = action.payload.completed;
        state.success = true;
      })
      .addCase(completedGetOne.rejected, (state, action) => {
        console.log("completedSlice completedGetOne.rejected", action.payload);
        state.loading = false;
      })

      // completed get many
      .addCase(GetMany.pending, (state, action) => {
        console.log("completedSlice GetMany.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(GetMany.fulfilled, (state, action) => {
        console.log(
          "completedSlice GetMany.fulfilled"
        );
        state.loading = false;
        state.completed = action.payload.completed;
        state.success = false;
      })
      .addCase(GetMany.rejected, (state, action) => {
        console.log("completedSlice GetMany.rejected", action.payload);
        state.loading = false;
        state.success = false;
      })


      //productgetEmail
      .addCase(getEmail.pending, (state, action) => {
        console.log("getEmail.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(getEmail.fulfilled, (state, action) => {
        console.log("getEmail.fullfilled", action.payload);
        state.loading = true;
        state.products = action.payload.products;
        state.success = false;
      })
      .addCase(getEmail.rejected, (state, action) => {
        console.log("getEmail.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })

  },
});

export default completedSlice.reducer;

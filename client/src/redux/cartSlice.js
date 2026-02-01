import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartService from "./cartService";

const initialState = {
  loading: false,
  isFinished: false,
  cart: [
    {
      id: "",
      img: "",
      name: "",
      text: "",
      type: "",
      size: [],
      color: [],
      quantity: 0,
      gender: "",
      price: 0,
    },
  ],
  completedId: "",
  cartCompleted: []
  // amount: 0,
  // savings: 0,
  // shipping: 0,
  // totalAmount: 0,
  // totalPrice: 0,
};

export const getCart = createAsyncThunk("cart/get", async (userId) => {
  console.log("get cart", userId);
  try {
    const response = await cartService.getCart(userId);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Broke");
  }
});

export const addToCart = createAsyncThunk("cart/create", async (cart) => {
  // console.log("redux addToCart cart", cart);
  const { userId, product } = cart;
  // console.log("userId", userId, "product", product);
  try {
    const response = await cartService.addToCart(userId, product);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Broke");
  }
});

export const removeFromCart = createAsyncThunk(
  "cart/removeOne",
  async (cart) => {
    // console.log("redux removeFromCart cart", cart);
    const { userId, product } = cart;
    console.log("userId", userId, "product", product);
    try {
      const response = await cartService.removeFromCart(userId, product);
      console.log(response);
      return response.data;
    } catch (err) {
      console.log(err);
      throw new Error("Broke");
    }
  }
);

export const checkout = createAsyncThunk("cart/checkout", async (cart) => {
  console.log("redux checkout cart", cart);
  const { user, shippingAddress, subtotal, total, tax, savings, shipping, testCart } =
    cart;
  console.log(
    user,
    shippingAddress,
    subtotal,
    tax,
    savings,
    shipping,
    testCart
  );
  try {
    const response = await cartService.checkout(
      user,
      shippingAddress,
      subtotal,
      total,
      tax,
      savings,
      shipping,
      testCart
    );
    // console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Broke");
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // carts get one by user id
      .addCase(getCart.pending, (state, action) => {
        // console.log("cartSlice getCart.pending", action.payload);
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        // console.log("cartSlice getCart.fulfilled", action.payload.cart);
        state.loading = false;
        state.cart = action.payload.cart;
        state.success = true;
      })
      .addCase(getCart.rejected, (state, action) => {
        console.log("cartSlice getCart.rejected", action.payload);
        state.loading = false;
      })

      // carts create one
      .addCase(addToCart.pending, (state, action) => {
        // console.log("cartSlice addToCart.pending", action.payload);
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        console.log("cartSlice addToCart.fulfilled", action.payload.user.cart);
        state.loading = false;
        state.cart = action.payload.user.cart;
        state.success = true;
      })
      .addCase(addToCart.rejected, (state, action) => {
        console.log("cartSlice addToCart.rejected", action.payload);
        state.loading = false;
      })

      // removeFromCart
      .addCase(removeFromCart.pending, (state, action) => {
        // console.log("removeFromCart.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        console.log("removeFromCart.fullfilled", action.payload);
        state.loading = true;
        state.cart = action.payload.user.cart;
        state.success = false;
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        console.log("removeFromCart.rejected", action.payload);
        state.loading = true;
        state.success = false;
      })

      // Checkout
      .addCase(checkout.pending, (state, action) => {
        // console.log("cartSlice checkout.pending", action.payload);
        state.loading = true;
      })
      .addCase(checkout.fulfilled, (state, action) => {
        console.log(
          "cartSlice checkout.fulfilled",
          action.payload,
          action.payload.completed.id
        );
        state.cart = [];
        state.completedId = action.payload.completed.id;
        state.success = true;
        state.cartCompleted = action.payload.completed;
        console.log("STATE cart completed", state.cartCompleted)
        state.loading = false;
        state.isFinished = true
      })
      .addCase(checkout.rejected, (state, action) => {
        console.log("cartSlice checkout.rejected", action.payload);
        state.loading = false;
      });

    // // carts get many
    //   .addCase(cartGetMany.pending, (state, action) => {
    //   console.log("cartSlice cartGetMany.pending", action.payload);
    //   state.loading = true;
    // })
    // .addCase(cartGetMany.fulfilled, (state, action) => {
    //   console.log("cartSlice cartGetMany.fulfilled", action.payload);
    //   state.loading = false;
    //   state.carts = action.payload.carts;
    // })
    // .addCase(cartGetMany.rejected, (state, action) => {
    //   console.log("cartSlice cartGetMany.rejected", action.payload);
    //   state.loading = false;
    // })

    // // carts get all
    // .addCase(cartGetAll.pending, (state, action) => {
    //   console.log("cartSlice cartGetAll.pending", action.payload);
    //   state.loading = true;
    // })
    // .addCase(cartGetAll.fulfilled, (state, action) => {
    //   console.log("cartSlice cartGetAll.fulfilled", action.payload);
    //   state.loading = false;
    //   state.carts = action.payload.carts;
    // })
    // .addCase(cartGetAll.rejected, (state, action) => {
    //   console.log("cartSlice cartGetAll.rejected", action.payload);
    //   state.loading = false;
    // })
    // // carts get One
    // .addCase(cartGetOne.pending, (state, action) => {
    //   console.log("cartSlice cartGetOne.pending", action.payload);
    //   state.loading = true;
    // })
    // .addCase(cartGetOne.fulfilled, (state, action) => {
    //   console.log("cartSlice cartGetOne.fulfilled", action.payload); // this
    //   state.loading = false;
    //   state.cart = action.payload[0];
    // })
    // .addCase(cartGetOne.rejected, (state, action) => {
    //   console.log("cartSlice cartGetOne.rejected", action.payload);
    //   state.loading = false;
    // });
  },
});

export default cartSlice.reducer;

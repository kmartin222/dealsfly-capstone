import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  loading: false,
  isLoggedIn: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: {
      street: "",
      street2: "",
      city: "",
      state: "",
      zip: null,
    },
    paymentMethod: {
      cardType: " ",
      cardNumber: " ",
      expirationDate: " ",
      ccv: null,
    },
    billingAddress: {
      street: " ",
      street2: " ",
      city: " ",
      state: " ",
      zip: null,
    },
    orders: {
      orderID: " ",
      date: " ",
      totalPrice: 0,
      savings: 0,
    },
    token: "",
    avatar: "",
    role: "",
    contactNumber: "",
    cart: [],
    wishList: [],
  },
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
};

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { email, password } = credentials;
  const response = await authService.login(email, password);
  return response.data;
});

export const checkLogin = createAsyncThunk("auth/checkLogin", async (token) => {
  const response = await authService.checkLogin(token);
  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async (token) => {
  const response = await authService.logout(token);
   console.log("logout Slice", response);
  return response.data;
});

export const userGetOne = createAsyncThunk("auth/getOne", async (id) => {
  console.log("sliceID", id);
  const response = await authService.userGetOne(id);
  console.log("redux userGetOne user response", response); //this works
  return response.data;
});

export const userUpdate = createAsyncThunk(
  "auth/userUpdate",
  async (userForm) => {
    console.log("userForm", userForm);
    // const response = await userService.userUpdate(userForm);
    const response = await authService.userUpdate(userForm);
    console.log(response.data);
    return response.data;
  }
);
export const updateUserWishList = createAsyncThunk(
  "auth/updateWishList",
  async (data) => {
    const { id, item } = data;
    console.log(id, item);
    const response = await authService.updateUserWishList(id, item);
    return response.data;
  }
);

export const updateUserCart = createAsyncThunk(
  "auth/updateCart",
  async (data) => {
    const { id, item } = data;
    console.log(id, item);
    const response = await authService.updateUserCart(id, item);
    return response.data;
  }
);

export const addUser = createAsyncThunk("auth/addUser", async (data) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    address,
    billingAddress,
    paymentMethod,
    avatar,
    orders,
    role,
    contactNumber,
    cart,
    wishList,
  } = data;

  const response = await authService.addUser(
    firstName,
    lastName,
    email,
    username,
    password,
    address,
    billingAddress,
    paymentMethod,
    avatar,
    orders,
    role,
    contactNumber,
    cart,
    wishList
  );
  return response.data;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToWishList(state, action) {
      console.log("addToWishList action.payload", action.payload);
      const user = action.payload;
      try {
        // If item is already in wishlist
        const addItem = state.user.wishList.find((user) => user.id === user.id);
        // Add item to wishlist, if it's not in
        if (addItem) {
          state.user.wishList = state.user.wishList.filter(
            (user) => user.id !== user.id
          );
        }
        // Add item to wishlist, if it's not in
        else {
          state.user.wishList.push({
            id: user.id,
            price: user.price,
            sizes: user.sizes,
            image: user.image,
            description: user.description,
            userName: user.userName,
          });
        }
      } catch (err) {
        return err;
      }
    },

    removeFromWishList(state, action) {
      const user = action.payload;
      try {
        const removeItem = state.user.wishList.find(
          (user) => user.id === user.id
        );
        if (removeItem.amount === 1) {
          state.user.wishList = state.user.wishList.filter(
            (user) => user.id !== user.id
          );
        }
      } catch (err) {
        return err;
      }
    },

    addToCart(state, action) {
      const user = action.payload;
      try {
        const addItem = state.cart.find(
          (user) => user.id === user.id && user.size === user.size
        );
        if (addItem) {
          addItem.amount++;
          addItem.totalPrice += parseFloat(user.price["$numberDecimal"]);
          state.totalAmount++;
          state.totalPrice =
            parseFloat(state.totalPrice) +
            parseFloat(user.price["$numberDecimal"]);
        } else {
          const priceTotal =
            parseFloat(state.totalPrice) +
            parseFloat(user.price["$numberDecimal"]);
          state.cart.push({
            id: user.id,
            price: user.price,
            size: user.size,
            amount: 1,
            image: user.image,
            description: user.description,
            totalPrice: priceTotal,
            userName: user.userName,
          });
          state.totalAmount++;
          state.totalPrice =
            parseFloat(state.totalPrice) +
            parseFloat(user.price["$numberDecimal"]);
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const user = action.payload;
      try {
        const removeItem = state.cart.find(
          (user) => user.id === user.id && user.size === user.size
        );
        if (removeItem.amount === 1) {
          state.cart = state.cart.filter(
            (user) => user.id !== user.id || user.size !== user.size
          );
          state.totalAmount--;
          state.totalPrice -= user.price["$numberDecimal"];
        } else {
          removeItem.amount--;
          removeItem.totalPrice -= user.price["$numberDecimal"];
          state.totalAmount--;
          state.totalPrice -= user.price["$numberDecimal"];
        }
      } catch (err) {
        return err;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      //login
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
      })

      //checkLogin
      .addCase(checkLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(checkLogin.fulfilled, (state, action) => {
        console.log("checkLogin.fulfilled", action.payload);
        state.loading = false;
        state.isLoggedIn = true;
        state.user = { ...action.payload.user };
      })
      .addCase(checkLogin.rejected, (state, action) => {
        state.loading = false;
      })

      //logout
      .addCase(logout.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = {
          firstName: "",
          lastName: "",
          email: "",
          role: "",
          token: "",
        };
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
      })
      
      //userUpdate
      .addCase(userUpdate.pending, (state, action) => {
        console.log("userUpdate.pending", action.payload);
        state.loading = true;
        state.success = false;
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        console.log("userUpdate.fullfilled", action.payload.user);
        state.loading = true;
        state.user = action.payload.user;
        state.success = false;
      })
      .addCase(userUpdate.rejected, (state, action) => {
        console.log("userUpdate.rejected", action);
        state.loading = true;
        state.success = false;
      })
      // //update user wishList
      // .addCase(updateUserWishList.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(updateUserWishList.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.isLoggedIn = true;
      //   state.user = { ...action.payload.user };
      // })
      // .addCase(updateUserWishList.rejected, (state, action) => {
      //   state.loading = false;
      // })

      // //update user Cart
      // .addCase(updateUserCart.pending, (state, action) => {
      //   state.loading = true;
      // })
      // .addCase(updateUserCart.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.isLoggedIn = true;
      //   state.user = { ...action.payload.user };
      // })
      // .addCase(updateUserCart.rejected, (state, action) => {
      //   state.loading = false;
      // })
      // users get One
      .addCase(userGetOne.pending, (state, action) => {
        console.log("userSlice userGetOne.pending", action.payload);
        state.loading = true;
      })
      .addCase(userGetOne.fulfilled, (state, action) => {
        console.log("userSlice userGetOne.fulfilled", action.payload); // this
        state.loading = false;
        state.user = action.payload[0];
      })
      .addCase(userGetOne.rejected, (state, action) => {
        console.log("userSlice userGetOne.rejected", action.payload);
        state.loading = false;
      })

      //Add New User
      .addCase(addUser.pending, (state, action) => {
        console.log("authSlice addUser.pending");
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        console.log("authSlice addUser.fulfilled");
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(addUser.rejected, (state, action) => {
        console.log("authSlice addUser.rejected");
        state.loading = false;
      });
  },
});

export const { addToWishList, removeFromWishList, addToCart, removeFromCart } =
  authSlice.actions;
export default authSlice.reducer;

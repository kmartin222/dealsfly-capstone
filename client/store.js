import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./src/redux/productSlice.js";
// import sliderReducer from "./redux/sliderSlice";
import cartReducer from "./src/redux/cartSlice.js";
import authReducer from "./src/auth/authSlice.js";
import completedReducer from "./src/redux/completedSlice.js";
import { listenerMiddleware } from "./src/redux/sessionStorageMiddleware.js";

const preloadedState = () => {
  if (localStorage.getItem("token") !== null) {
    return {
      auth: {
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
          token: localStorage.getItem("token"),
          avatar: "",
          role: "",
          contactNumber: "",
          cart: [],
          wishList: [],
        },
      },
    };
  }
  return undefined;
};

export const store = configureStore({
  reducer: {
    product: productReducer,
    // slider: sliderReducer,
    cart: cartReducer,
    auth: authReducer,
    completed: completedReducer,
  },
  preloadedState: preloadedState(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

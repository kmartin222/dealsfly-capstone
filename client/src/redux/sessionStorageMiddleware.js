import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { login, logout } from "../auth/authSlice";

export const listenerMiddleware = createListenerMiddleware();

//login
listenerMiddleware.startListening({
  matcher: isAnyOf(login.fulfilled),
  effect: (action, listenerApi) => {
    console.log("listenerMiddleware login.fulfilled effect");
    const token = listenerApi.getState().auth.user.token;
    console.log(token, token[token.length - 1]);
    localStorage.setItem("token", token[token.length - 1]);
  },
});

//logout
listenerMiddleware.startListening({
  matcher: isAnyOf(logout.fulfilled),
  effect: (action, listenerApi) => {
    console.log("listenerMiddleware logout.fulfilled effect");
    localStorage.removeItem("token");
  },
});

import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register, registerGoogle } from "./operations";

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    error: false,
    token: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.isLoggedIn = false;
        state.user = {
          name: null,
          email: null,
        };
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(registerGoogle.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
      }),
});

export const authReduser = authSlise.reducer;

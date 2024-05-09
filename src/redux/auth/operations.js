import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030/api";

const setHeadersToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearHeadersToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk("register", async (data, thunkAPI) => {
  try {
    const response = await axios.post("/auth/register", data);
    setHeadersToken(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearHeadersToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refresh = createAsyncThunk("refresh", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }
    setHeadersToken(persistToken);
    const response = await axios.get("/auth/refresh");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk("login", async (data, thunkAPI) => {
  try {
    const response = await axios.post("/auth/login", data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const registerGoogle = createAsyncThunk(
  "registerGoogle",
  async (token, thunkAPI) => {
    try {
      setHeadersToken(token);
      const response = await axios.get("/auth/refresh");
      response.data.token = token;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

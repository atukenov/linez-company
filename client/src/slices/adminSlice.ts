import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { UserProps } from "../common/types";
import { setAlert } from "./alertSlice";

const initialState: UserProps = {
  userData: null,
  user: null,
  loading: true,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const fetchUsers = createAsyncThunk(
  "admin/fetchUsers",
  async (arg, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/admin/user", config);
      const data = await res.data;

      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "All Users downloaded" })
        );
        return data;
      }
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "admin/register",
  async (data: any, thunkAPI) => {
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/admin/register", body, config);
      let data = await res.data;
      if (res.status === 200) {
        return { ...data };
      }
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
      console.log("CLEAN", state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log("ALL LOGOS SUCCESS", action.payload);
        state.userData = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log("ALL LOGOS FAIL", action.payload);
        state.loading = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("REGISTER SUCCESS", action.payload);
        state.userData = action.payload;
        state.loading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("REGISTER FAIL", action.payload);
        state.loading = false;
      });
  },
});

export const { cleanData } = adminSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const adminSelector = (state: RootState) => state.admin;

export default adminSlice.reducer;
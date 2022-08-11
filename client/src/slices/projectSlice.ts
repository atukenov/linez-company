import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { LogoProps, ProjectProps } from "../common/types";
import { setAlert } from "./alertSlice";

const initialState: ProjectProps = {
  logoData: null,
  interiorData: null,
  loading: true,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const fetchLogos = createAsyncThunk(
  "logo/all",
  async (arg, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/logo", config);
      let data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "All logos downloaded" })
        );
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

export const projectSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    cleanData: (state) => {
      state = initialState;
      console.log("CLEAN", state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogos.fulfilled, (state, action) => {
        console.log("ALL LOGOS SUCCESS", action.payload);
        state.logoData = action.payload;
        state.loading = false;
      })
      .addCase(fetchLogos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogos.rejected, (state, action) => {
        console.log("ALL LOGOS FAIL", action.payload);
        state = { ...initialState, loading: false };
      });
  },
});

export const { cleanData } = projectSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const projectSelector = (state: RootState) => state.project;

export default projectSlice.reducer;

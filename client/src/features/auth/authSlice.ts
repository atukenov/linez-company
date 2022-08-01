import { SaveTwoTone } from "@ant-design/icons";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

interface AuthState {
  name: string;
  email: string;
  role: string;
  id: string;
  online: number;
}

const initialState: AuthState = {
  name: "",
  role: "",
  email: "",
  id: "",
  online: 0,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, thunkAPI) => {
    const body = JSON.stringify({
      email,
      password,
    });
    try {
      const res = await axios.post("/api/auth/login", body, config);
      let data = await res.data;
      console.log("data", data);
      if (res.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      const e: any = error;
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userLogOut: (state) => {
      state.email = "";
      state.id = "";
      state.name = "";
      state.role = "";
      state.online -= 1;
    },
    userLogIn: (state) => {
      state.online += 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    multipleUsersLogged: (state, action: PayloadAction<number>) => {
      state.online += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.id = action.payload.user.id;
        state.online += 1;
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("payload", action.payload);
      });
  },
});

export const { userLogIn, multipleUsersLogged } = authSlice.actions;

export default authSlice.reducer;

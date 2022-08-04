import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../../app/store";

interface AuthState {
  name: string;
  email: string;
  roles: string;
  id: string;
  avatar: string;
  token: string;
  status: string;
}

const initialState: AuthState = {
  name: "",
  roles: "",
  email: "",
  id: "",
  avatar: "",
  token: "",
  status: "",
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
        return { ...data, status: "ok" };
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

export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: any, thunkAPI) => {
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("api/auth/register", body, config);
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
      state.roles = "";
      state.avatar = "";
      state.token = "";
    },
    userLogIn: (state) => {
      console.log("userLogIn", state);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    multipleUsersLogged: (state, action: PayloadAction<number>) => {
      console.log("multipleLogIn", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        const data = action.payload;
        state.id = data.user._id;
        state.avatar = data.user.avatar;
        state.email = data.user.email;
        state.name = data.user.name;
        state.token = data.token;
        state.roles = data.user.roles;
        state.status = "ok";
      })
      .addCase(loginUser.rejected, (state, action) => {
        console.log("payload", action.payload);
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        const data = action.payload;
        state.id = data.user._id;
        state.avatar = data.user.avatar;
        state.email = data.user.email;
        state.name = data.user.name;
        state.token = data.token;
        state.roles = data.user.roles;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("payload", action.payload);
      });
  },
});

export const { userLogIn, multipleUsersLogged } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const statusSelector = (state: RootState) => state.auth.status;

export default authSlice.reducer;

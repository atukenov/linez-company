import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../../app/store";
import { failure, pending, success } from "../event/eventSlice";

interface AuthState {
  name: string;
  email: string;
  roles: string[];
  id: string;
  avatar: string;
  token: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  name: "",
  roles: [],
  email: "",
  id: "",
  avatar: "",
  token: "",
  isAuth: false,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const loadUser = createAsyncThunk(
  "auth",
  async (token: string, thunkAPI) => {
    config.headers["x-auth-token"] = token;

    try {
      const res = await axios.get("/api/auth", config);
      let data = await res.data;
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

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, thunkAPI) => {
    const body = JSON.stringify({
      email,
      password,
    });
    thunkAPI.dispatch(pending());
    try {
      const res = await axios.post("/api/auth/login", body, config);
      let data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(success("/"));
        return { ...data };
      } else {
        thunkAPI.dispatch(failure(data));
        return thunkAPI.rejectWithValue(data);
      }
    } catch (error) {
      const e: any = error;
      console.log("Error", e.response.data);
      thunkAPI.dispatch(failure(e.response.data));
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
      if (res.status === 200) {
        return { ...data };
      } else {
        thunkAPI.dispatch(failure(data));
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
    userLogout: (state) => {
      state = initialState;
      localStorage.removeItem("token");
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
        state.isAuth = true;
        localStorage.setItem("token", state.token);
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
        state.isAuth = true;
        state.token = data.token;
        state.roles = data.user.roles;
        localStorage.setItem("token", state.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log("payload", action.payload);
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        state.id = action.payload._id;
        state.avatar = action.payload.avatar;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.roles = action.payload.roles;
        state.isAuth = true;
        state.token = localStorage.getItem("token") as string;
      })
      .addCase(loadUser.rejected, (state, action) => {
        console.log("payload", action.payload);
      });
  },
});

export const { userLogout, multipleUsersLogged } = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const userSelector = (state: RootState) => state.auth;

export default authSlice.reducer;

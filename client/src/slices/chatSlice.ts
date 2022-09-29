import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { ChatProps } from "../common/types";
import socket from "../common/utils/socket";
import { setAlert } from "./alertSlice";

const initialState: ChatProps = {
  allMessage: [],
  receivedMessage: null,
  typing: false,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const receiveAllMessage = createAsyncThunk(
  "chat/receiveAllMessage",
  async (query: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/chat/receiveAllMessage", {
        params: query,
        headers: config.headers,
      });
      let data = await res.data;
      if (res.status === 200) {
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

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (data: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/chat/sendMessage", body, config);
      let data = await res.data;
      if (res.status === 200) return data;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    clean: (state) => {
      state = initialState;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    multipleUsersLogged: (state, action: PayloadAction<number>) => {
      console.log("multipleLogIn", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(receiveAllMessage.fulfilled, (state, action) => {
        state.allMessage = action.payload;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        socket.emit("newMessage", action.payload);
      });
  },
});

export const { clean, multipleUsersLogged } = chatSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const chatSelector = (state: RootState) => state.chat;

export default chatSlice.reducer;

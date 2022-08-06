import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notification } from "antd";
import { RootState } from "../../app/store";
import { errorProps } from "../../common/types";

interface eventState {
  error: any;
  path: string | null;
  status: "SUCCESS" | "ERROR" | "PENDING" | null;
}

const initialState: eventState = {
  error: null,
  path: null,
  status: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    pending: (state) => {
      state.status = "PENDING";
    },
    success: (state, action: PayloadAction<string>) => {
      console.log("success", action.payload);
      state.status = "SUCCESS";
      state.path = action.payload;
    },
    failure: (state, action: PayloadAction<errorProps>) => {
      console.log("failure", action.payload);
      state.error = action.payload.msg;
      state.status = "ERROR";
    },
  },
});

export const { success, pending, failure } = eventSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const statusSelector = (state: RootState) => state.event;

export default eventSlice.reducer;

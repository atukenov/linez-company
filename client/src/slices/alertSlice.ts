import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { alertProps } from "../common/types";

const initialState: alertProps = {
  alertType: "idle",
  msg: null,
};

export const alertSlice = createSlice({
  name: "event",
  initialState: initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<alertProps>) => {
      state.alertType = action.payload.alertType;
      state.msg = action.payload.msg;
    },
    clearAlert: (state) => {
      state.alertType = "idle";
      state.msg = null;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const alertSelector = (state: RootState) => state.alert;

export default alertSlice.reducer;

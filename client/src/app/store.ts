import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import alertReducer from "../slices/alertSlice";
import projectReducer from "../slices/projectSlice";
import userReducer from "../slices/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: alertReducer,
    project: projectReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

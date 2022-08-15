import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import alertReducer from "../slices/alertSlice";
import projectReducer from "../slices/projectSlice";
import adminReducer from "../slices/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: alertReducer,
    project: projectReducer,
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

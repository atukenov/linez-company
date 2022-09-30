import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { RootState } from "../app/store";
import { ProjectProps } from "../common/types";
import { setAlert } from "./alertSlice";

const initialState: ProjectProps = {
  logoData: [],
  interiorData: [],
  projectDetails: [],
  steps: [],
  currentStep: 0,
  loading: true,
};

let config = {
  headers: {
    "Content-type": "application/json",
    "x-auth-token": "",
  },
};

export const fetchLogos = createAsyncThunk(
  "project/fetchLogos",
  async (id: string, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/logo/" + id, config);
      const data = await res.data;

      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "All logos downloaded" })
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

export const addLogo = createAsyncThunk(
  "project/addLogo",
  async (data: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/logo", body, config);
      const data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "Logo added" })
        );
      }
      return data;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchTimeline = createAsyncThunk(
  "project/fetchTimeline",
  async (id: string, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/project/" + id, config);
      const data = await res.data;
      return data;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const fetchSteps = createAsyncThunk(
  "project/fetchSteps",
  async (_data, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.get("/api/project/steps", config);
      const data = await res.data;
      return data;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const addTimeline = createAsyncThunk(
  "project/addTimeline",
  async (data: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/project/timeline", body, config);
      const data = await res.data;
      if (res.status === 200) {
        thunkAPI.dispatch(
          setAlert({ alertType: "success", msg: "Timeline added" })
        );
      }
      return data;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const updateDetails = createAsyncThunk(
  "project/updateDetails",
  async (data: any, thunkAPI) => {
    const token = localStorage.token;
    if (token) config.headers["x-auth-token"] = token;
    const body = JSON.stringify(data);
    try {
      const res = await axios.post("/api/project", body, config);
      const newData = await res.data;
      return newData;
    } catch (error) {
      const e: any = error;
      thunkAPI.dispatch(
        setAlert({ alertType: "error", msg: e.response.data.msg })
      );
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const uploadImage = createAsyncThunk(
  "project/uploadImage",
  async (files: any, thunkAPI) => {
    const token = localStorage.token;
    config.headers["Content-type"] = "multipart/form-data";
    if (token) config.headers["x-auth-token"] = token;
    try {
      const res = await axios.post("/api/image", files, config);
      const newData = await res.data;
      thunkAPI.dispatch(
        setAlert({ alertType: "success", msg: "Images updated" })
      );
      return newData;
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
        state.logoData = action.payload;
        state.loading = false;
      })
      .addCase(fetchLogos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogos.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchSteps.fulfilled, (state, action) => {
        state.steps = action.payload;
      })
      .addCase(addLogo.fulfilled, (state, action) => {
        state.logoData.push(action.payload);
        state.loading = false;
      })
      .addCase(addLogo.pending, (state) => {
        state.loading = true;
      })
      .addCase(addLogo.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchTimeline.fulfilled, (state, action) => {
        state.projectDetails = action.payload.steps;
        state.currentStep = action.payload.currentStep;
        state.loading = false;
      })
      .addCase(fetchTimeline.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTimeline.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.projectDetails = state.projectDetails.map((item) => {
          if (item._id === action.payload._id) return action.payload;
          return item;
        });
        state.loading = false;
      })
      .addCase(updateDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDetails.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(addTimeline.fulfilled, (state, action) => {
        state.projectDetails.push(action.payload);
        state.loading = false;
      })
      .addCase(addTimeline.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTimeline.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.projectDetails = state.projectDetails.map((item) => {
          if (item._id === action.payload._id) return action.payload;
          return item;
        });
        state.loading = false;
      })
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { cleanData } = projectSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.auth.value)`
export const projectSelector = (state: RootState) => state.project;

export default projectSlice.reducer;

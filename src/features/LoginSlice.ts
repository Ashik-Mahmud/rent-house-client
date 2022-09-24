import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    loginStart: (state) => {
      state.status = "loading";
    },
    loginSuccess: (state, action) => {
      state.status = "succeeded";
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  loginSlice.actions;

export default loginSlice.reducer;

// Language: typescript
// Path: client\src\features\LoginSlice.ts
// Compare this snippet from client\src\app\store.ts:

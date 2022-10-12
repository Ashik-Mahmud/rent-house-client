import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "reqBlogSlice",
  initialState: {
    requestBlogCount: 0,
    requestHouseCount: 0,
    pendingCount: 0,
  },
  reducers: {
    setRequestBlogCount: (state, { payload }) => {
      state.requestBlogCount = payload;
    },
    setRequestHouseCount: (state, { payload }) => {
      state.requestHouseCount = payload;
    },
    setPendingCount: (state, { payload }) => {
      state.pendingCount = payload;
    },
  },
});

export default requestSlice.reducer;
export const { setRequestBlogCount, setRequestHouseCount, setPendingCount } =
  requestSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const reqBlogSlice = createSlice({
  name: "reqBlogSlice",
  initialState: {
    requesterCount: 0,
  },
  reducers: {
    setRequesterCount: (state, { payload }) => {
      state.requesterCount = payload;
    },
  },
});

export default reqBlogSlice.reducer;
export const { setRequesterCount } = reqBlogSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviewsCount: 0,
  reportsCount: 0,
  questionsCount: 0,
};

const houseActionSlice = createSlice({
  name: "houseAction",
  initialState,
  reducers: {
    setReviewsCount(state, action) {
      state.reviewsCount = action.payload;
    },
    setReportsCount(state, action) {
      state.reportsCount = action.payload;
    },
    setQuestionsCount(state, action) {
      state.questionsCount = action.payload;
    },
  },
});

export const { setQuestionsCount, setReportsCount, setReviewsCount } =
  houseActionSlice.actions;
export default houseActionSlice.reducer;

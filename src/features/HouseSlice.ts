import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unapprovedHouseCount: 0,
  approvedHouseCount: 0,
  rejectedHouseCount: 0,
  pendingHouseCount: 0,
};

const houseSlice = createSlice({
  name: "houseSlice",
  initialState,
  reducers: {
    setUnapprovedHouseCount: (state, { payload }) => {
      state.unapprovedHouseCount = payload;
    },
    setApprovedHouseCount: (state, { payload }) => {
      state.approvedHouseCount = payload;
    },
    setRejectedHouseCount: (state, { payload }) => {
      state.rejectedHouseCount = payload;
    },
    setPendingHouseCount: (state, { payload }) => {
      state.pendingHouseCount = payload;
    },
  },
});

export const {
  setApprovedHouseCount,
  setUnapprovedHouseCount,
  setRejectedHouseCount,
  setPendingHouseCount,
} = houseSlice.actions;
export default houseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

type State = {
  name: String;
  logo: String;
  favicon: string;
};
const initialState: State = {
  name: "",
  logo: "",
  favicon: "",
};
const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAppOptions: (state, action) => {
      state.name = action.payload.name;
      state.logo = action.payload.logo;
      state.favicon = action.payload.favicon;
    },
  },
});

export const { setAppOptions } = AppSlice.actions;
export default AppSlice.reducer;

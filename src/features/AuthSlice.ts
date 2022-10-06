import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { authUserInterface } from "../interfaces/UserInterface";
const cookies = new Cookies();

const initialState: authUserInterface = {
  user: {
    id: 0,
    name: "",
    email: "",
    avatar: "",
  },
  token: "",
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthInformation: (
      state: authUserInterface,
      action: PayloadAction<authUserInterface>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      cookies.set("user", state);
    },
    logout: (state: authUserInterface) => {
      state.user = {
        id: 0,
        name: "",
        email: "",
        avatar: "",
      };
      state.token = "";
      state.isAuthenticated = false;
      cookies.remove("user");
    },
  },
});

export const { setAuthInformation, logout } = AuthSlice.actions;
export default AuthSlice.reducer;

// Language: typescript
// Path: client\src\features\LoginSlice.ts
// Compare this snippet from client\src\app\store.ts:

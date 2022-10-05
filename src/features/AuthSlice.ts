import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

interface authUserInterface {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
  isAuthenticated?: boolean;
}
const initialState: authUserInterface = {
  user: {
    id: 0,
    name: "",
    email: "",
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
  },
});

export const { setAuthInformation } = AuthSlice.actions;
export default AuthSlice.reducer;

// Language: typescript
// Path: client\src\features\LoginSlice.ts
// Compare this snippet from client\src\app\store.ts:

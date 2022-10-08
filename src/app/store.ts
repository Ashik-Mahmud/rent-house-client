import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import AuthReducer from "../features/AuthSlice";
import { authApi } from "../services/AuthApi";
import { ReviewApi } from "../services/ReviewApi";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    auth: AuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ReviewApi.reducerPath]: ReviewApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, ReviewApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
setupListeners(store.dispatch);

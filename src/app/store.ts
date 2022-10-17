import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import type { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import AppReducer from "../features/AppSlice";
import AuthReducer from "../features/AuthSlice";
import RequestReducer from "../features/RequestSlice";
import { authApi } from "../services/AuthApi";
import { BlogApi } from "../services/BlogApi";
import { HouseApi } from "../services/HouseApi";
import { RequestApi } from "../services/RequestApi";
import { ReviewApi } from "../services/ReviewApi";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    auth: AuthReducer,
    request: RequestReducer,
    appOption: AppReducer,
    [authApi.reducerPath]: authApi.reducer,
    [ReviewApi.reducerPath]: ReviewApi.reducer,
    [HouseApi.reducerPath]: HouseApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
    [RequestApi.reducerPath]: RequestApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      ReviewApi.middleware,
      HouseApi.middleware,
      BlogApi.middleware,
      RequestApi.middleware,
    ]),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export default store;
setupListeners(store.dispatch);

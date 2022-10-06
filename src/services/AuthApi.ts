/* Init RTK Query for Auth API */
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";
import { LoginAuthState, UserInterface } from "../interfaces/UserInterface";
const cookies = new Cookies();

type UserType = {
  id?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type LoginType = {
  email?: string;
  password?: string;
};

type getUserType = {
  success: boolean;
  data: UserInterface;
};

interface CustomError {
  data: {
    message: string;
    success: boolean;
  };
  status: number;
}
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders(headers, api) {
      const cookie = cookies.get("user");
      const token = cookie?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  tagTypes: ["GetUser"],
  endpoints: (builder) => ({
    registerAuth: builder.mutation<void, UserType>({
      query: (body) => ({
        url: "/users/create",
        method: "POST",
        body,
      }),
    }),
    loginAuth: builder.mutation<LoginAuthState | null, LoginType>({
      query: (body) => ({
        url: "/users/login",
        method: "POST",
        body,
      }),
    }),

    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/users/update-profile",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["GetUser"],
    }),
    getUser: builder.query<getUserType, string>({
      query: (id) => `/users/me/${id}`,
      providesTags: ["GetUser"],
    }),
  }),
});

export const {
  useRegisterAuthMutation,
  useLoginAuthMutation,
  useGetUserQuery,
  useUpdateProfileMutation,
} = authApi;

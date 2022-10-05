/* Init RTK Query for Auth API */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserType = {
  id: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body: UserType) => ({
        url: "/users/create",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    getUser: builder.query({
      query: () => "/auth/user",
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetUserQuery,
} = authApi;

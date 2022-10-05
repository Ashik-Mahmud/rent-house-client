/* Init RTK Query for Auth API */
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

type UserType = {
  id?: number;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
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
  }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  endpoints: (builder) => ({
    registerAuth: builder.mutation<void, UserType>({
      query: (body) => ({
        url: "/users/create",
        method: "POST",
        body,
      }),
    }),
    loginAuth: builder.mutation({
      query: (body) => ({
        url: "/users/login",
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
  useRegisterAuthMutation,
  useLoginAuthMutation,
  useLogoutMutation,
  useGetUserQuery,
} = authApi;

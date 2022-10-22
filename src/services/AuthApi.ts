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
  role?: string;
  phone?: string;
};

type LoginType = {
  email?: string;
  password?: string;
};

type getUserType = {
  success: boolean;
  data: UserInterface;
};

type paginationType = {
  page: number;
  limit: number;
  role: string;
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
    baseUrl: "${base_backend_url}/api/v1",
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
    changeProfilePicture: builder.mutation({
      query: (body) => ({
        url: "/users/change-profile-picture",
        method: "post",
        body,
      }),
      invalidatesTags: ["GetUser"],
    }),
    getUser: builder.query<getUserType, string>({
      query: (id) => `/users/me/${id}`,
      providesTags: ["GetUser"],
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/users/change-password",
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/users/reset-password",
        method: "POST",
        body,
      }),
    }),
    changePasswordWithoutOldPwd: builder.mutation({
      query: (body) => ({
        url: "/users/change-password/new",
        method: "POST",
        body,
      }),
    }),
    getAllUsersForAdmin: builder.query<any, paginationType>({
      query: (query: any) =>
        `/users/admin?role=${query.role}&limit=${query.limit}&page=${query.page}`,
      providesTags: ["GetUser"],
    }),
    deleteUserForAdmin: builder.mutation({
      query: (id: string) => ({
        url: `/users/admin/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetUser"],
    }),
    getAllUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["GetUser"],
    }),
  }),
});

export const {
  useRegisterAuthMutation,
  useLoginAuthMutation,
  useGetUserQuery,
  useUpdateProfileMutation,
  useChangeProfilePictureMutation,
  useChangePasswordMutation,
  useResetPasswordMutation,
  useChangePasswordWithoutOldPwdMutation,
  useGetAllUsersForAdminQuery,
  useDeleteUserForAdminMutation,
  useGetAllUsersQuery,
} = authApi;

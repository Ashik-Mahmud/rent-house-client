import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/v1/blogs`,
    prepareHeaders: (headers, api) => {
      const cookie = cookies.get("user");
      const token = cookie.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["getBlog"],
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["getBlog"],
    }),
    getBlogsByUid: builder.query({
      query: (data) =>
        `/blogs-by-uid/${data?.uid}?page=${data?.page}&limit=${data?.limit}&q=${data?.q}`,
      providesTags: ["getBlog"],
    }),
    deleteBlogById: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getBlog"],
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    updateBlogById: builder.mutation({
      query: (data) => ({
        url: `/update/${data?._id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getBlog"],
    }),
    changeStatusById: builder.mutation({
      query: (data) => ({
        url: `/change-status/${data?._id}?status=${data?.status}`,
        method: "PATCH",
      }),
      invalidatesTags: ["getBlog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsByUidQuery,
  useDeleteBlogByIdMutation,
  useUpdateBlogByIdMutation,
  useGetBlogByIdQuery,
  useChangeStatusByIdMutation,
} = BlogApi;
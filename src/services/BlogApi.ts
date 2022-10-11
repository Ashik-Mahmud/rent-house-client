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
      query: (uid) => `/blogs-by-uid/${uid}`,
      providesTags: ["getBlog"],
    }),
    deleteBlogById: builder.mutation({
      query: (id) => `/delete/${id}`,
      invalidatesTags: ["getBlog"],
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogsByUidQuery,
  useDeleteBlogByIdMutation,
} = BlogApi;

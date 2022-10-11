import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const BlogApi = createApi({
  reducerPath: "BlogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:1000/api/v1/blogs`,
    prepareHeaders: (headers, api) => {
      const cookie = cookies.get("user");
      const token = cookie.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateBlogMutation } = BlogApi;

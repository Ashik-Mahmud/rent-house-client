import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const RequestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/request",
    prepareHeaders: async (headers) => {
      const cookie = cookies.get("user");
      const token = cookie.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Request"],
  endpoints: (build) => ({
    sendForBlogRequest: build.mutation({
      query: (data) => ({
        url: "/for-blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => [{ type: "Request", id: result }],
    }),
    getAllBlogRequester: build.query({
      query: (data) => ({
        url: `/all-request?page=${data.page}&limit=${data.limit}`,
      }),
      providesTags: ["Request"],
    }),
  }),
});

export const { useGetAllBlogRequesterQuery, useSendForBlogRequestMutation } =
  RequestApi;

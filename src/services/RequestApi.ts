import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";
import { base_backend_url } from "../configs/config";
const cookies = new Cookies();

export const RequestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_backend_url}/api/v1/request`,
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
      invalidatesTags: ["Request"],
    }),
    getAllBlogRequester: build.query({
      query: (data) => ({
        url: `/all-request?page=${data.page}&limit=${data.limit}`,
      }),
      providesTags: ["Request"],
    }),

    /* Send Request for House Holder */
    reqForHouseholderRequest: build.mutation({
      query: (data) => ({
        url: "/for-house",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Request"],
    }),
  }),
});

export const {
  useGetAllBlogRequesterQuery,
  useSendForBlogRequestMutation,
  useReqForHouseholderRequestMutation,
} = RequestApi;

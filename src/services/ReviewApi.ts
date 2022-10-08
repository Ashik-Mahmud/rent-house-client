import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ReviewApi = createApi({
  reducerPath: "ReviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:5000/api/v1/reviews",
    prepareHeaders: (headers, api) => {
      const cookie = cookies.get("user");
      const token = cookie?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    AddReview: builder.mutation({
      query: (body) => ({
        url: "/create-review",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAddReviewMutation } = ReviewApi;

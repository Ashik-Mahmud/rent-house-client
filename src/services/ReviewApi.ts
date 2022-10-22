import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export type AddReviewType = {
  rating: number;
  content: string;
  author?: {
    userId: string | undefined;
    name: string | undefined;
    email: string | undefined;
  };
};

type addReviewTypeResult = {
  success: boolean;
  message: string;
};

type deleteReviewType = {
  success: boolean;
  message: string;
};

export const ReviewApi = createApi({
  reducerPath: "ReviewApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "${base_backend_url}/api/v1/reviews",
    prepareHeaders: (headers, api) => {
      const cookie = cookies.get("user");
      const token = cookie?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["AddReview"],
  endpoints: (builder) => ({
    AddReview: builder.mutation<addReviewTypeResult, AddReviewType | any>({
      query: (body) => ({
        url: "/create-review",
        method: "POST",
        body,
      }),
      invalidatesTags: ["AddReview"],
    }),

    GetReviewsByUser: builder.query<any, string>({
      query: (userId) => ({
        url: `/get-reviews-by-user/${userId}`,
        method: "GET",
      }),
      providesTags: ["AddReview"],
    }),

    DeleteReviewById: builder.mutation<deleteReviewType, string | undefined>({
      query: (reviewId) => ({
        url: `/delete-review/${reviewId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AddReview"],
    }),
    getAllReviews: builder.query({
      query: () => ({
        url: `/all`,
        method: "GET",
      }),
      providesTags: ["AddReview"],
    }),
  }),
});

export const {
  useAddReviewMutation,
  useGetReviewsByUserQuery,
  useDeleteReviewByIdMutation,
  useGetAllReviewsQuery,
} = ReviewApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";
import { base_backend_url } from "../configs/config";
const cookies = new Cookies();
export const HouseApi = createApi({
  reducerPath: "HouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${base_backend_url}/api/v1/houses`,
    prepareHeaders: (headers, api) => {
      const cookie = cookies.get("user");
      const token = cookie.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["House"],
  endpoints: (builder) => ({
    createHouse: builder.mutation({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["House"],
    }),
    getHouseByUser: builder.query({
      query: (id) => ({
        url: `/get-house-by-user/${id}`,
        method: "GET",
      }),
      providesTags: ["House"],
    }),
    getHouseByHouseId: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ["House"],
    }),
    updateHouseById: builder.mutation({
      query: (body) => ({
        url: `/update/${body.id}`,
        method: "PATCH",
        body: body.data,
      }),
      invalidatesTags: ["House"],
    }),

    deleteHouseById: builder.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["House"],
    }),
    addFavoriteHouse: builder.mutation({
      query: (body) => ({
        url: `/like-count/${body.id}?clicked=${body?.clicked}`,
        method: "PATCH",
      }),
      invalidatesTags: ["House"],
    }),
  }),
});

export const {
  useCreateHouseMutation,
  useGetHouseByUserQuery,
  useGetHouseByHouseIdQuery,
  useDeleteHouseByIdMutation,
  useUpdateHouseByIdMutation,
  useAddFavoriteHouseMutation,
} = HouseApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const HouseApi = createApi({
  reducerPath: "HouseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/api/v1/houses`,
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
    createHouse: builder.mutation({
      query: (body) => ({
        url: "/create",
        method: "POST",
        body,
      }),
    }),
    getHouseByUser: builder.query({
      query: (id) => ({
        url: `/get-house-by-user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateHouseMutation, useGetHouseByUserQuery } = HouseApi;
